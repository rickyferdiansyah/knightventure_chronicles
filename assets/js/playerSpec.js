var character_player = document.getElementById('character-player');
var character_computer = document.getElementById('character-computer');
var character_player_magicFire = document.getElementById('character-player-magicFire')

var button_normal_attack = document.getElementById('button-normal-attack');
var button_shadow_step = document.getElementById('button-shadow-step')
var button_magic_fire = document.getElementById('button-magic-fire')
var button_magic_thunder = document.getElementById('button-magic-thunder')
var button_dragon_killer = document.getElementById('button-dragon-killer')

var player_hitpoint_value = document.getElementById('main-container-hitpoint-player-value')
var player_manapoint_value = document.getElementById('main-container-manapoint-player-value')
player_level_local = localStorage.getItem('myLvl')
function characterSpec() {
    const lvls = [
        { lvl: 25, hp: 350, mp: 220 }, { lvl: 24, hp: 340, mp: 215 }, { lvl: 23, hp: 320, mp: 210 },
        { lvl: 22, hp: 310, mp: 205 }, { lvl: 21, hp: 300, mp: 200 }, { lvl: 20, hp: 290, mp: 195 },
        { lvl: 19, hp: 280, mp: 190 }, { lvl: 18, hp: 270, mp: 185 }, { lvl: 17, hp: 260, mp: 180 },
        { lvl: 16, hp: 250, mp: 175 }, { lvl: 15, hp: 240, mp: 170 }, { lvl: 14, hp: 230, mp: 165 },
        { lvl: 13, hp: 220, mp: 160 }, { lvl: 12, hp: 210, mp: 155 }, { lvl: 11, hp: 200, mp: 150 },
        { lvl: 10, hp: 190, mp: 145 }, { lvl: 9, hp: 180, mp: 140 }, { lvl: 8, hp: 170, mp: 135 },
        { lvl: 7, hp: 160, mp: 130 }, { lvl: 6, hp: 150, mp: 125 }, { lvl: 5, hp: 140, mp: 120 },
        { lvl: 4, hp: 130, mp: 115 }, { lvl: 3, hp: 120, mp: 110 }, { lvl: 2, hp: 110, mp: 105 },
        { lvl: 1, hp: 100, mp: 100 }
    ];


    for (let i = 0; i < lvls.length; i++) {
        if (player_level_local >= lvls[i].lvl) {
            player_hp_value = lvls[i].hp;
            player_mp_value = lvls[i].mp;
            break; // Stop loop once the correct level is found
        }
    }
}
characterSpec()


// var player_hp_value = 100
// var player_mp_value = 100
var player_normal_attack_damage = 50
var player_shadow_step_damage = 150
var player_magic_fire_damage = 200

var player_normal_attack_cost = 0
var player_shadow_step_cost = 50
var player_magic_fire_cost = 100