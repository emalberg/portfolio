"use client"
import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import { CERTIFICATE_SECTION_CONSTANTS, COMPONENT_IDS } from '@/constants/constants';
import { Certificate } from '@/components/Certificate';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import DecorativeElements from '@/components/DecorativeElements/DecorativeElements';
import {
  createCertificateSectionAnimation,
  getCertificateContainerClasses,
  getCertificateInnerContainerClasses,
  getCertificateGridContainerClasses,
  validateCertificateSectionData,
  filterValidCertificates,
} from '@/utils';
import type { CertificateData } from './types';
import { CertificatesEmptyState } from '@/components/ui/empty-state';

export default function CertificateSection({ 
  title, 
  description, 
  certificates,
  floatingStyles,
  isLoading = false
}: { 
  title: string; 
  description: string; 
  certificates: CertificateData[];
  floatingStyles?: string;
  isLoading?: boolean;
}) {
  const [showEmptyState, setShowEmptyState] = useState(false);
  const animations = createCertificateSectionAnimation();

  // Filter out invalid certificates
  const validCertificates = filterValidCertificates(certificates);

  // Create the data object expected by the existing components
  const sectionData = {
    Title: title,
    Description: description,
    Certificates: validCertificates
  };

  // Handle skeleton to empty state transition
  useEffect(() => {
    if (!isLoading && validCertificates.length === 0) {
      // Show skeleton for a brief moment, then show empty state
      const timer = setTimeout(() => {
        setShowEmptyState(true);
      }, 2000); // 2 second delay to show skeleton first

      return () => clearTimeout(timer);
    } else {
      setShowEmptyState(false);
    }
  }, [isLoading, validCertificates.length]);

  // If no valid certificates and showEmptyState is true, show empty state message
  if (!isLoading && validCertificates.length === 0 && showEmptyState) {
    return (
      <section 
        id={COMPONENT_IDS.CERTIFICATES_SECTION}
        className={getCertificateContainerClasses(floatingStyles)}
      >
        <div className={getCertificateInnerContainerClasses()}>
          <SectionHeader 
            title={sectionData.Title} 
            animations={animations}
            description={sectionData.Description}
          />
          <div className="max-w-2xl mx-auto mt-8 md:mt-12">
            <CertificatesEmptyState />
          </div>
        </div>
      </section>
    );
  }

  // If loading or no valid certificates (but not showing empty state yet), show skeleton loading
  if (isLoading || (validCertificates.length === 0 && !showEmptyState)) {
    return (
      <section 
        id={COMPONENT_IDS.CERTIFICATES_SECTION}
        className={getCertificateContainerClasses(floatingStyles)}
      >
        <div className={getCertificateInnerContainerClasses()}>
          <SectionHeader 
            title={sectionData.Title} 
            animations={animations}
            description={sectionData.Description}
          />
          <div className={getCertificateGridContainerClasses()}>
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                variants={animations.item}
                className="w-full h-full"
              >
                <Certificate 
                  name=""
                  issuer=""
                  dateReceived=""
                  image={null}
                  isLoading={true} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Validate certificate section data
  if (!validateCertificateSectionData(sectionData)) {
    console.warn('CertificateSection: Invalid certificate section data provided', sectionData);
    return null;
  }

  return (
    <section 
      id={COMPONENT_IDS.CERTIFICATES_SECTION}
      className={getCertificateContainerClasses(floatingStyles)}
    >
      <div className={getCertificateInnerContainerClasses()}>
        <SectionHeader 
          title={sectionData.Title} 
          animations={animations}
          description={sectionData.Description}
        />

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: false, 
            amount: CERTIFICATE_SECTION_CONSTANTS.ANIMATION.GRID_VIEWPORT_AMOUNT 
          }}
        >
          {/* Grid layout for certificates */}
          <div className={getCertificateGridContainerClasses()}>
            {isLoading ? (
              // Show skeleton certificates while loading
              Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  variants={animations.item}
                  className="w-full h-full"
                >
                  <Certificate 
                    name=""
                    issuer=""
                    dateReceived=""
                    image={null}
                    isLoading={true} 
                  />
                </motion.div>
              ))
            ) : (
              sectionData.Certificates.map((certificate, index) => (
                <motion.div
                  key={`${certificate.id as number}-${index}`}
                  variants={animations.item}
                  className="w-full h-full"
                >
                  <Certificate
                    name={certificate.name as string}
                    issuer={certificate.issuer as string}
                    dateReceived={certificate.dateReceived as string}
                    expirationDate={certificate.expirationDate as string | undefined}
                    image={certificate.image as { url: string; alt: string } | null}
                  />
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        <DecorativeElements />
      </div>
    </section>
  );
}
