# ⚡ Quick Start Guide

Get up and running in 5 steps!

---

## 📋 Prerequisites

- GitHub account ([sign up free](https://github.com))
- Your Airbnb calendar export URLs

---

## 🚀 5-Step Setup

### 1️⃣ Create GitHub Repository

1. Go to https://github.com/new
2. Name it: `airbnb-calendar-sync`
3. Make it **Public**
4. Click "Create repository"

### 2️⃣ Upload Files

1. Click "uploading an existing file"
2. Drag and drop:
   - `index.html`
   - `README.md`
   - `.gitignore`
3. Commit changes

### 3️⃣ Enable GitHub Pages

1. Go to Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Click Save
5. Wait 2 minutes, copy your URL:
   ```
   https://YOUR-USERNAME.github.io/airbnb-calendar-sync/
   ```

### 4️⃣ Use the Tool

1. **Open your URL** from step 3
2. **Add property** (e.g., "Beach House")
3. **Add calendar feeds:**
   - Get iCal URLs from: Airbnb → Calendar → Export Calendar
   - Add each URL to the tool
4. **Sync:** Click "🔄 Sync All Calendars"
5. **Download** the `.ics` files

### 5️⃣ Upload & Import

1. **Upload to GitHub:**
   - Go to your repository
   - Upload the `.ics` files

2. **Import to Airbnb:**
   - For each listing: Calendar → Import Calendar
   - URL: `https://YOUR-USERNAME.github.io/airbnb-calendar-sync/beach_house.ics`
   - Repeat for ALL listings

---

## ✅ You're Done!

- Set auto-sync to 2 hours
- Keep browser tab open
- Airbnb auto-refreshes every 4-24 hours

---

## 🔄 When Adding New Listing

1. Add feed in tool
2. Sync → Download .ics
3. Upload .ics to GitHub
4. Import URL to new listing only

**Time:** 2 minutes! ⚡

---

## 📖 More Info

- **Detailed guide:** See [GITHUB-SETUP-GUIDE.md](GITHUB-SETUP-GUIDE.md)
- **Full README:** See [README.md](README.md)

---

**Questions?** Open an issue on GitHub!

🏠 Happy hosting!
