const fetchLogout = async () => {
    let response = await fetch("http://localhost:8080/user/logout", {
        method: 'get',
        credentials: 'include'
    })
    let json = await response.json()
    return json
}

export default fetchLogout