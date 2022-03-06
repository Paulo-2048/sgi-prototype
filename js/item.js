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

    let itemsData
  window.axios
  .get("https://sgi-prototype-api.vercel.app/item")
  .then(function (response) {
    window.Cookies.set("itemData", JSON.stringify(response), { expires: 7 })
  })
  .catch(function (error) {
    console.error(error)
  })

    let tb = document.querySelector("#dataTable_item")
    let nRow = tb.rows.length
    let ckItems = JSON.parse(window.Cookies.get("itemData"))
    console.log(ckItems)
    for (let i of ckItems.data.data) {
      let newRow = tb.insertRow(nRow - 1)
    newRow.insertCell(0).innerHTML = i.product_name
    newRow.insertCell(1).innerHTML = i.category
    newRow.insertCell(2).innerHTML = i.description
    newRow.insertCell(3).innerHTML = i.price
    newRow.insertCell(4).innerHTML = i.client
    newRow.insertCell(5).innerHTML = i.data
    }
    

  } catch (error) {
    console.error(error)
  }
}
