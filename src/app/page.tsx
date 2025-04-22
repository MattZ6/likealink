import Image from 'next/image'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr/YoutubeLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { SpotifyLogo } from '@phosphor-icons/react/dist/ssr/SpotifyLogo'

import bandLogo from '../../public/logo.webp'
import melhorDoQueAntesVynil from '../../public/melhor-do-que-antes.jpg'
import audioWave from '../../public/audio-wave.gif'

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col gap-6 min-h-full max-w-3xl mx-auto py-20 px-4">
      <Image src={bandLogo} alt="" placeholder="blur" className="size-28 md:size-40 rounded-xl self-center shadow-md border border-border" />

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center text-2xl text-foreground font-mono font-medium">Like a Tear</h2>
        <p className="text-center text-base text-muted-foreground font-mono">Hardcore melódico de Guarapuava, PR.</p>
      </div>

      <hr className="self-center w-28 h-[1px] border-0 bg-border" />

      <div className="flex gap-2 items-center justify-center">
        <a href="https://open.spotify.com/intl-pt/artist/6UT0bycABPfvalMWR3TWVG" target="_blank" className="flex items-center justify-center size-10 rounded-md hover:bg-muted text-foreground">
          <SpotifyLogo weight="light" className="size-8" />
        </a>
        <a href="https://instagram.com/likeatear_" target="_blank" className="flex items-center justify-center size-10 rounded-md hover:bg-muted text-foreground">
          <InstagramLogo weight="light" className="size-8" />
        </a>
        <a href="https://www.youtube.com/@LikeaTear" target="_blank" className="flex items-center justify-center size-10 rounded-md hover:bg-muted text-foreground">
          <YoutubeLogo weight="light" className="size-8" />
        </a>
      </div>

      <a
        href="https://open.spotify.com/intl-pt/track/43WN6G6fDiat8RPDyTFOT7?si=1a89f4b9527547b6"
        target="_blank"
        className="flex items-center gap-4 p-4 bg-primary rounded-md max-w-[420px] w-full self-center relative"
      >
        <Image src={melhorDoQueAntesVynil} alt="" placeholder="blur" className="size-20 bg-background rounded-xs" />

        <div className="flex flex-col gap-1">
          <span className="font-medium text-base text-primary-foreground">Melhor do Que Antes</span>
          <span className="text-base text-primary-foreground">Nosso mais novo single! 🔥</span>
        </div>

        <Image unoptimized src={audioWave} alt="" className="size-12 absolute bottom-1 right-2" />
      </a>

      <nav className="flex flex-col gap-2 w-full max-w-xl mx-auto">
        <a href="https://www.youtube.com/watch?v=f7t4GUuzAHQ" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Veja o lyric vídeo de {'"'}Melhor do Que Antes{'"'} no YouTube
        </a>
        <a href="https://instagram.com/likeatear_" target="_blank" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Siga a gente no Insta
        </a>
        <a href="https://likeatear.com" target="_blank" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Conheça nosso site
        </a>
      </nav>
    </main>
  )
}