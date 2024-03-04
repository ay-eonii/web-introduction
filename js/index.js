const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const flavor1 = document.getElementById("flavor1");
const flavor2 = document.getElementById("flavor2");
const flavor3 = document.getElementById("flavor3");
const flavor4 = document.getElementById("flavor4");
const flavor5 = document.getElementById("flavor5");
const flavor = [flavor1, flavor2, flavor3, flavor4, flavor5];

button1.addEventListener("click", function alert() {
  const name = document.getElementById("input").value;
  const checked = flavor.filter((flavor) => flavor.checked === true).length;
  window.alert(name + "님, 저와 " + checked + "개의 취향이 같으시네요!");
});