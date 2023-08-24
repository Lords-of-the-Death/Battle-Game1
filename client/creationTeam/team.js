// fetch Afficher les users
fetch("http://localhost:8080/all",{
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => response.json())
.then(data => handlePlayer(data))
function handlePlayer(data) {
    let list = document.getElementById('list')
    data.forEach((e) => { list.innerHTML += `<td class="listPerso">${e.NamePlayer}</td>
                                            <td class="listPerso">${e.LevelPlayer}</td>
                                            <td class="listPerso">${e.AttPlayer}</td>
                                            <td class="listPerso">${e.DefPlayer}</td>`
})}

