import React from 'react'
import { Stats } from 'config/types'

interface HeaderProps {
  stats: Stats
}
function Header({ stats }: HeaderProps) {
  return (
    <header className=''>
      <h1 className='font-bold text-2xl text-black/60'>Occupation Overview</h1>
      <small className='text-black/50 font-bold'>
        {stats.occupation.title} in {stats.region.title}
      </small>
    </header>
  )
}

export default Header
