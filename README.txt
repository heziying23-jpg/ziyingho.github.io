# 王小桃部落格

這是一個使用 HTML + CSS + JavaScript 製作的部落格首頁，版型參考你提供的截圖。

## 使用方式

1. 安裝 Visual Studio Code
2. 將這個資料夾用 VS Code 開啟
3. 打開 `index.html`
4. 直接用瀏覽器開啟即可

如果有安裝 VS Code 的 Live Server：
- 右鍵 `index.html`
- 選擇 `Open with Live Server`

## 三個主要檔案

- `index.html`：網頁內容
- `style.css`：外觀、排版、顏色
- `script.js`：分類按鈕與搜尋功能

## 如何換成自己的照片

目前文章圖片使用 CSS 漸層 + emoji 做示範。

之後可以把 `.travel-bg`、`.food-bg` 等 CSS 改成：

background-image: url("images/你的照片.jpg");

並建立：

images/
  travel.jpg
  food.jpg
  camping.jpg

就可以換成自己的照片。

## 如何修改文字

直接打開 `index.html`，例如：

<h1>旅遊・美食・露營</h1>

可以改成你自己的網站標題。
