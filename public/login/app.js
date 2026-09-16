
const $ = document
const htmlElem = $.querySelector("html")
const loginForm = $.querySelector(".login-form")
const phoneNumInput = $.querySelector(".login-form input")

const themeHandler = () => {
    const theme = localStorage.theme;
    if (theme === "dark") {
        htmlElem.classList.toggle("dark")
    } else {
        htmlElem.classList.toggle("light")
    }
}


const phoneNumberHandler=(e)=>{
    e.preventDefault()

    const userPhoneNum=phoneNumInput.value
    const regexNumber=/^09[0-9]{9}$/


    if(regexNumber.test(userPhoneNum)){
        let userId=localStorage.getItem("userId")

        if(!userId){
            userId=crypto.randomUUID()
            localStorage.setItem("userId",userId)
            phoneNumInput.value = ""
        }
        
        phoneNumInput.value = ""
        localStorage.setItem("isLoggedIn","true")

        window.location.href="../user/dashboard/index.html"
    }
}

loginForm.addEventListener("submit", phoneNumberHandler)

window.addEventListener("load", themeHandler)