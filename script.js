const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const inputSearch = document.getElementById("input");

const navMenu = document.querySelector('[data-type="nav-menu"]');

const details = Array.from(navMenu.querySelectorAll("details"));
const lis = Array.from(navMenu.querySelectorAll("details li"));
const lisToggle = Array.from(navMenu.querySelectorAll("li.toggle"));

inputSearch.addEventListener("input", function () {
  const str = this.value;
  if (str) {
    filterData(str);
  } else {
    showAllItems();
  }
});

function showAllItems() {
  lis.forEach((li) => li.classList.remove("hide"));
  details.forEach((detail) => detail.removeAttribute("open"));
}

function filterData(str) {
  showAllItems();
  lisToggle.forEach((liToggle) => {
    const details = liToggle.querySelector("details");
    if (!details) return;

    const summary = details.querySelector("summary");

    if (
      summary &&
      summary.textContent.toLowerCase().includes(str.toLowerCase())
    ) {
      return details.setAttribute("open", "");
    }
    const lis = details.querySelectorAll("li");

    let find = false;

    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      if (li.textContent.toLowerCase().includes(str.toLowerCase())) {
        find = true;
        li.classList.remove("hide");
      } else {
        li.classList.add("hide");
      }
    }
    if (find) {
      details.setAttribute("open", "");
    } else {
      details.removeAttribute("open");
    }
  });
}

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
