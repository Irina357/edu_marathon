
const obj1 = {
    name: 'Join',
    hp:1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['puly', 'luk'],
    attack: function () {
        console.log(name + Fight)
    }
};
const obj2 = {
    name: 'Many',
    hp:2,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['rugo', 'tank'],
    attack: function () {
        console.log(name + Fight)
    }
};
const arenas = document.createElement('div')
arenas.classList.add('arenas')
document.body.appendChild(arenas)
const createPlayer = function(className, nameHero, age, iii) {
    const elem = document.createElement('div')
    elem.classList.add(className)
    //document.body.appendChild(elem)
    arenas.appendChild(elem)
    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    elem.appendChild(progressbar)
    const character = document.createElement('div')
    character.classList.add('character')
    elem.appendChild(character)
    const img = document.createElement('img')
    character.appendChild(img)
    img.src = iii
    const life = document.createElement('div')
    life.classList.add('life')
    life.style.width = '100%'
    progressbar.appendChild(life)
    const name = document.createElement('div')
    name.classList.add('name')
    progressbar.appendChild(name)
    name.innerHTML = nameHero
}
createPlayer('player1', 'Many', 50, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif');
createPlayer('player2', 'SUB-ZERO', 80, 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif');

const createPlayerObj = function(className, obj) {
    const elem = document.createElement('div')
    elem.classList.add(className)
    //document.body.appendChild(elem)
    arenas.appendChild(elem)
    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    elem.appendChild(progressbar)
    const character = document.createElement('div')
    character.classList.add('character')
    elem.appendChild(character)
    const img = document.createElement('img')
    character.appendChild(img)
    img.src = obj.img
    const life = document.createElement('div')
    life.classList.add('life')
    life.style.width = '100%'
    progressbar.appendChild(life)
    const name = document.createElement('div')
    name.classList.add('name')
    progressbar.appendChild(name)
    name.innerHTML = obj.name + obj.hp + obj.weapon[0]
}
createPlayerObj('player1', obj1)