const headerBtn = document.querySelector(".header-form__items_button");
const stepBtn = document.querySelector(".guidance-compartment__1-btn");
const featureBtn = document.querySelector(".features-content__btn");
const formBtn = document.querySelector(".form-heading__form-btn");

const formSection = document.querySelector("#form__section");

[stepBtn, featureBtn].forEach(function (ele) {
    ele.addEventListener("click", function () {
        formSection.scrollIntoView({ behavior: "smooth" });
    });
});
