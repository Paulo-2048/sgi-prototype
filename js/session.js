const login = document.querySelector("#login-btn")

login.addEventListener("click", () => {
  const email = document.querySelector("#inputEmail").value
  const password = document.querySelector("#inputPassword").value

  window.axios
    .post("https://sgi-prototype-api.vercel.app/user/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response)
      window.Cookies.set("userData", JSON.stringify(response), { expires: 7 })
    })
    .catch((error) => {
      // handle error
      console.error(error)
    })
})

let cks = window.Cookies.get("userData")
console.log(cks.email)
