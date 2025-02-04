var player_exp_local = localStorage.getItem('myExp')
var player_exp_value = document.getElementById('player-exp-value')
var player_level_value = document.getElementById('player-level-value')
var player_lvl_value = 0

var clear_local_button = document.getElementById('clear-local')
var skills_info_activate = document.getElementById('skills-info-activate')
var skills_info_back = document.getElementById('skills-info-back')

// -------------------------------------------------------


function levelfunction() {
    const levels = [
        { exp: 254000, lvl: 25 }, { exp: 234000, lvl: 24 }, { exp: 215000, lvl: 23 },
        { exp: 197000, lvl: 22 }, { exp: 180000, lvl: 21 }, { exp: 164000, lvl: 20 },
        { exp: 139000, lvl: 19 }, { exp: 125000, lvl: 18 }, { exp: 112000, lvl: 17 },
        { exp: 100000, lvl: 16 }, { exp: 89000, lvl: 15 }, { exp: 78000, lvl: 14 },
        { exp: 67000, lvl: 13 }, { exp: 56000, lvl: 12 }, { exp: 46000, lvl: 11 },
        { exp: 37000, lvl: 10 }, { exp: 29000, lvl: 9 }, { exp: 22000, lvl: 8 },
        { exp: 16000, lvl: 7 }, { exp: 11000, lvl: 6 }, { exp: 7000, lvl: 5 },
        { exp: 4000, lvl: 4 }, { exp: 2000, lvl: 3 }, { exp: 1000, lvl: 2 },
        { exp: 0, lvl: 1 }
    ];

    for (let i = 0; i < levels.length; i++) {
        if (player_exp_local >= levels[i].exp) {
            player_lvl_value = levels[i].lvl;
            lvlToLocal();
            break; // Stop loop once the correct level is found
        }
    }
}

levelfunction();
if (player_exp_local != null) {
    player_exp_value.innerHTML = localStorage.getItem('myExp')
}
player_level_value.innerHTML = localStorage.getItem('myLvl')

function lvlToLocal() {
    localStorage.myLvl = player_lvl_value
}
function lvlToDisplay() {
    localStorage.getItem('myLvl')
}



clear_local_button.addEventListener('click', function () {
    const confirmation = confirm("Are you sure you want to clear all data?");
    if (confirmation) {
        clearData();
        location.reload();
    }
});

function clearData() {
    localStorage.clear()
}

skills_info_activate.addEventListener('click', seeSkillsInfo)
function seeSkillsInfo() {
    document.getElementById('skills-info').classList.remove('skills-info-notopened')
    document.getElementById('skills-info').classList.add('skills-info-opened')
}
skills_info_back.addEventListener('click', closeSkillsInfo)
function closeSkillsInfo() {
    document.getElementById('skills-info').classList.remove('skills-info-opened')
    document.getElementById('skills-info').classList.add('skills-info-notopened')
}