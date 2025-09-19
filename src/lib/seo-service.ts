export interface SEOData {
  id: number;
  Title: string;
  Description: string;
  Keywords: string;
  Canonical_Url: string;
  OG_Title: string;
  OG_Description: string;
  OG_Image: string;
  OG_Type: string;
  Schema_Data: Record<string, unknown>;
}

export async function fetchSEOData(): Promise<SEOData | null> {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    
    if (!strapiUrl) {
      console.warn('NEXT_PUBLIC_STRAPI_URL is not configured. Please create a .env.local file with NEXT_PUBLIC_STRAPI_URL=http://localhost:1337');
      return null;
    }

    const response = await fetch(
      `${strapiUrl}/api/seo-metadata`,
      {
        next: { revalidate: 300 }, // 5 minutes cache
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch SEO data: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}
