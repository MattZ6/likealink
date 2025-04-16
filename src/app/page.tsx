import Image from 'next/image'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr/YoutubeLogo'
import { TiktokLogo } from '@phosphor-icons/react/dist/ssr/TiktokLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { SpotifyLogo } from '@phosphor-icons/react/dist/ssr/SpotifyLogo'
import { MusicNote } from '@phosphor-icons/react/dist/ssr/MusicNote'

import bandLogo from '../../public/logo.webp'

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col gap-6 min-h-full max-w-3xl mx-auto py-20 px-4">
        <Image src={bandLogo} alt="" className="size-28 md:size-40 rounded-xl self-center shadow-md" />

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
        <a href="https://tiktok.com/@likeatear" target="_blank" className="flex items-center justify-center size-10 rounded-md hover:bg-muted text-foreground">
          <TiktokLogo weight="light" className="size-8" />
        </a>
      </div>

      <a href="https://open.spotify.com/intl-pt/track/43WN6G6fDiat8RPDyTFOT7" target="_blank" className="flex items-center justify-center self-center gap-2 min-h-8 rounded-full border border-border w-fit px-3 py-1 shadow-sm">
        <MusicNote className="size-4 hidden md:block" />
        <span className="text-center text-base">Ouça nosso novo single, {'"'}Melhor do Que Antes{'"'}</span>
      </a>

      <nav className="flex flex-col gap-2 w-full max-w-xl mx-auto">
        <a href="https://www.youtube.com/watch?v=f7t4GUuzAHQ" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Veja o lyric vídeo de {'"'}Melhor do Que Antes{'"'} no YouTube
        </a>
        <a href="https://instagram.com/likeatear_" target="_blank" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Siga gente no Insta
        </a>
        <a href="https://likeatear.com" target="_blank" className="flex items-center justify-center rounded-md min-h-12 py-2 text-center hover:bg-gray-100 border border-border md:border-0">
          Conheça nosso site
        </a>
      </nav>
    </main>
  )
}