import HeroSection from '@/components/sections/HeroSection/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection 
        name="Erich Malberg"
        phrase="I develop"
        keywords={{
          technologies: [
            "web applications",
            "mobile apps", 
            "APIs",
            "full-stack solutions",
            "microservices",
            "front ends",
            "back ends"
          ],
          creative: [
            "user-centered experiences",
            "data-driven interfaces",
            "interactive UIs"
          ]
        }}
        bio1Title="About Me"
        bio1Content="I'm a passionate developer with expertise in modern web technologies and a love for creating beautiful, functional applications that make a difference. makicsdf;lksfj;oaiejlka;jfiajsf afkj;iejaf jadlksj ew afdj lke jajs daklfjfio fejaklfj sdij eaiksjf kajf;eija falk jdieja fi sj tjklahtkjehjtkhaekjtheakt jtahe kthewkj htak tjaeth luae the waht eliuha jsdh teahrek ljhtruiahe rkjhear  jtaeh rueh aekj hf"
        bio2Title="What I Do"
        bio2Content="I specialize in full-stack development, focusing on React, TypeScript, and modern web frameworks to build scalable solutions that users love."
      />
    </main>
  )
}
