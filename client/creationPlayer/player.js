const newUser = {
    NamePlayer : "Dydy",
    AttPlayer : 55,
    DefPlayer : 45,
    LevelPlayer : 5
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify(newUser);
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("http://localhost:8080/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

