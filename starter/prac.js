let a;
const btn = document.getElementById("mybtn")
btn.onclick = function () {
    a = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("mylabel").textContent = `Your number is: ${a}`
}