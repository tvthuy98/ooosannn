//countdown function
function countDown(param){
    if(typeof param !== 'object'){
        throw 'Param must be object [passed '+ typeof param +']';
    }
    if(param.time.toString().length == 10){
        param.time = param.time * 1000;
    }
    setInterval(function() {
        let  countDownDate = param.time;
        let  now = new Date().getTime();
        let  distance = countDownDate - now;
        let  days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let  seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let time = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }

        let message = 'DONE';
        if(param.message) {
            message = param.message;
        }
        if(typeof param.counting === 'function'){
            param.counting(arguments[1] = time);
        }

        if(distance <= 0){
            clearInterval(this);
            if(typeof param.done === 'function'){
                param.done(arguments[1] = message);
            }
        }
    }, 1000);
    //author ThuyTV
}
//demo countdown
countDown({
    time: 1526540894,
    message: 'It work',
    done: function(message){
        console.log(message);
    },
    counting: (time) => {
        console.log(time);
    }
});