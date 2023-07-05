
const fetchLogin = async (url: string, {arg}: {arg: {email: string, password: string}}) => {
    let response = await fetch('http://localhost:8080/user/login', {
        method: 'post',
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(arg)
    })
    let json = await response.json()
    return json
}

export default fetchLogin