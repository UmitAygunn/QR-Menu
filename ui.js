// Ekrana Menü elemanlarını basar

import { buttonData } from "./constant.js";
const buttonArea = document.getElementById("buttons");

export function renderMenuItems(menuItems, menuList) {
  // Dizideki her bir eleman için
  // bir menü html'i oluşturup
  // bunu ekrana basar.

  menuList.innerHTML = menuItems
    .map(
      (item) => `
        <a
          id="card"
          href="detail.html?id=${item.id}"
          class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
        >
          <img class="rounded shadow img-fluid" src=" ${item.img}" />
  
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-success fw-bold">$${item.price.toFixed(2)}</p>
            </div>
            <p class="lead">
              ${item.desc.slice(0, 79) + "..."}
            </p>
          </div>
        </a>
      `
    )
    .join(" "); // String e çevirdik. Çevirmez isek araya virgül koyar.
}

// Ekrana butonları basar

export function renderButtons(active) {
  // Eski eklenen butonları html'den temizleme
  buttonArea.innerHTML = "";
  // Yeni buton oluşturma
  buttonData.forEach((btn) => {
    // Buton elementi oluşturma
    const buttonEle = document.createElement("button");
    // Class belirleme
    buttonEle.className = "btn btn-outline-dark";
    // Data-id belirleme
    buttonEle.dataset.category = btn.value;
    // Eğerki eleman aktifse by class'ı ver
    if (btn.text === active) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    // İçindeki yazıyı belirleme
    buttonEle.innerText = btn.text;
    // Butonu html'e gönderme
    buttonArea.appendChild(buttonEle);
  });
}
