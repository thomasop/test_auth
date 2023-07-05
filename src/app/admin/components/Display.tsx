"use client"
import useGet from '@/app/hook/useGet'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Display = () => {
    const {push} = useRouter()
    const {data} = useGet()
    useEffect(() => {
        if (data && data.status === 401) {
            push('/')
        }
    }, [data, push])
    console.log(data)
  return (
    <div>Display</div>
  )
}

export default Display