const text = `The kitty has been waiting all day...

It even wore its cutest bow...

Now it's crying because you clicked NO... 😿

Will you come back and make it smile again? ❤️`;

const typing = document.getElementById("typing");

let i = 0;

function type() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, 45);

    }

}

type();

document.getElementById("backBtn").onclick = () => {

    window.location.href = "index.html";

};

setInterval(() => {

    const rain = document.createElement("div");

    rain.className = "drop";

    rain.style.left = Math.random() * 100 + "vw";

    rain.style.animationDuration = (0.5 + Math.random() * 0.6) + "s";

    document.body.appendChild(rain);

    setTimeout(() => {

        rain.remove();

    }, 1200);

}, 15);
