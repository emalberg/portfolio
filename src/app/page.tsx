import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getHomePageDataWithFallback } from '@/lib/strapi-service';
import { transformStrapiData } from '@/utils/strapi-transformers';
import { DynamicSectionRenderer } from '@/components/DynamicSectionRenderer';
import { PageLoadingSkeleton, ErrorSkeleton } from '@/components/ui/loading-skeleton';
import { FALLBACK_PAGE_DATA, ISR_CONFIG } from '@/lib/fallback-data';

// Revalidate every 5 minutes in production, 1 minute in development
export const revalidate = ISR_CONFIG.revalidateSeconds;

// Server-side data fetching with SSG/ISR and fallback strategy
async function getHomePageData() {
  try {
    // Get data with fallback strategy
    const result = await getHomePageDataWithFallback();
    
    if (result.isFallback) {
      console.warn('Using fallback data - Strapi unavailable');
      return {
        data: FALLBACK_PAGE_DATA,
        isFallback: true,
        lastUpdated: result.lastUpdated
      };
    }
    
    if (!result.data?.data) {
      throw new Error('No data received from Strapi');
    }

    // Transform the data for our components
    const transformedData = transformStrapiData(result.data.data);
    
    return {
      data: transformedData,
      isFallback: false,
      lastUpdated: result.lastUpdated
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    
    // Return fallback data as last resort
    console.warn('All data fetching failed, using fallback data');
    return {
      data: FALLBACK_PAGE_DATA,
      isFallback: true,
      lastUpdated: new Date().toISOString()
    };
  }
}

// Main page component with SSG/ISR
export default async function Home() {
  try {
    const result = await getHomePageData();
    
    return (
      <Suspense fallback={<PageLoadingSkeleton />}>
        <DynamicSectionRenderer 
          data={result.data} 
          isFallback={result.isFallback}
          lastUpdated={result.lastUpdated}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load home page:', error);
    
    // Return 404 for data not found, error skeleton for other errors
    if (error instanceof Error && error.message.includes('No data')) {
      notFound();
    }
    
    return <ErrorSkeleton />;
  }
}
