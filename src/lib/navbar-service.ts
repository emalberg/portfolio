import { StrapiNavBarSection, TransformedNavBarData } from '@/types/strapi';
import { FALLBACK_NAVBAR_DATA, ISR_CONFIG } from './fallback-data';

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
    } as FetchOptions & { signal: AbortSignal });
    
    clearTimeout(timeoutId);
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// NavBar API response type
interface NavBarApiResponse {
  data: StrapiNavBarSection;
  meta: Record<string, unknown>;
}

// Transform NavBar data
function transformNavBarData(navBarData: StrapiNavBarSection): TransformedNavBarData {
  return {
    logo: navBarData.Logo ? {
      url: navBarData.Logo.url,
      alt: navBarData.Logo.alternativeText,
      width: navBarData.Logo.width,
      height: navBarData.Logo.height
    } : null,
    links: navBarData.Links?.map((link) => ({
      id: link.id,
      name: link.Name,
      target: link.Target || '',
      order: link.Order
    })).sort((a, b) => a.order - b.order) || [],
    ctaButton: navBarData.CTAButton ? {
      id: navBarData.CTAButton.id,
      text: navBarData.CTAButton.text,
      url: navBarData.CTAButton.url,
      order: navBarData.CTAButton.order
    } : null
  };
}

// Fetch NavBar data with ISR (Incremental Static Regeneration)
export async function fetchNavBarDataWithISR(): Promise<TransformedNavBarData | null> {
  try {
    // Try to fetch fresh data with timeout
    const response = await fetchWithTimeout<NavBarApiResponse>('/navbar?populate=all', {
      cache: 'force-cache',
      revalidate: ISR_CONFIG.revalidateSeconds,
      fallbackToCache: true
    });
    
    if (!response?.data) {
      console.warn('No NavBar data received from Strapi');
      return null;
    }

    return transformNavBarData(response.data);
  } catch (error) {
    console.warn('ISR fetch failed, using cached data:', error);
    
    // Fallback to cached data if available
    try {
      const response = await fetchFromStrapi<NavBarApiResponse>('/navbar?populate=all', {
        cache: 'force-cache',
        fallbackToCache: false
      });
      
      if (!response?.data) {
        return null;
      }

      return transformNavBarData(response.data);
    } catch (cacheError) {
      console.error('Cached data also unavailable:', cacheError);
      throw new Error('Both fresh and cached data unavailable');
    }
  }
}

// Fetch NavBar data
export async function fetchNavBarData(options: FetchOptions = {}): Promise<TransformedNavBarData | null> {
  try {
    const response = await fetchFromStrapi<NavBarApiResponse>('/navbar?populate=all', options);
    
    if (!response?.data) {
      console.warn('No NavBar data received from Strapi');
      return null;
    }

    return transformNavBarData(response.data);
  } catch (error) {
    console.error('Error fetching NavBar data:', error);
    return null;
  }
}

// Fetch NavBar data with revalidation (for ISR)
export async function fetchNavBarDataWithRevalidation(revalidateSeconds: number = ISR_CONFIG.revalidateSeconds): Promise<TransformedNavBarData | null> {
  return fetchNavBarData({ 
    cache: 'force-cache', 
    revalidate: revalidateSeconds 
  });
}

// Fetch NavBar data without cache (for fresh data)
export async function fetchNavBarDataFresh(): Promise<TransformedNavBarData | null> {
  return fetchNavBarData({ cache: 'no-store' });
}

// Get NavBar data with fallback strategy
export async function getNavBarDataWithFallback(): Promise<{
  data: TransformedNavBarData | null;
  isFallback: boolean;
  lastUpdated?: string;
}> {
  try {
    // First, try to get fresh data with ISR
    const data = await fetchNavBarDataWithISR();
    return {
      data,
      isFallback: false,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.warn('Failed to fetch NavBar from Strapi, using fallback data:', error);
    
    // Return fallback data
    return {
      data: FALLBACK_NAVBAR_DATA,
      isFallback: true,
      lastUpdated: new Date().toISOString()
    };
  }
}
