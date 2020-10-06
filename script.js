document.addEventListener("DOMContentLoaded", async () => {
  const table = document.querySelector("#lista")

  const response = await axios.get("https://smartmultas.com.br/client/rock_contacts");

  document.querySelector("#contagem").innerHTML = response.data.length

  response.data.forEach((el) => {
    table.insertAdjacentHTML("beforeend", `<tr><td>${el.email}</td><td>${el.workshop_1}</td><td>${el.workshop_2}</td><td>${el.workshop_3}</td></tr>`)
  })

  document.querySelector("#copy-paste").innerText = document.querySelector("body").innerHTML
})
