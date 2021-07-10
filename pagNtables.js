const items = document.querySelector(".pic_items").children;
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const pages = document.querySelectorAll(".number");
const maxItem = 3;
let index = 1;

const pagination = Math.ceil(items.length/maxItem);

prev.addEventListener("click", () => {
    index--;
    check();
    showItems();
});
next.addEventListener("click", () => {
    index++;
    check();
    showItems();
});
pages.forEach(page => {
    page.addEventListener("click", () => {
        index = Number(page.children[0].textContent);
        check();
        showItems();
    });
})

function check() {
    if (index === pagination) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    if (index === 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
}

function showItems() {
    for (let i = 0; i < items.length; i ++) {        
        items[i].classList.remove("show");
        items[i].classList.add("hide");

        if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
            items[i].classList.remove("hide");
            items[i].classList.add("show");
        }
    }
    for (let j = 0; j < 3; j++) {
        if (index.toString() === pages[j].children[0].textContent) {
            pages[j].classList.add("disabled");
        } else {
            pages[j].classList.remove("disabled");
        }
    }
}

window.onload = () => {
    showItems();
    check();
}
