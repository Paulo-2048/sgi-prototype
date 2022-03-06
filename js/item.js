// Post New itens
if (location.href == "https://sgi-prototype.vercel.app/item-post.html") {
  try {
    document.querySelector("#item-post-btn").addEventListener("click", () => {
      let itemForm = document.querySelector("#item-form")

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
  } catch (err) {
    console.error(err)
  }
}

// List all itens
if (location.href == "https://sgi-prototype.vercel.app/item-list.html") {
  try {
    $(document).ready(function () {
      $("#dataTable_item").DataTable()
    })

    let table = document.querySelector("#dataTable_item")
    let nRow = table.rows.length
    let newRow = table.insertRow(nRow - 1)
    newRow.insertCell(0).innerHTML = "OK0"
    newRow.insertCell(1).innerHTML = "OK1"
    newRow.insertCell(2).innerHTML = "OK2"
    newRow.insertCell(3).innerHTML = "OK3"
    newRow.insertCell(4).innerHTML = "OK4"
    newRow.insertCell(5).innerHTML = "OK5"
  } catch (error) {
    console.error(error)
  }
}
