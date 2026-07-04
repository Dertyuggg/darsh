const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const next = document.getElementById("nextBtn");

const message = `prettiest❤️,

Took me a while to make this 😭.

I hope it made you smile today.

Thank you for being such an amazing person.

You deserve all the happiness in the world.

Never stop smiling.

Now there's just one final surprise waiting for you... 💖`;

envelope.addEventListener("click", () => {

    envelope.style.transform = "scale(1.2) rotate(10deg)";
    envelope.style.opacity = "0";

    setTimeout(() => {

        envelope.style.display = "none";
        letter.style.display = "block";
        typeLetter();

    }, 500);

});

let index = 0;

function typeLetter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    }

}

next.addEventListener("click", () => {

    next.innerHTML = "Loading Final Surprise... ❤️";
    next.disabled = true;

    setTimeout(() => {

        window.location.href = "final.html";

    }, 1200);

});

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️", "💖", "💕", "💗", "💘"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);