import { useState } from 'react'

interface BackgroundImageProps {
  src: string
}

const MIN_ART_WIDTH = 1280

export function BackgroundImage({ src }: BackgroundImageProps) {
  const [showArt, setShowArt] = useState(false)

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#070B1B]">
      <img
        src={src}
        alt=""
        draggable={false}
        onLoad={(e) => {
          setShowArt(e.currentTarget.naturalWidth >= MIN_ART_WIDTH)
        }}
        onError={() => setShowArt(false)}
        className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
          showArt ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
