const h1Text = document.querySelector("#test-header")

try {
  let cksAcess = JSON.parse(window.Cookies.get("userData")).data.data[0].acess
  if (cksAcess == "NA") {
    throw "Não Autorizado"
  } else {
  }
} catch (error) {
  window.location.replace("https://sgi-prototype.vercel.app/login.html")
}

document.querySelector("#logout-btn").addEventListener("click", () => {
  try {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      }
      Cookies.remove(cookieName, neededAttributes)
    })
    window.location.replace("login.html")
  } catch (error) {
    alert("Um erro foi encontrado")
    console.error(error)
  }
})

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
