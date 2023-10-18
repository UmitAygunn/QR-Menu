import { renderMenuItems, renderButtons } from "./ui.js";

// ! HTML'den Gelenler

const menuList = document.querySelector("#menu-list");
const buttonArea = document.getElementById("buttons");

// ! Olay İzleyicisi

document.addEventListener("DOMContentLoaded", () => {
  renderButtons(), fetchMenu();
});

// Datayı global scope da tanımlama

let data; // İleride yazacağımız bütün fonksiyonlar tarafından bu dataya erişebiliriz.

// Menü verilerini json dosyasından çeker.

async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

// Tıklanılan kategoriyi belirleme

buttonArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
    // Seçili kategoriye erişme
    const selected = e.target.dataset.category;

    if (selected === "all") {
      // Filtreleme yapma apiden gelen verileri ekrana bas
      renderMenuItems(data.menu, menuList);
    } else {
        // Seçili kategoriye göre filtrele
      const filtred = data.menu.filter((i) => i.category === selected);
    //   Filtrelenmiş veriyi ekrana bas
      renderMenuItems(filtred, menuList)
    }
  }
});
