"use client"
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
} from '@/utils';
import type { CertificateSectionProps } from './types';

export default function CertificateSection({ 
  title, 
  description, 
  certificates,
  floatingStyles
}: { 
  title: string; 
  description: string; 
  certificates: Array<{
    id: number;
    name: string;
    issuer: string;
    dateReceived: string;
    expirationDate?: string;
    image: {
      url: string;
      alt: string;
    };
  }>;
  floatingStyles?: string;
}) {
  const animations = createCertificateSectionAnimation();

  // Create the data object expected by the existing components
  const sectionData = {
    Title: title,
    Description: description,
    Certificates: certificates
  };

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
            {sectionData.Certificates.map((certificate, index) => (
              <motion.div
                key={`${certificate.id}-${index}`}
                variants={animations.item}
                className="w-full h-full"
              >
                <Certificate
                  name={certificate.name}
                  issuer={certificate.issuer}
                  dateReceived={certificate.dateReceived}
                  expirationDate={certificate.expirationDate}
                  image={certificate.image}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <DecorativeElements />
      </div>
    </section>
  );
}
