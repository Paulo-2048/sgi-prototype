document.querySelector("#item-post-btn").addEventListener("click", () => {
  let itemForm = document.querySelector("#item-post-btn")

  window.axios
    .post("https://sgi-prototype-api.vercel.app/item", {
      name: itemForm.item_name.value,
      category: itemForm.item_category.value,
      description: itemForm.item_description.value,
      price: itemForm.item_price.value,
      client: itemForm.item_client.value,
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
