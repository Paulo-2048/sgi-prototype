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
      window.location.assign("https://sgi-prototype.vercel.app/")
    })
    .catch((error) => {
      // handle error
      console.error(error)
      alert('Usuário não encontrado')
    })
})
