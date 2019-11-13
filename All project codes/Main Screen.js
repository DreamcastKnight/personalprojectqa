let name = document.getElementById("name");
let mon_name = document.getElementById("named");
let mon_str = document.getElementById("strength");
let mon_dex = document.getElementById("dexterity");
let mon_con = document.getElementById("constitution");
let mon_int = document.getElementById("intelligence");
let mon_wis = document.getElementById("wisdom");
let mon_cha = document.getElementById("charisma");
function monsterSearcherByName() {
    fetch(`http://localhost:8080/all/${name.value}`, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(result => {
            mon_name.innerHTML = result.name;
            mon_str.innerHTML = result.STR;
            mon_dex.innerHTML = result.DEX;
            mon_con.innerHTML = result.CON;
            mon_int.innerHTML = result.INT;
            mon_wis.innerHTML = result.WIS;
            mon_cha.innerHTML = result.CHA;
        });
}