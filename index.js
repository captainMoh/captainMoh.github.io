const mdp = document.querySelector('.mot-de-passe')
const range = document.querySelector('.range')
const value = document.querySelector('.value')
const btn = document.querySelectorAll('.btn')
const boutton = document.querySelector('.boutton')

const btnMaj = document.querySelector('.btnMaj')
const btnMin = document.querySelector('.btnMin')
const btnNum = document.querySelector('.btnNum')
const btnSpe = document.querySelector('.btnSpe')

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
const number = "0123456789".split('')
const caractere = "&#{[(-|`\_@)]=}?!.+*£$%".split('')


range.addEventListener('change', (e) => {
    value.innerText = e.target.value;
})


btn.forEach((b) => {
    b.addEventListener('click', () =>{
        b.classList.toggle('active')
    })

    
})

boutton.addEventListener('click', () =>{
    let val = []
    let tableau = []
    if(btnMaj.classList.contains('active')) tableau = tableau.concat(upperCase)
    if(btnMin.classList.contains('active')) tableau = tableau.concat(lowerCase)
    if(btnNum.classList.contains('active')) tableau = tableau.concat(number)
    if(btnSpe.classList.contains('active')) tableau = tableau.concat(caractere)
    if(btnMaj.classList.contains('active') == false && btnMin.classList.contains('active') == false
    && btnNum.classList.contains('active') == false && btnSpe.classList.contains('active') == false){
        mdp.innerText = 'Mot de passe'
        alert('Veuillez sélectionner au moins un filtre')
    } 

    for(let i=0; i < range.value; i++ ){
        let valeur = Math.floor(Math.random() * tableau.length)
         val.push(tableau[valeur])
    }

    mdp.innerText = val.join('')
    //console.log(val.join(''))
})

    



