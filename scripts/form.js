const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "ac-2000", name: "Acme Widget" },
  { id: "jj-1969", name: "JJ Rocket Skates" },
  { id: "r2-2001", name: "R2D2 Robot" },
  { id: "bb-8", name: "BB-8 Droid" }
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
