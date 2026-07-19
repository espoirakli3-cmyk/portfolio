/* ==========================
   MENU RESPONSIVE
========================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* ==========================
   TEXTE DYNAMIQUE
========================== */

const texts = [
    "Développeur Web",
    "Développeur Front-End",
    "Développeur PHP",
    "Étudiant en Informatique"
];

const typingText = document.getElementById("typing-text");

let index = 0;

setInterval(() => {

    index++;

    if (index >= texts.length) {
        index = 0;
    }

    typingText.textContent = texts[index];

}, 3000);


/* ==========================
   LIGHTBOX
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".project-gallery img");

    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.querySelector(".lightbox-img");

    const closeBtn = document.querySelector(".close-lightbox");

    const prevBtn = document.querySelector(".prev");

    const nextBtn = document.querySelector(".next");

    if (!lightbox || !lightboxImg || galleryImages.length === 0) {
        console.log("Lightbox non initialisée.");
        return;
    }

    let currentGallery = [];
    let currentIndex = 0;

    function showImage() {

        lightboxImg.src = currentGallery[currentIndex].src;
        lightboxImg.alt = currentGallery[currentIndex].alt;

    }

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            const gallery = image.closest(".project-gallery");

            currentGallery = Array.from(
                gallery.querySelectorAll("img")
            );

            currentIndex = currentGallery.indexOf(image);

            showImage();

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    });

    nextBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        currentIndex++;

        if (currentIndex >= currentGallery.length) {
            currentIndex = 0;
        }

        showImage();

    });

    prevBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = currentGallery.length - 1;
        }

        showImage();

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "auto";

        }

    });

    document.addEventListener("keydown", (e) => {

        if (!lightbox.classList.contains("active")) return;

        switch (e.key) {

            case "Escape":

                lightbox.classList.remove("active");

                document.body.style.overflow = "auto";

                break;

            case "ArrowRight":

                nextBtn.click();

                break;

            case "ArrowLeft":

                prevBtn.click();

                break;

        }

    });

});