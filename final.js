const title = document.getElementById("title");

const letter = document.getElementById("letter");

const restart = document.getElementById("restart");

const heading = "❤️ Thank You ❤️";

const message = `I hope this little website made you smile.

Sometimes it's the smallest surprises that become the sweetest memories.

Thank you for spending these few minutes here.

Keep smiling.

Keep shining.

And remember...

You are loved. ❤️`;

let h = 0;

function typeTitle() {

    if (h < heading.length) {

        title.innerHTML += heading.charAt(h);

        h++;

        setTimeout(typeTitle, 80);

    } else {

        typeLetter();

    }

}

let i = 0;

function typeLetter() {

    if (i < message.length) {

        letter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter, 35);

    }

}

typeTitle();

restart.onclick = () => {

    window.location.href = "index.html";

};

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    const size = 2 + Math.random() * 4;

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(star);

}

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 300);