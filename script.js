// Countdown Timer
const countdownDate = new Date("2024-12-31T00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "Let's Celebrate!";
    }
}

setInterval(updateTimer, 1000);

// Guest Book
function addMessage() {
    const message = prompt("Leave a birthday message:");
    if (message.trim() !== "") {
        const messagesDiv = document.getElementById("messages");
        const newMessage = document.createElement("p");
        newMessage.innerText = message;
        messagesDiv.appendChild(newMessage);
    }
}

// Set Alarm for Tomorrow at 7 AM
const tomorrowAlarmDate = new Date();
tomorrowAlarmDate.setDate(tomorrowAlarmDate.getDate() + 1);
tomorrowAlarmDate.setHours(7, 0, 0, 0);

const timeUntilAlarm = tomorrowAlarmDate.getTime() - new Date().getTime();

setTimeout(() => {
    alert("It's time for the alarm!");
}, timeUntilAlarm);
