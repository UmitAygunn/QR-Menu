// Url'deki arama parametrelerini yönetebilmek için yerleşik bir js class'ı bulunuyor.
// URLSearchParams

const params = new URLSearchParams(location.search);

// Js Class'ını sağladığı get methodu ile paranmetreye erşme
const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // Api dan Ürünleri alma
  const res = await fetch("./db.json");
  const data = await res.json();
  // Url'deki id ye denk gelen ürünü bulma
  const product = data.menu.find((i) => i.id === Number(paramId));
  renderPage(product);
});

const outlet = document.querySelector("#outlet");

function renderPage(product) {
  outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
    <a href="/">
        <img style="width: 40px;" src="images/home.png" alt="">
    </a>

    <div>Home/${product.category}/${product.title.toLowerCase()}</div>
  </div>
  <h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>

  <img
    src="${product.img}"
    class="rounded object-fit-cover shadow-lg"
    style="max-height: 400px"
  />

  <div>
    <h3 class="mt-4">Ürünün Kategorisi: <span class="text-success">${
      product.category
    }</span></h3>
    <h3 class="my-4">Ürünün Fiyatı: <span class="text-success">$${
      product.price
    }</span></h3>
  </div>

  <div>
    <p class="lead fs-3">
       ${product.desc}
    </p>
  </div>
    `;
}
