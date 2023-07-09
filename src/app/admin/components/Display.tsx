"use client"
import useGet from '@/app/hook/useGet'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Display = () => {
    const {push} = useRouter()
    const {data} = useGet()
    useEffect(() => {
        if (data && data.status !== 200) {
            push('/')
        }
    }, [data, push])
  return (
    <div>Display</div>
  )
}

export default Display