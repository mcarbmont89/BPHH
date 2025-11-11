import React from 'react'

type Props = {
  provider: 'youtube' | 'vimeo' | 'custom'
  url: string
  title?: string
  start?: number
  allowFullScreen?: boolean
  aspect?: '16:9' | '4:3' | '1:1'
  privacyEnhanced?: boolean
}

function toEmbedSrc(provider: Props['provider'], rawUrl: string, start?: number, privacyEnhanced = true): string | null {
  try {
    const u = new URL(rawUrl)

    if (provider === 'youtube') {
      let id = ''
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.replace('/', '')
      } else {
        id = u.searchParams.get('v') || ''
      }
      if (!id) return null

      const params = new URLSearchParams()
      if (start && start > 0) params.set('start', String(start))
      params.set('rel', '0')
      params.set('modestbranding', '1')
      params.set('playsinline', '1')
      if (typeof window !== 'undefined') {
        params.set('origin', window.location.origin)
      }

      const host = privacyEnhanced ? 'www.youtube-nocookie.com' : 'www.youtube.com'
      return `https://${host}/embed/${id}?${params.toString()}`
    }

    if (provider === 'vimeo') {
      const id = u.pathname.replace('/', '')
      if (!id || !/^\d+$/.test(id)) return null
      const params = new URLSearchParams()
      const timeHash = start && start > 0 ? `#t=${start}s` : ''
      return `https://player.vimeo.com/video/${id}${params.toString() ? '?' + params.toString() : ''}${timeHash}`
    }

    if (!/^https?:\/\//i.test(rawUrl)) return null
    return rawUrl
  } catch {
    return null
  }
}

function aspectToPadding(aspect?: Props['aspect']) {
  switch (aspect) {
    case '4:3':
      return '75%'
    case '1:1':
      return '100%'
    case '16:9':
    default:
      return '56.25%'
  }
}

export default function VideoEmbed(props: Props) {
  const src = toEmbedSrc(props.provider, props.url, props.start, props.privacyEnhanced ?? true)
  if (!src) return null

  const paddingTop = aspectToPadding(props.aspect)

  const isYTOrVimeo = props.provider === 'youtube' || props.provider === 'vimeo'

  return (
    <div className="my-6">
      <div className="relative w-full" style={{ paddingTop }}>
        <iframe
          src={src}
          title={props.title || 'Embedded video'}
          className="absolute inset-0 w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy={isYTOrVimeo ? 'strict-origin-when-cross-origin' : 'no-referrer'}
          {...(isYTOrVimeo
            ? {}
            : { sandbox: 'allow-scripts allow-same-origin allow-popups allow-forms allow-presentation' })}
          allowFullScreen={props.allowFullScreen ?? true}
        />
      </div>
      {props.title ? (
        <p className="text-sm text-gray-500 mt-2 text-center">{props.title}</p>
      ) : null}
    </div>
  )
}
