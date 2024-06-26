import { Navbar } from '@/components'

export default function GeneralLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center'>
        <span>GeneralLayout</span>
        {children}
      </div>
    </>
  )
}