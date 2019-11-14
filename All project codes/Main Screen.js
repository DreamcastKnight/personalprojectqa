let name = document.getElementById("name");
let mon_named = document.getElementById("named");
let mon_str = document.getElementById("strength");
let mon_dex = document.getElementById("dexterity");
let mon_con = document.getElementById("constitution");
let mon_int = document.getElementById("intelligence");
let mon_wis = document.getElementById("wisdom");
let mon_cha = document.getElementById("charisma");
let mon_size = document.getElementById("size");
let mon_type = document.getElementById("cType");
let mon_align = document.getElementById("alignment");
let mon_speed = document.getElementById("speed");
let mon_ac = document.getElementById("AC");
let mon_hp = document.getElementById("hit points");
let mon_saves = document.getElementById("saving throws")
let mon_skills = document.getElementById("skills")
let mon_resist = document.getElementById("resistences");
let mon_immune = document.getElementById("immunities");
let mon_senses = document.getElementById("senses");
let mon_languages = document.getElementById("langauges");
let mon_cr = document.getElementById("challenge");
let mon_actions = document.getElementById("actions");
let mon_xp = document.getElementById("experience")


function monsterSearcherByName() {
    fetch(`http://localhost:8080/monall/${name.value}`, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(result => {

            return fetch(`http://localhost:8080/addnew/${result[0].id}`, {
                method: 'GET'
            });
        })
        .then(res => res.json())
        .then(data => {

            return fetch(`http://localhost:8080/getData/${name.value}`, {
                method: 'GET'
            });
        })
        .then(res => res.json())
        .then(data => {
            mon_named.innerHTML = data.name;
            mon_str.innerHTML = data.STR + ' (' + Math.floor(((data.STR / 2) - 5)) + ')';
            mon_dex.innerHTML = data.DEX + ' (' + Math.floor(((data.DEX / 2) - 5)) + ')';
            mon_con.innerHTML = data.CON + ' (' + Math.floor(((data.CON / 2) - 5)) + ')';;
            mon_int.innerHTML = data.INT + ' (' + Math.floor(((data.INT / 2) - 5)) + ')';;
            mon_wis.innerHTML = data.WIS + ' (' + Math.floor(((data.WIS / 2) - 5)) + ')';;
            mon_cha.innerHTML = data.CHA + ' (' + Math.floor(((data.CHA / 2) - 5)) + ')';;
            mon_size.innerHTML = data.size + ' ';
            mon_type.innerHTML = data.creatureType + ' ';
            mon_align.innerHTML = data.alignment;
            mon_ac.innerHTML = '<strong>Armor Class </strong>' + data.AC + ' (Natural Armor)';
            mon_speed.innerHTML = '<strong> Speed </strong>' + data.speed;
            mon_hp.innerHTML = '<strong>Hit Points </strong>' + data.HP;
        })
        .catch(err => {
            // oh shit
        });
}