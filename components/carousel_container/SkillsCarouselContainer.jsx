'use client';
import SkillsCarousel from '../skils_carousel/SkillsCarousel';
import { SkillsContainer } from './CarouselContainer.styles';
import HTMLLogo from '../../public/assets/HTML5_Logo_512.png';
import CSSLogo from '../../public/assets/css-3-seeklogo.png';
import JavaScriptLogo from '../../public/assets/javascript.png';
import ReactLogo from '../../public/assets/re269re79-react-logo-react-logo.png';
import NodeLogo from '../../public/assets/no6273n057-node-js-logo-nodejs-transparent-logo-google-search.png';
import JavaLogo from '../../public/assets/java-1-logo-png-transparent.png';

export default function SkillsCarouselContainer() {
  const logos = [
    { src: HTMLLogo, alt: 'HTML logo' },
    { src: CSSLogo, alt: 'CSS logo' },
    { src: JavaScriptLogo, alt: 'Javascript logo' },
    { src: ReactLogo, alt: 'React logo' },
    { src: NodeLogo, alt: 'Node logo' },
    { src: JavaLogo, alt: 'Java logo' },
  ];
  return (
    <SkillsContainer>
      <SkillsCarousel logos={logos} />
    </SkillsContainer>
  );
}
