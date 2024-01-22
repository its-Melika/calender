let subbtn = document.getElementById('subbtn')
let firstcalender = document.getElementById('start')
let secondcalender = document.getElementById('last')
let box = document.getElementById('output')





subbtn.addEventListener('click', getday)
box.style.display = 'none'



function getday(){
    console.log('g')
    let startdate = new Date(firstcalender.value)
    let startday = startdate/(1000 * 60 * 60 * 24)

    let seconddate = new Date(secondcalender.value)
    let lastday = seconddate/(1000 * 60 * 60 * 24)

    if (startday && lastday !== "") {
       

        box.style.display = 'block'
        box.classList.remove('error')
        box.classList.add('box')

        let differenctime = Math.abs(startday-lastday)
        box.innerHTML =  `the difference between two dates is ${differenctime} days`
        console.log(differenctime)


    }else {
        box.style.display = 'block'
        box.classList.remove('box')
        box.classList.add('error')
        box.innerHTML =  'please fill both inputs'
    }
    
   
}






     






    