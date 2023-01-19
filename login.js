function login(){
    // access data from input
    username=u1.value

    // store data permenently in local storage(key and value string (json))
    localStorage.setItem("uname",username)

    // redierection
    window.location='home.html'
}
function logout(){
    window.location='login.html'
}