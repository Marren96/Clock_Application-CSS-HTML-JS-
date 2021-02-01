//Javascript code goes here!!!!!

setInterval(setDate,1000)


const secondHand = document.getElementById('second-hand')
const minuteHand = document.getElementById('minute-hand')
const hourHand = document.getElementById('hour-hand')



function setDate(){
   const now = new Date()

   const secondRatio = now.getSeconds()/60
   const minutesRatio = (now.getMinutes()+secondRatio)/60;
   const hour = (now.getHours() + minutesRatio)/12;
  
   setRotation(secondHand,secondRatio)
   setRotation(minuteHand,minutesRatio)
   setRotation(hourHand,hour)
}

function setRotation (element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}