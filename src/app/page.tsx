import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { fetchHomePageDataWithRevalidation, checkStrapiHealth } from '@/lib/strapi-service';
import { transformStrapiData } from '@/utils/strapi-transformers';
import { DynamicSectionRenderer } from '@/components/DynamicSectionRenderer';
import { PageLoadingSkeleton, ErrorSkeleton } from '@/components/ui/loading-skeleton';

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

// Server-side data fetching
async function getHomePageData() {
  try {
    // Check if Strapi is available
    const isHealthy = await checkStrapiHealth();
    if (!isHealthy) {
      throw new Error('Strapi is not available');
    }

    // Fetch data with revalidation
    const response = await fetchHomePageDataWithRevalidation(60);
    
    if (!response?.data) {
      throw new Error('No data received from Strapi');
    }

    // Transform the data for our components
    const transformedData = transformStrapiData(response.data);
    
    return transformedData;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
}

// Main page component
export default async function Home() {
  try {
    const data = await getHomePageData();
    
    return (
      <Suspense fallback={<PageLoadingSkeleton />}>
        <DynamicSectionRenderer data={data} />
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
