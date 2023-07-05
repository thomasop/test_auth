"use client"

import React, { useEffect } from 'react'
import useSWRMutation from 'swr/mutation'
import Link from 'next/link'
import fetchLogout from '../hook/fetchLogout'
import { mutate } from 'swr'

const Header = () => {
  const {trigger, data} = useSWRMutation('/api/logout', fetchLogout)
/*   useEffect(() => {
    if (data) {
      if (data.status === 200) {
        mutate('/api/admin')
      }
    }
  }, [data]) */
  console.log(data)
  return (
    <>
    <header>
    <nav>
        <ul>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/login'}>login</Link></li>
            <li><Link href={'/admin'}>admin</Link></li>
            <li><span onClick={() => {trigger()}}>logout</span></li>
        </ul>
    </nav>

    </header>
    </>
  )
}

export default Header