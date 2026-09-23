// 分類按鈕：點擊後只顯示對應文章
const categoryButtons = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    // 切換按鈕樣式
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 搜尋按鈕
document.querySelector(".search-btn").addEventListener("click", () => {
  const keyword = prompt("想搜尋什麼文章？");

  if (!keyword) return;

  const text = keyword.toLowerCase();
  let found = false;

  cards.forEach(card => {
    const content = card.innerText.toLowerCase();
    const matched = content.includes(text);

    card.classList.toggle("hidden", !matched);

    if (matched) found = true;
  });

  if (!found) {
    alert("找不到相關文章，可以試試「旅遊」、「美食」或「露營」。");
  }

  // 搜尋時取消分類按鈕的 active
  categoryButtons.forEach(btn => btn.classList.remove("active"));

  document.querySelector("#articles").scrollIntoView({
    behavior: "smooth"
  });
});
