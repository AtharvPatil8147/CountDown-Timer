const endDate = new Date("12 aug 2025 00:00:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer() {
    const currentDate = new Date().getTime();

    const timeElapsed = currentDate - startDate;
    const timeRemaining = endDate - currentDate;
    const totalDuration = endDate - startDate;

    // calculate days, hours, minutes, seconds
    // 1 day = 24 * 60 * 60 * 1000 milliseconds
    const oneDayInMillis = 24*60*60*1000;
    const oneHourInMillis = 60*60*1000;
    const oneMinuteInMIllis = 60*1000;
    const oneSecondInMillis = 1000;
    const days = timeRemaining/(oneDayInMillis);
    const hours = timeRemaining%(oneDayInMillis) / (oneHourInMillis);
    const minutes = timeRemaining%(oneHourInMillis) / (oneMinuteInMIllis);
    const seconds = timeRemaining%(oneMinuteInMIllis) / oneSecondInMillis;
    // const milliseconds = timeRemaining%(1000);


    //populate the countdown
    document.getElementById('days').innerHTML = Math.floor(days);
    document.getElementById('hours').innerHTML = Math.floor(hours);
    document.getElementById('minutes').innerHTML = Math.floor(minutes);
    document.getElementById('seconds').innerHTML = Math.floor(seconds);
    // document.getElementById('milliseconds').innerHTML = Math.floor(milliseconds);

    //calcutaions for the progress bar
    const progressPrecentage = Math.ceil((timeElapsed/totalDuration) * 100);
    console.log(timeElapsed);
    console.log(totalDuration);
    console.log(progressPrecentage);
    //update progress bar
    document.getElementById('progress-bar').style.width = progressPrecentage + '%';
    document.getElementById('test').innerHTML = progressPrecentage + '%';


    if(timeRemaining < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Countdown Finished!";
        document.getElementById('progress-bar').style.width = '100%';
    }
}, 1000); // Update every second