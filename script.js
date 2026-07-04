const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cat = document.getElementById("cat");
const speechBubble = document.getElementById("speechBubble");
const messageBox = document.getElementById("messageBox");
const giftPopup = document.getElementById("giftPopup");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let noCount = 0;
let yesScale = 1;

const catMessages = [
    "Meow! 🐱",
    "You're awesome ❤️",
    "Pet me! 🥹",
    "I have a surprise! 🎁",
    "Click YES 😸",
    "You're cute 🌸",
    "Don't leave me 😭",
    "Let's be friends 💖"
];

const noMessages = [
    "🥺 Are you sure?",
    "😭 Really?",
    "💔 Don't break my heart!",
    "🐱 Kitty is getting sad...",
    "❤️ Please reconsider!"
];

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    }

    else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});

cat.addEventListener("click", () => {

    speechBubble.innerHTML =
        catMessages[
        Math.floor(Math.random() * catMessages.length)
        ];

    heartBurst(cat);

});

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = ["❤️", "💖", "💕", "💗", "💘"];

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 350);

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";

    petal.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 13000);

}

setInterval(createPetal, 600);

document.addEventListener("mousemove", (e) => {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.clientX + "px";

    sparkle.style.top = e.clientY + "px";

    document.getElementById("sparkles").appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 1000);

});

function heartBurst(element) {

    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "💖";

        heart.style.left =
            rect.left + rect.width / 2 + "px";

        heart.style.top =
            rect.top + rect.height / 2 + "px";

        heart.style.position = "fixed";

        heart.style.fontSize = "22px";

        heart.style.transition = "all 1s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            const angle = Math.random() * 360;

            const distance = 80 + Math.random() * 80;

            heart.style.transform =
                `translate(
            ${Math.cos(angle) * distance}px,
            ${Math.sin(angle) * distance}px
            ) scale(1.5)`;

            heart.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            heart.remove();

        }, 1200);

    }

}
// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click", () => {

    giftPopup.classList.add("show");

    if (music.paused) {
        music.play().catch(() => { });
    }

    createConfetti();
    createFireworks();



});



// =========================
// NO BUTTON
// =========================

noBtn.addEventListener("click", () => {

    noCount++;

    yesScale += 0.18;

    yesBtn.style.transform = `scale(${yesScale})`;

    messageBox.innerHTML =
        noMessages[Math.min(noCount - 1, noMessages.length - 1)];

    if (noCount >= 3) {

        setTimeout(() => {

            window.location.href = "sad.html";

        }, 1000);

        return;

    }

    moveNoButton();

});


// =========================
// MOVE BUTTON
// =========================

function moveNoButton() {

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;

    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}


// =========================
// CONFETTI
// =========================
function createConfetti() {

    const emojis = ["🌷", "💕"];

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-50px";

        confetti.style.fontSize = (16 + Math.random() * 22) + "px";

        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 2 + Math.random() * 4;       // 2–6 seconds
        const drift = -250 + Math.random() * 500;     // left/right movement
        const rotation = -720 + Math.random() * 1440; // random spin
        const delay = Math.random() * 800;            // stagger start

        setTimeout(() => {

            confetti.style.transition =
                `transform ${duration}s linear,
                 opacity ${duration}s linear`;

            confetti.style.transform =
                `translate(${drift}px, ${window.innerHeight + 150}px)
                 rotate(${rotation}deg)`;

            confetti.style.opacity = "0";

        }, delay);

        setTimeout(() => {

            confetti.remove();

        }, (duration + 1) * 1000);

    }

}


// =========================
// FIREWORKS
// =========================

function createFireworks() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            firework(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight / 2
            );

        }, i * 250);

    }

}


function firework(x, y) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("div");

        particle.innerHTML = "✨";

        particle.style.position = "fixed";

        particle.style.left = x + "px";

        particle.style.top = y + "px";

        particle.style.fontSize = "18px";

        particle.style.transition = "1.4s ease-out";

        particle.style.pointerEvents = "none";

        document.body.appendChild(particle);

        const angle = Math.random() * 2 * Math.PI;

        const distance = 80 + Math.random() * 120;

        setTimeout(() => {

            particle.style.transform =
                `translate(
                ${Math.cos(angle) * distance}px,
                ${Math.sin(angle) * distance}px
            )`;

            particle.style.opacity = "0";

        }, 30);

        setTimeout(() => {

            particle.remove();

        }, 1500);

    }

}


// =========================
// EASTER EGG
// =========================

let catClicks = 0;

cat.addEventListener("dblclick", () => {

    heartBurst(cat);

});

cat.addEventListener("click", () => {

    catClicks++;

    if (catClicks >= 10) {

        cat.style.animation =
            "dance .6s infinite";

        speechBubble.innerHTML =
            "I'm dancing!! 🕺🐱";

    }

});


// =========================
// RESET BUTTON POSITION
// =========================

window.addEventListener("resize", () => {

    if (noBtn.style.position === "fixed") {

        moveNoButton();

    }

});
function goToGift() {
    window.location.href = "gift.html";
}