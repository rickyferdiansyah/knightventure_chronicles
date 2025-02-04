var player_lvl_local = localStorage.getItem('myLvl')


var player_exp = 0
player_exp = localStorage.getItem('myExp')

window.addEventListener('load', function () {
    player_hitpoint_value.innerHTML = player_hp_value
    player_manapoint_value.innerHTML = player_mp_value
})

function handleAttack(skill, damage, manaCost, animationClass, manaGain = 0) {
    // Tambahkan animasi serangan
    character_player.classList.add(animationClass);

    // Disable semua tombol serangan
    [button_normal_attack, button_shadow_step, button_magic_fire].forEach(button => {
        button.style.pointerEvents = 'none';
        button.style.filter = 'grayscale(1)';
    });

    // Kurangi atau tambahkan MP
    player_mp_value = Math.max(0, player_mp_value - manaCost + manaGain);
    player_manapoint_value.innerHTML = player_mp_value;

    setTimeout(() => {
        // Hapus animasi serangan
        character_player.classList.remove(animationClass);

        // Hitung damage ke musuh
        computer_hp_value -= Math.floor(Math.random() * damage);
        computer_hitpoint_value.innerHTML = Math.max(0, computer_hp_value);

        // Cek apakah musuh kalah
        if (computer_hp_value <= 0) {
            computer_hitpoint_value.innerHTML = '0';
            setTimeout(() => {
                document.getElementById('battle-report-background').style.display = 'block';
                document.getElementById('battle-report-result').innerHTML = 'VICTORY';
                document.getElementById('battle-report-exp').innerHTML = stage_exp;
                addExp();
            }, 500);
        } else {
            computer_normal_attack();
        }
    }, 1500);
}

function player_normal_attack() {
    handleAttack("Normal Attack", player_normal_attack_damage, 0, 'character-player-normalAttack', 50);
}

function player_shadow_step() {
    handleAttack("Shadow Step", player_shadow_step_damage, player_shadow_step_cost, 'character-player-shadowStep');
}

// ------------------sedang digarap(pembuka)-------------------------
function player_magic_fire() {
    character_player_magicFire.classList.add('character-player-magicFire')
    character_player_magicFire.classList.add('character-player-effect')
    button_normal_attack.style.pointerEvents = 'none'
    button_shadow_step.style.pointerEvents = 'none'
    button_magic_fire.style.pointerEvents = 'none'
    button_normal_attack.style.filter = 'grayscale(1)'
    button_shadow_step.style.filter = 'grayscale(1)'
    button_magic_fire.style.filter = 'grayscale(1)'
    player_mp_value -= player_magic_fire_cost
    player_manapoint_value.innerHTML = player_mp_value
    setTimeout(function () {
        character_player_magicFire.classList.remove('character-player-magicFire')
        character_player_magicFire.classList.remove('character-player-effect')
        computer_hp_value -= Math.floor(Math.random() * player_magic_fire_damage)
        computer_hitpoint_value.innerHTML = computer_hp_value

        if (computer_hp_value <= 0) {
            computer_hitpoint_value.innerHTML = '0'
            button_normal_attack.style.pointerEvents = 'none'
            setTimeout(function () {
                document.getElementById('battle-report-background').style.display = 'block'
                document.getElementById('battle-report-result').innerHTML = 'VICTORY'
                document.getElementById('battle-report-exp').innerHTML = stage_exp
                addExp()
            }, 500)
        }
        else {
            computer_normal_attack()
        }
    }, 1500)


}

// ------------------sedang digarap(penutup)-------------------------



function computer_normal_attack() {
    setTimeout(function () {
        character_computer.classList.add('character-computer-normalAttack')
    }, 2000)
    setTimeout(function () {
        character_computer.classList.remove('character-computer-normalAttack')
        player_hp_value -= Math.floor(Math.random() * computer_normal_attack_damage)
        player_hitpoint_value.innerHTML = player_hp_value
        button_normal_attack.style.pointerEvents = 'all'
        button_normal_attack.style.filter = 'grayscale(0)'
        button_shadow_step.style.pointerEvents = 'all'
        button_shadow_step.style.filter = 'grayscale(0)'
        button_magic_fire.style.pointerEvents = 'all'
        button_magic_fire.style.filter = 'grayscale(0)'
        if (player_mp_value < player_shadow_step_cost) {
            button_shadow_step.style.pointerEvents = 'none'
            button_shadow_step.style.filter = 'grayscale(1)'
        }
        if (player_mp_value < player_magic_fire_cost) {
            button_magic_fire.style.pointerEvents = 'none'
            button_magic_fire.style.filter = 'grayscale(1)'
        }
        if (player_hp_value <= 0) {
            player_hitpoint_value.innerHTML = '0'
            button_normal_attack.style.pointerEvents = 'none'
            setTimeout(function () {
                document.getElementById('battle-report-background').style.display = 'block'
                document.getElementById('battle-report-result').innerHTML = 'DEFEATED'
                document.getElementById('battle-report-exp').innerHTML = '0'
            }, 500)
        }
    }, 3500)

}
function addExp() {
    player_exp = Number(player_exp)
    player_exp += stage_exp
    expToLocal()
}
function expToLocal() {
    localStorage.myExp = player_exp
}
function expToDisplay() {
    localStorage.getItem('myExp')
}


button_normal_attack.addEventListener('click', player_normal_attack)
button_shadow_step.addEventListener('click', player_shadow_step)
button_magic_fire.addEventListener('click', player_magic_fire)

button_shadow_step.style.display = 'none'
button_magic_fire.style.display = 'none'
button_magic_thunder.style.display = 'none'
button_dragon_killer.style.display = 'none'

if (player_lvl_local > 3) {
    button_shadow_step.style.display = 'block'
}

if (player_lvl_local > 10) {
    button_magic_fire.style.display = 'block'
}
// if (player_lvl_local > 13) {
//     button_magic_thunder.style.display = 'block'
// }
// if (player_lvl_local > 24) {
//     button_dragon_killer.style.display = 'block'
// }

// -------

