// const temporalAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => { resolve(true) }, 2000)
//   })
// }


import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'

import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/pricing', text: 'Pricing' },
]

export const Navbar = async () => {
  // await temporalAsync()

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link className='flex items-center' href="/">
        <HomeIcon size={'small'} className='mr-2' />
        <span>Home</span>
      </Link>
      <div className='flex flex-1'></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.text} {...navItem} />
        ))
      }
    </nav>
  )
}