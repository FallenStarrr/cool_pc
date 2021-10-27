function timer() {


    const countDate = new Date('June 20, 2021 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    
   const second = 1000
   const minute = second * 60
   const hour = minute * 60
   const day = hour * 24

   const days = Math.floor(gap / day)
   const hours = Math.floor(gap % day  / hour)
   const minutes = Math.floor(gap % hour / minute)
   const seconds = Math.floor(gap % minute / second)
   
   if ((days && hours && minutes && seconds) < 0 ) {
        days *= 1000
        hours  *= 1000
       minutes *= 1000
       seconds *= 1000
   }

  
   document.querySelector('.day').innerText = days
   document.querySelector('.hour').innerText = hours
   document.querySelector('.min').innerText = minutes
   document.querySelector('.sec').innerText = seconds
    
}

setInterval(timer, 1000)
