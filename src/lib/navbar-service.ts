import { StrapiNavBarSection, TransformedNavBarData } from '@/types/strapi';

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
export async function fetchNavBarDataWithRevalidation(revalidateSeconds: number = 60): Promise<TransformedNavBarData | null> {
  return fetchNavBarData({ 
    cache: 'force-cache', 
    revalidate: revalidateSeconds 
  });
}

// Fetch NavBar data without cache (for fresh data)
export async function fetchNavBarDataFresh(): Promise<TransformedNavBarData | null> {
  return fetchNavBarData({ cache: 'no-store' });
}
