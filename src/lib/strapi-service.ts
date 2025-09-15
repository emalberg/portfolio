import { StrapiHomePageResponse } from '@/types/strapi';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_API_URL = `${STRAPI_BASE_URL}/api`;

interface FetchOptions {
  cache?: RequestCache;
  revalidate?: number;
}

// Generic fetch wrapper with error handling
async function fetchFromStrapi<T>(
  endpoint: string, 
  options: FetchOptions = {}
): Promise<T> {
  const { cache = 'force-cache', revalidate } = options;
  
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
    throw error;
  }
}

// Fetch home page data with full population
export async function fetchHomePageData(options: FetchOptions = {}): Promise<StrapiHomePageResponse> {
  return fetchFromStrapi<StrapiHomePageResponse>('/home-page?populate=all', options);
}

// Fetch home page data with revalidation (for ISR)
export async function fetchHomePageDataWithRevalidation(revalidateSeconds: number = 60): Promise<StrapiHomePageResponse> {
  return fetchHomePageData({ 
    cache: 'force-cache', 
    revalidate: revalidateSeconds 
  });
}

// Fetch home page data without cache (for fresh data)
export async function fetchHomePageDataFresh(): Promise<StrapiHomePageResponse> {
  return fetchHomePageData({ cache: 'no-store' });
}

// Health check for Strapi
export async function checkStrapiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}/_health`);
    return response.ok;
  } catch {
    return false;
  }
}
