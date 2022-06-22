function q(sel) {
    return document.querySelector(sel)
}
let count = document.querySelector('.number')

let numberinjs = 0

let plus = q('.plus')
let minus = q('.minus')
let res = q('.reset')

minus.addEventListener('click', function (){
    numberinjs -= 1
    count.innerHTML = numberinjs
})

res.addEventListener('click', function (){
    numberinjs = 0
    count.innerHTML = numberinjs
})

plus.addEventListener('click', function (){
    numberinjs += 1
    count.innerHTML = numberinjs
})