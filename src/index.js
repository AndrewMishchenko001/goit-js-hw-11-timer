class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.days = document.querySelector(`${selector} span[data-value="days"]`);
        this.hours = document.querySelector(`${selector} span[data-value="hours"]`);
        this.mins = document.querySelector(`${selector} span[data-value="mins"]`);
        this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
        this.start();
    };

    start() {
        const timer = setInterval(() => {
            const differenceInTime = this.targetDate - Date.now();
            if (differenceInTime > 0) {
                this.days.textContent = this.pad(Math.floor(differenceInTime / (1000 * 60 * 60 * 24)));
                this.hours.textContent = this.pad(Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                this.mins.textContent = this.pad(Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60)));
                this.secs.textContent = this.pad(Math.floor((differenceInTime % (1000 * 60)) / 1000));
            } else {
                this.days.textContent = "00";
                this.hours.textContent = "00";
                this.mins.textContent = "00";
                this.secs.textContent = "00";
                clearInterval(timer)
            }
            
        }, 1000);
        
    }
    pad(value) {
        return String(value).padStart(2, '0');
    };
}

const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('sep 6, 2021'),
});

const timer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('sep 20, 2021'),
});




