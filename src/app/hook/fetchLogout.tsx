const fetchLogout = async () => {
    let response = await fetch("https://auth-workshop-api-dphxzibc2a-ew.a.run.app/user/logout", {
        method: 'get',
        credentials: 'include'
    })
    let json = await response.json()
    return json
}

export default fetchLogout