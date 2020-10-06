document.addEventListener("DOMContentLoaded", async () => {
  const table = document.querySelector("#lista")

  const response = await axios.get("https://smartmultas.com.br/client/rock_contacts");

  document.querySelector("#contagem").innerHTML = response.data.length

  response.data.forEach((el) => {
    table.insertAdjacentHTML("beforeend", `<tr><td>${el.email}</td><td>${el.option}</td></tr>`)
  })
})
