'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////
const header = document.querySelector('.header')
// const allsections = document.querySelectorAll('.section')
// const allbtns = document.getElementsByTagName("button")
// document.querySelector(".operations__tab--1").remove();
// document.getElementById("section--1").remove();
// console.log(allbtns);
// console.log(allsections);
// const afterheader = header.insertAdjacentHTML("afterend", "<h2>here is sth</h2>");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = "Lorem ipsum dolor sit amet consectetur.<button class='btn btn--close-cookie'> Got it!</button>"
// header.prepend(message.cloneNode(true))
// header.append(message)
// header.after(message)
header.append(message)
const btnCookie = document.querySelector(".btn--close-cookie")
btnCookie.addEventListener("click", () => {
  message.remove()
})
message.style.backgroundColor = "#37383d";
message.style.width = "100%"
const book = new Object();
book.title = "1984";
book.author = "goerge orwel"
console.log(book);
for (let b in book) {
  console.log(`${b}: ${book[b]}`);
}
checking
lll