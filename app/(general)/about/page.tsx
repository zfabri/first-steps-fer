import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Title',
  description: 'About Description',
  keywords: ['AboutPage', 'Zane']
}

export default function AboutPage() {
  return (
    <h1 className='text-5xl'>AboutPage</h1>
  )
}