const countdown = () => {
    //here you pass the date needed
    const countDate = new Date("June 4, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the time really work
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating the time
    const textDay = Math.abs(Math.floor(gap / day));
    const textHour = Math.abs(Math.floor((gap % day) / hour));
    const textMinute = Math.abs(Math.floor((gap % hour) / minute));
    const textSecond = Math.abs(Math.floor((gap % minute) / seconds));

    //Updating our html page with the time
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = `${':'} ${textHour}`;
    document.querySelector(".minute").innerText =`${':'} ${textMinute}`;
    document.querySelector(".seconds").innerText = `${':'} ${textSecond}`
}

 setInterval(countdown, 1000);