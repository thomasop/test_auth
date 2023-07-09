
const fetchLogin = async (url: string, {arg}: {arg: {email: string, password: string}}) => {
    console.log(arg)
    let response = await fetch('https://auth-workshop-api-dphxzibc2a-ew.a.run.app/user/login', {
        method: 'post',
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