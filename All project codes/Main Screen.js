let mon_name = document.getElementById("name");
let mon_str = document.getElementById("STR");
let mon_dex = document.getElementById("DEX");
let mon_con = document.getElementById("CON");
let mon_int = document.getElementById("INT");
let mon_wis = document.getElementById("WIS");
let mon_cha = document.getElementById("CHA");

function monsterSearcherByName() {
    fetch("http://localhost:8080/name", {
        method: 'GET',
        body: JSON.stringify({ name:mon_name, STR:mon_str, DEX:mon_dex,
        CON:mon_con, INT:mon_int, WIS:mon_wis, CHA:mon_cha}),
        headers: { 'Content-type': 'application/json' }
    })
}