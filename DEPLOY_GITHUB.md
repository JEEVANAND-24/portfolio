# Deploying Your AWS Operator Console Portfolio to GitHub Pages

Follow these simple steps to publish your portfolio live on GitHub Pages:

---

### Step 1: Create a New GitHub Repository
1. Open your browser and go to [github.com/new](https://github.com/new).
2. Choose a repository name:
   - **Option A (Custom subdomain)**: Name it `portfolio` (live URL: `https://JEEVANAND-24.github.io/portfolio/`)
   - **Option B (User website)**: Name it `JEEVANAND-24.github.io` (live URL: `https://JEEVANAND-24.github.io/`)
3. Set visibility to **Public**.
4. **Do NOT** check "Add a README", ".gitignore", or "license" (we already have them configured).
5. Click **Create repository**.

---

### Step 2: Push Your Code to GitHub
Open your terminal inside this project directory (`project-2(portfolio)`) and run:

```bash
git remote add origin https://github.com/JEEVANAND-24/<YOUR_REPO_NAME>.git
git push -u origin main
```
*(Replace `<YOUR_REPO_NAME>` with the repository name you chose in Step 1, e.g. `portfolio`)*

---

### Step 3: Enable GitHub Pages Deployment
1. In your GitHub repository, click on the **Settings** tab at the top.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** -> **Source**:
   - Change the dropdown from **Deploy from a branch** to **GitHub Actions**.
4. That's it!

GitHub Actions will automatically run the `.github/workflows/deploy.yml` workflow, build the Vite app, and publish your website live within ~60 seconds.

### Live Status
Your portfolio is live at:
🔗 **[https://jeevanand-24.github.io/portfolio/](https://jeevanand-24.github.io/portfolio/)**

---

### Instant Updates
Whenever you make updates to your portfolio, you can deploy them in one command:
```bash
cd frontend
npm run deploy
```
Or simply push your commits to `main`:
```bash
git push origin main
```

---

### Key Optimizations Already Included:
- **`HashRouter`**: 100% immune to 404 errors on page reloads and direct links.
- **Relative Base Path (`./`)**: Automatically works on any custom repo URL or root domain.
- **Dual Deployment**: Deployed via `gh-pages` branch with GitHub Actions CI/CD ready as backup.
