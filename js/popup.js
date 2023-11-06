document.addEventListener("DOMContentLoaded", function () {
    const telegramLink = document.querySelector(".telegram-link");
    const twitterLink = document.querySelector(".twitter-link");

    telegramLink.addEventListener("click", function (e) {
        e.preventDefault();
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerText = "Coming Soon";
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 3000); // Ocultar el popup después de 3 segundos
        }, 10); // Agregar una pequeña demora para la animación
    });

    twitterLink.addEventListener("click", function (e) {
        e.preventDefault();
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerText = "Coming Soon";
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 3000); // Ocultar el popup después de 3 segundos
        }, 10); // Agregar una pequeña demora para la animación
    });
});

