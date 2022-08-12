(() => {
    const displayDict = {
        days: document.getElementById('countdownDays'),
        hours: document.getElementById('countdownHours'),
        minutes: document.getElementById('countdownMinutes'),
        seconds: document.getElementById('countdownSeconds'),
    }

    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    const futureDate = new Date("2022-09-01T19:20:00.997Z");

    const updateTime = () => {
        displayDict.days.innerText = `${timeLeft.days}`
        displayDict.hours.innerText = `${timeLeft.hours}`
        displayDict.minutes.innerText = `${timeLeft.minutes}`
        displayDict.seconds.innerText = `${timeLeft.seconds}`
    }

    totalSeconds = Math.floor((futureDate - new Date()) / 1000);
    setTimeLeft();
    let interval = setInterval(() => {
        if (totalSeconds < 0) {
            clearInterval(interval);
        }
        countTime();
    }, 1000);

    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.seconds;
            if (timeLeft.minutes >= 0 && timeLeft.seconds < 0) {
                timeLeft.seconds = 59;
                --timeLeft.minutes;
                if (timeLeft.hours >= 0 && timeLeft.minutes < 0) {
                    timeLeft.minutes = 59;
                    --timeLeft.hours;
                    if (timeLeft.days >= 0 && timeLeft.hours < 0) {
                        timeLeft.hours = 23;
                        --timeLeft.days;
                    }
                }
            }
        }
        --totalSeconds;
        updateTime()
    }
    function setTimeLeft() {
        timeLeft.days = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.hours = Math.floor((totalSeconds / (60 * 60)) % 24);
        timeLeft.minutes = Math.floor((totalSeconds / 60) % 60);
        timeLeft.seconds = Math.floor(totalSeconds % 60);
    }
})()