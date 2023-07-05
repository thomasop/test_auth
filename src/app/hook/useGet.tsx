import React from 'react'
import useSWR from 'swr'

const fetchAdmin = async () => {
    let response = await fetch('http://localhost:8080/user/admin', {
        method: 'get',
        credentials: "include"
    })
    let json = await response.json()
    return json
}

const useGet = () => {
    const {data} = useSWR("/api/admin", () => fetchAdmin())
  return {data}
}

export default useGet