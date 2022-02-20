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

try {
  let cksAcess = JSON.parse(window.Cookies.get("userData")).data.data[0].acess
  if (cksAcess == "NA") {
    throw "Não Autorizado"
  } else {
    window.location.assign("https://sgi-prototype.vercel.app/")
  }
} catch (error) {
  window.location.replace("https://sgi-prototype.vercel.app/login.html")
}
