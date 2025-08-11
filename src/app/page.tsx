import HeroSection from '@/components/sections/HeroSection/HeroSection'
import { MAIN_PAGE_CONTENT } from '@/constants/constants'

export default function Home() {
  const { HERO } = MAIN_PAGE_CONTENT
  
  return (
    <main>
      <HeroSection 
        name={HERO.name}
        phrase={HERO.phrase}
        keywords={HERO.keywords}
        bio1Title={HERO.bio.about.title}
        bio1Content={HERO.bio.about.content}
        bio2Title={HERO.bio.work.title}
        bio2Content={HERO.bio.work.content}
      />
    </main>
  )
}
