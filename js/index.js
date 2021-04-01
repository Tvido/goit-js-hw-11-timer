getDaysRef = document.querySelector('.value[data-value="days"]');
getHoursRef = document.querySelector('.value[data-value="hours"]');
getMinsRef = document.querySelector('.value[data-value="mins"]');
getSecsRef = document.querySelector('.value[data-value="secs"]');

function getTime(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
};

function pad(value) {
    return String(value).padStart(2, '0');
};

const CountdownTimer = function ({ selector, targetDate }) {
    
  this.selector = selector;
  this.targetDate = targetDate;

    this.start = function () {
        const startTime = targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, mins, secs } = getTime(deltaTime);
            getDaysRef.innerText = days;
            getHoursRef.innerText = hours;
            getMinsRef.innerText = mins;
            getSecsRef.innerText = secs;
        }, 1000);
    };
};

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 01, 2022'),
});

timer.start()