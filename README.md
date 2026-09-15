# lmanchu.github.io

朱宜振 Lman Chu 的個人網站：首頁（年表、文章、講者資料入口）、講者資料頁（主辦單位可直接複製）、文章列表。

https://lmanchu.github.io

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

- 內容在 `src/data/`：`site.js`（身分、年表、講題、照片）、`bio.js`（講者介紹）、`medium.js`（Medium 舊文列表）。生平以 PKM-Vault 的 claims SSoT 為準。
- 推上 `main` 由 GitHub Actions（`.github/workflows/deploy.yml`）建置並部署到 GitHub Pages。
