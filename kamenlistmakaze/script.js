let kamenBtn = document.getElementById('kamenBtn')
let listBtn = document.getElementById('listBtn')
let makazeBtn = document.getElementById('makazeBtn')
let resetBtn = document.getElementById('resetBtn')


kamenBtn.addEventListener('click', function(){
    igrica('kamen')
    
    
})
listBtn.addEventListener('click', function(){
    igrica('list')
    
})
makazeBtn.addEventListener('click', function(){
    igrica('makaze')
   
})
resetBtn.addEventListener('click', function(){
    skor.pobjede = 0
    skor.neriješeno = 0
    skor.porazi = 0
    updateScoreElement()
})

const skor ={
    pobjede: 0,
    neriješeno: 0, 
    porazi: 0
    
}
function randomOdabirKompjutera(){
    const odabirKompjutera = Math.floor(Math.random()*3)+1
    let randomOdabir = ''
    if (odabirKompjutera === 1){
        randomOdabir = 'kamen'
    } else if (odabirKompjutera === 2){
        randomOdabir = 'list'
    } else if (odabirKompjutera === 3){
        randomOdabir = 'makaze'
    } return randomOdabir
}
function igrica(potezIgraca){
    const randomOdabir = randomOdabirKompjutera()
    let rezultat = '' 
    if (potezIgraca === 'kamen'){
        if (randomOdabir === 'kamen'){
            rezultat = 'neriješeno'
        }  else if (randomOdabir === 'list'){
            rezultat = 'izgubili ste'
        } else if (randomOdabir === 'makaze'){
            rezultat = 'pobijedili ste'
        } 
    } else if (potezIgraca === 'list'){
        if (randomOdabir === 'kamen'){
            rezultat = 'pobijedili ste'
        }  else if (randomOdabir === 'list'){
            rezultat = 'neriješeno'
        } else if (randomOdabir === 'makaze'){
            rezultat = 'izgubili ste'
        } 
    } else if (potezIgraca === 'makaze'){
        if (randomOdabir === 'kamen'){
            rezultat = 'izgubili ste'
        }  else if (randomOdabir === 'list'){
            rezultat = 'pobijedili ste'
        } else if (randomOdabir === 'makaze'){
            rezultat = 'neriješeno'
        } 
    } if (rezultat === 'pobijedili ste'){
        skor.pobjede += 1
    } else if (rezultat === 'neriješeno'){
        skor.neriješeno += 1
    } else if (rezultat === 'izgubili ste'){
        skor.porazi += 1
    } 
    updateScoreElement()
    document.querySelector('.moj-rezultat').innerHTML = rezultat
    document.querySelector('.moji-potezi').innerHTML = `JA:${potezIgraca} - KOMPJUTER:${randomOdabir}`
    
        
    
    }
    function updateScoreElement (){
        document.querySelector('.moj-skor').innerHTML = `Pobjede:${skor.pobjede} Neriješeno:${skor.neriješeno} Porazi:${skor.porazi}`
    }
    updateScoreElement()
    