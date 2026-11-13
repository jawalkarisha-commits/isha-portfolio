import { useEffect } from 'react'

// Sets the browser tab title and meta description for each page (SEO).
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Isha Jawalkar` : 'Isha Jawalkar | Aspiring Data Engineer'
    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])
}
