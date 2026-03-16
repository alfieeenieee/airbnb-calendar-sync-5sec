# ⚡ Quick Start: 5-Minute Auto-Sync on GitHub

## 🎯 What You're Setting Up

Automatic calendar syncing **every 5 minutes** on GitHub Actions (no browser needed!)

---

## ✅ 3-Step Setup

### Step 1: Configure Your Calendars (5 minutes)

1. Open `index.html` in your browser
2. Add all properties and calendar feeds from Airbnb
3. Click "💾 Save Configuration"
4. Save the JSON file

---

### Step 2: Create GitHub Secret (2 minutes)

1. Open the saved JSON file, copy ALL content
2. Go to: `https://github.com/alfieeenieee/airbnb-calendar-sync-5sec/settings/secrets/actions`
3. Click "**New repository secret**"
4. Name: `CALENDAR_CONFIG`
5. Paste your JSON
6. Click "Add secret"

---

### Step 3: Upload Files & Enable Actions (3 minutes)

1. Upload these files to your GitHub repo:
   - `index.html`
   - `sync-script.js`
   - `package.json`
   - `.github/workflows/auto-sync.yml`

2. Go to "Actions" tab → Enable workflows

3. Click workflow → "Run workflow" → Test it!

4. Wait 1 minute, check for `.ics` files in repo

5. Get URL: `https://alfieeenieee.github.io/airbnb-calendar-sync-5sec/[property].ics`

6. Import URL to ALL Airbnb listings

---

## ✅ Done!

Your calendars now sync automatically every 5-15 minutes, 24/7!

**Full instructions:** See [AUTO-SYNC-SETUP.md](AUTO-SYNC-SETUP.md)

---

## 🔍 Quick Checks

**Is it working?**
- Go to: `https://github.com/alfieeenieee/airbnb-calendar-sync-5sec/actions`
- See green checkmarks? ✅ It's working!
- See red X? ❌ Click to see error

**When was last sync?**
- Look at `.ics` files in repo
- See "Updated X minutes ago"

**Change sync frequency:**
- Edit [.github/workflows/auto-sync.yml](.github/workflows/auto-sync.yml) line 10
- Change `*/5` to `*/15` (every 15 min) or `*/30` (every 30 min)

---

## ⚠️ Important Notes

1. **GitHub may delay 5-min schedules to 15-30 min** on free accounts
2. **Airbnb refreshes every 4-24 hours** (not controllable)
3. **Keep your configuration JSON safe** - you'll need it to update settings
4. **Import URLs only ONCE per listing** - Airbnb auto-refreshes after that

---

**Questions?** Check [AUTO-SYNC-SETUP.md](AUTO-SYNC-SETUP.md) for detailed troubleshooting!
