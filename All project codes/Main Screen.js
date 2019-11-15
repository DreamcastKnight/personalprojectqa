const name = document.getElementById("name");
const damage = document.getElementById('damage');
const named = document.getElementById("named");
const str = document.getElementById("strength");
const dex = document.getElementById("dexterity");
const con = document.getElementById("constitution");
const int = document.getElementById("intelligence");
const wis = document.getElementById("wisdom");
const cha = document.getElementById("charisma");
const size = document.getElementById("size");
const type = document.getElementById("cType");
const align = document.getElementById("alignment");
const speed = document.getElementById("speed");
const ac = document.getElementById("AC");
const hp = document.getElementById("hit_points");
const saves = document.getElementById("saving_throws")
const skills = document.getElementById("skills")
const resist = document.getElementById("resistences");
const immune = document.getElementById("immunities");
const senses = document.getElementById("senses");
const languages = document.getElementById("languages");
const cr = document.getElementById("challenge");
const actions = document.getElementById("actions");
const xp = document.getElementById("experience");
const img = document.getElementById("image101");


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
            named.innerHTML = data.name;
            str.innerHTML = data.STR + ' (' + Math.floor(((data.STR / 2) - 5)) + ')';
            dex.innerHTML = data.DEX + ' (' + Math.floor(((data.DEX / 2) - 5)) + ')';
            con.innerHTML = data.CON + ' (' + Math.floor(((data.CON / 2) - 5)) + ')';;
            int.innerHTML = data.INT + ' (' + Math.floor(((data.INT / 2) - 5)) + ')';;
            wis.innerHTML = data.WIS + ' (' + Math.floor(((data.WIS / 2) - 5)) + ')';;
            cha.innerHTML = data.CHA + ' (' + Math.floor(((data.CHA / 2) - 5)) + ')';;
            size.innerHTML = data.size + ' ' + data.creatureType + ', ' + data.alignment;
            ac.innerHTML = '<strong>Armor Class </strong>' + data.AC + ' (Natural Armor)';
            speed.innerHTML = '<strong> Speed </strong>' + data.speed;
            hp.innerHTML = '<strong>Hit Points </strong>' + data.HP;
            saves.innerHTML = '<strong>Saving Throws </strong>' + data.saves;
            skills.innerHTML = '<strong>Skills </strong>' + data.skills;
            resist.innerHTML = '<strong>Damage resistences </strong>' + data.resists;
            immune.innerHTML = '<strong>Damage Immunities </strong>' + data.immunes;
            senses.innerHTML = '<strong>Senses </strong>' + data.senses;
            languages.innerHTML = '<strong>Languages </strong>' + data.languages;
            cr.innerHTML = '<strong>Challenge </strong>' + data.challenge + ' exp' + data.xp;
            actions.innerHTML = data.actions;
            img.setAttribute('src', data.backurl);
            img.style.height = "400px";
            img.style.length = "200px";
        });
}


function updateHitPoints() {
    let nm = name.value;
    let hpv = damage.value;
    fetch('http://localhost:8080/change/' + nm + '/' + hpv, {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(data => {
            hp.innerHTML = '<strong>Hit Points </strong>' + data.HP;
        });
}