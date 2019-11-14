let name = document.getElementById("name");
let mon_name = document.getElementById("named");
let mon_str = document.getElementById("strength");
let mon_dex = document.getElementById("dexterity");
let mon_con = document.getElementById("constitution");
let mon_int = document.getElementById("intelligence");
let mon_wis = document.getElementById("wisdom");
let mon_cha = document.getElementById("charisma");
function monsterSearcherByName() {

    fetch(`http://localhost:8080/monall/${name.value}`, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(result => {
            
            return fetch(`http://localhost:8080/addnew/${result.id}`, {
                method: 'GET'
            });
        })
        .then(res => res.json())
        .then(data => {

            return fetch(`http://localhost:8080/put/${name.value}`, {});
        })
        .then(res => res.json())
        .then(data => {
            mon_name.innerHTML = data[0].name;
            mon_str.innerHTML = data[0].STR;
            mon_dex.innerHTML = data[0].DEX;
            mon_con.innerHTML = data[0].CON;
            mon_int.innerHTML = data[0].INT;
            mon_wis.innerHTML = data[0].WIS;
            mon_cha.innerHTML = data[0].CHA;
        })
        .catch(err => {
            // oh shit
        });
}