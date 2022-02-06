const email = document.querySelector('#inputEmail')
const password = document.querySelector('#inputPassword')

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