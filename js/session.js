const login = document.querySelector('#login-btn')

login.addEventListener('click', () => {
  const email = document.querySelector('#inputEmail').value
  const password = document.querySelector('#inputPassword').value
  localStorage.setItem('email', email)
  localStorage.setItem('senha', password)
  
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
