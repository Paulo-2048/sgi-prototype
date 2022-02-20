// if (window.Cookies.get("token")) {
//   console.log("Logged")
// } else {
//   window.location.replace("/login.html")
//   // https://sgi-prototype.vercel.app
// }

const h1Text = document.querySelector("#test-header")

window.axios
  .get("https://sgi-prototype-api.vercel.app/")
  .then(function (response) {
    // handle success
    console.log(response.data)
    h1Text.innerHTML = response.data.data
  })
  .catch(function (error) {
    // handle error
    console.error(error)
  })

// try {
//   let cks = window.Cookies.get("userData")
//   console.log(cks.ema)
//   window.axios
//     .post("https://sgi-prototype-api.vercel.app/user/login", {
//       email: email,
//       password: password,
//     })
//     .then((response) => {})
//     .catch((error) => {
//       // handle error
//       console.error(error)
//     })
// } catch (error) {
//   console.error(error)
// }
