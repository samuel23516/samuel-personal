

/* ==============================
   BIRTHDAY SONG
============================== */

const song = document.getElementById("birthdaySong");

const musicButton = document.getElementById("musicButton");

const songButton = document.getElementById("songButton");

let musicStarted = false;


function startBirthdayMusic() {

    if (musicStarted) {
        return;
    }

    song.play()
        .then(function() {

            musicStarted = true;

            musicButton.textContent = "⏸ Pause Our Song";

            songButton.textContent = "⏸ Pause Song";

        })
        .catch(function() {

            /*
              The browser blocked autoplay.
              The first tap anywhere will start the song.
            */

            document.addEventListener(
                "click",
                startBirthdayMusic,
                { once: true }
            );

            document.addEventListener(
                "touchstart",
                startBirthdayMusic,
                { once: true }
            );

        });
}


/* Start when the page is loaded */
window.addEventListener("load", function() {

    startBirthdayMusic();

});





/* ==============================
   SECTION NAVIGATION
============================== */

function showSection(sectionId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(sectionId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==============================
   FLOATING HEARTS
============================== */

function createHeart() {

    const heartContainer = document.querySelector(".hearts");

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 12 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    heartContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);

/* ==============================
   ESCAPING NO BUTTON
============================== */

function escapeButton(button, messageElement, messages) {

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    messageElement.textContent = randomMessage;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const padding = 20;

    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );

    button.style.position = "fixed";

    button.style.left = randomX + "px";

    button.style.top = randomY + "px";

    button.style.zIndex = "2000";
}
/* ==============================
   FIRST ESCAPING NO BUTTON
============================== */
const noButton =
    document.getElementById("noButton");

const questionMessage =
    document.getElementById("questionMessage");

const firstNoMessages = [

    "Nice try 😂❤️",

    "You can't escape me 😏",

    "Try again beautiful 😂",

    "Nope! ❤️",

    "The button is running away! 🏃‍♂️",

    "Just say YES already 😂❤️"

];


noButton.addEventListener("mouseenter", function() {

    escapeButton(
        noButton,
        questionMessage,
        firstNoMessages
    );

});


noButton.addEventListener("touchstart", function(event) {

    event.preventDefault();

    escapeButton(
        noButton,
        questionMessage,
        firstNoMessages
    );

});



/* ==============================
   YES BUTTON
============================== */

function answerYes() {

    createConfetti();

    setTimeout(function() {
        showSection("yesMessage");
    }, 500);
}


/* ==============================
   REASONS I LOVE YOU
============================== */

const reasons = [

    {
        title: "Your Smile ❤️",
        text: "Your smile can turn an ordinary day into something special."
    },

    {
        title: "Your Heart 💕",
        text: "You have a beautiful heart, and that is one of the things I admire most about you."
    },

    {
        title: "The Way You Care 🥹",
        text: "The little ways you care about people mean more than you probably realize."
    },

    {
        title: "Your Personality 😍",
        text: "You have a way of being yourself that makes you impossible not to love."
    },

    {
        title: "Your Laugh 😂❤️",
        text: "Your laugh is one of those sounds I could listen to again and again."
    },

    {
        title: "Our Memories 📸",
        text: "Every memory we create gives me another reason to smile."
    },

    {
        title: "Simply You ❤️",
        text: "I could give you a hundred reasons, but the simplest answer is this: I love you because you're you."
    }

];

let reasonIndex = 0;


function nextReason() {

    reasonIndex++;

    if (reasonIndex >= reasons.length) {

        showSection("music");

        return;
    }

    document.getElementById("reasonNumber").textContent =
        reasonIndex + 1;

    document.getElementById("reasonTitle").textContent =
        reasons[reasonIndex].title;

    document.getElementById("reasonText").textContent =
        reasons[reasonIndex].text;
}


/* ==============================
   MUSIC
============================== */

function toggleMusic() {

    if (song.paused) {

        song.play();

        musicStarted = true;

        musicButton.textContent =
            "⏸ Pause Our Song";

        songButton.textContent =
            "⏸ Pause Song";

    } else {

        song.pause();

        musicButton.textContent =
            "🎵 Play Our Song";

        songButton.textContent =
            "▶ Play Song";
    }
}

function toggleMusic() {

    if (song.paused) {

        song.play();

        musicButton.textContent =
            "⏸ Pause Our Song";

        songButton.textContent =
            "⏸ Pause Song";

    } else {

        song.pause();

        musicButton.textContent =
            "🎵 Play Our Song";

        songButton.textContent =
            "▶ Play Song";
    }
}


/* ==============================
   SECOND ESCAPING NO BUTTON
============================== */
const foreverNo =
    document.getElementById("foreverNo");

const foreverMessage =
    document.getElementById("foreverMessage");

const secondNoMessages = [

    "You really want to say NO? 😂",

    "I'm not letting you click that 😏❤️",

    "Come on! You know the answer ❤️",

    "Why are you running? 😂",

    "The NO button doesn't want you either 😂",

    "JUST SAY YES ❤️"

];


foreverNo.addEventListener("mouseenter", function() {

    escapeButton(
        foreverNo,
        foreverMessage,
        secondNoMessages
    );

});


foreverNo.addEventListener("touchstart", function(event) {

    event.preventDefault();

    escapeButton(
        foreverNo,
        foreverMessage,
        secondNoMessages
    );

});

/* ==============================
   FOREVER YES
============================== */

function foreverYes() {

    createConfetti();

    setTimeout(function() {

        showSection("forever");

    }, 500);
}


/* ==============================
   GIFT
============================== */

function openGift() {

    const gift =
        document.getElementById("giftBox");

    const instruction =
        document.getElementById("giftInstruction");

    const message =
        document.getElementById("giftMessage");

    gift.style.animation = "none";

    gift.style.transform = "scale(1.3)";

    setTimeout(function() {

        gift.style.display = "none";

        instruction.style.display = "none";

        message.classList.remove("hidden");

        createConfetti();

    }, 600);
}


/* ==============================
   CONFETTI
============================== */

function createConfetti() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "✨",
        "🎉",
        "💖",
        "🌹"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(function() {

            confetti.remove();

        }, 5000);
    }
}


/* ==============================
   FINAL CELEBRATION
============================== */

function celebrate() {

    createConfetti();

    for (let i = 0; i < 30; i++) {

        setTimeout(function() {

            createHeart();

        }, i * 100);
    }

}