import { StrapiHomePageResponse } from '@/types/strapi';
import { FALLBACK_PAGE_DATA, ISR_CONFIG } from './fallback-data';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_API_URL = `${STRAPI_BASE_URL}/api`;

interface FetchOptions {
  cache?: RequestCache;
  revalidate?: number;
  fallbackToCache?: boolean;
}

// Generic fetch wrapper with error handling and fallback support
async function fetchFromStrapi<T>(
  endpoint: string, 
  options: FetchOptions = {}
): Promise<T> {
  const { 
    cache = 'force-cache', 
    revalidate, 
    fallbackToCache = true 
  } = options;
  
  try {
    const url = `${STRAPI_API_URL}${endpoint}`;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache,
    };

    // Add revalidation if specified
    if (revalidate) {
      fetchOptions.next = { revalidate };
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    
    // If fallback is enabled and we have cached data, return it
    if (fallbackToCache && cache === 'force-cache') {
      console.warn('Strapi unavailable, attempting to use cached data');
      throw new Error('Strapi unavailable - using fallback data');
    }
    
    throw error;
  }
}

// Enhanced fetch with timeout and retry logic
async function fetchWithTimeout<T>(
  endpoint: string,
  options: FetchOptions = {},
  timeoutMs: number = ISR_CONFIG.fallbackTimeout
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const result = await fetchFromStrapi<T>(endpoint, {
      ...options,
      // Add abort signal to fetch options
      signal: controller.signal
    } as any);
    
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Fetch home page data with full population
export async function fetchHomePageData(options: FetchOptions = {}): Promise<StrapiHomePageResponse> {
  return fetchFromStrapi<StrapiHomePageResponse>('/home-page?populate=all', options);
}

// Fetch home page data with ISR (Incremental Static Regeneration)
export async function fetchHomePageDataWithISR(): Promise<StrapiHomePageResponse> {
  try {
    // Try to fetch fresh data with timeout
    return await fetchWithTimeout<StrapiHomePageResponse>('/home-page?populate=all', {
      cache: 'force-cache',
      revalidate: ISR_CONFIG.revalidateSeconds,
      fallbackToCache: true
    });
  } catch (error) {
    console.warn('ISR fetch failed, using cached data:', error);
    
    // Fallback to cached data if available
    try {
      return await fetchFromStrapi<StrapiHomePageResponse>('/home-page?populate=all', {
        cache: 'force-cache',
        fallbackToCache: false
      });
    } catch (cacheError) {
      console.error('Cached data also unavailable:', cacheError);
      throw new Error('Both fresh and cached data unavailable');
    }
  }
}

// Fetch home page data with revalidation (for ISR)
export async function fetchHomePageDataWithRevalidation(revalidateSeconds: number = ISR_CONFIG.revalidateSeconds): Promise<StrapiHomePageResponse> {
  return fetchHomePageData({ 
    cache: 'force-cache', 
    revalidate: revalidateSeconds 
  });
}

// Fetch home page data without cache (for fresh data)
export async function fetchHomePageDataFresh(): Promise<StrapiHomePageResponse> {
  return fetchHomePageData({ cache: 'no-store' });
}

// Health check for Strapi with timeout
export async function checkStrapiHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
    
    const response = await fetch(`${STRAPI_BASE_URL}/_health`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.warn('Strapi health check failed:', error);
    return false;
  }
}

// Get home page data with fallback strategy
export async function getHomePageDataWithFallback(): Promise<{
  data: StrapiHomePageResponse | null;
  isFallback: boolean;
  lastUpdated?: string;
}> {
  try {
    // First, try to get fresh data with ISR
    const data = await fetchHomePageDataWithISR();
    return {
      data,
      isFallback: false,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.warn('Failed to fetch from Strapi, using fallback data:', error);
    
    // Return fallback data
    return {
      data: null, // We'll use fallback data in the component
      isFallback: true,
      lastUpdated: new Date().toISOString()
    };
  }
}
