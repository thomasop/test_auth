import React from 'react'
import useSWR from 'swr'

const fetchAdmin = async () => {
    let response = await fetch('https://auth-workshop-api-dphxzibc2a-ew.a.run.app/user/admin', {
        method: 'get',
    })
    let json = await response.json()
    return json
}

const useGet = () => {
    const {data} = useSWR("/api/admin", () => fetchAdmin())
  return {data}
}

export default useGet