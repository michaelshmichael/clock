// getting and updating time
function digitalClock(){
    const time = document.querySelector("h1");
    const TODAY = new Date(); // LL - about getting time - these variables needed to go inside the function
    let H = TODAY.getHours(); // these can then come after getting the date through: new Date()
    let M = TODAY.getMinutes();
    let S = TODAY.getSeconds();
    time.innerHTML = `${H}:${M}:${S}`
    if(S < 10 && M < 10){
        time.innerHTML = `${H}:0${M}:0${S}`;
    } else if (S < 10){
        time.innerHTML = `${H}:${M}:0${S}`;
    } else if (M < 10){
        time.innerHTML = `${H}:0${M}:${S}`;
    };
};
setInterval(digitalClock, 1000);

// making second-hand move
function second (){
    const secondHand = document.getElementById("secondHand");
    const TODAY = new Date(); // these also need to come inside
    let S = TODAY.getSeconds();
    const degree = ((S/60) * 360) + 90;
    secondHand.style.transform = `rotate(${degree}deg)`;
}
setInterval(second, 1000); // what is difference between setInterval and SetTimeout


// making minute-hand move
function minute(){
    const minuteHand = document.getElementById("minuteHand");
    const TODAY = new Date();
    let M = TODAY.getMinutes();
    const degree = ((M/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${degree}deg)`;
}
setInterval(minute, 1000);


// making hour-hand move
function hour(){
    const hourHand = document.getElementById("hourHand");
    const TODAY = new Date();
    let H = TODAY.getHours();
    const degree = ((H/12) * 360) + 90;
    hourHand.style.transform = `rotate(${degree}deg)`;
}
setInterval(hour, 1000);