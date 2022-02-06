const email = document.querySelector('#inputEmail')
const password = document.querySelector('#inputPassword')
const login = document.querySelector('#login-btn')

login.addEventListener('click', () => {
  window.axios
  .post("https://sgi-prototype-api.vercel.app/user/login", {
      email: email,
      password: password
  })
  .then((response) => {
    // handle success
    console.log(response.data)
  })
  .catch((error) => {
    // handle error
    console.error(error)
  })
})
