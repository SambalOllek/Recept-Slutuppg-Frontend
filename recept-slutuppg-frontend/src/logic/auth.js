export async function getToken(username,password) {
    let result = await fetch("/slutprojekt-backend/api/token?code=" + Code)
    if(result.ok) {
        const data = await result.text();
        return data;
    }
}

export async function LoginToken(token,isLoggedIn) {
    let result = await fetch("/slutprojekt-backend/api/login?token=" + token)
    if(result.ok) {
        const userinfo = await result.json();
        console.log(userinfo);
        window.localStorage.setItem("token",token);
        setIsLoggedIn(true);
    }
}