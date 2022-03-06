document.querySelector("#item-post-btn").addEventListener("click", () => {
  let itemForm = document.querySelector("#item-post-btn")

  window.axios
    .post("https://sgi-prototype-api.vercel.app/item", {
      name: itemForm.item_name,
      category: itemForm.item_category,
    })
    .then((response) => {
      alert("Postagem de item realizado com sucesso")
      location.reload()
    })
    .catch((error) => {
      // handle error
      console.error(error)
      alert("Um erro foi encontrado")
    })
})
