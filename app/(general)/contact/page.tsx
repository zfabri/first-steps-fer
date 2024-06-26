import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact Description',
}

export default function ContactPage() {
  return (
    <h1 className='text-5xl'>ContactPage</h1>
  )
}