if (window.Cookies.get("token")) {
	console.log('Logged')
} 
else {
	window.location.replace = "../login.html"
}

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
