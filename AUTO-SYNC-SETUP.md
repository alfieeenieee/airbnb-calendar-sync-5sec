# 🤖 Fully Automated GitHub Actions Setup

## 🎯 Goal
Run calendar sync **every 5 minutes automatically** on GitHub Actions (no browser needed!)

---

## ⚡ Quick Overview

**What you'll achieve:**
- ✅ Syncs every 5 minutes (or 15-30 min based on GitHub's availability)
- ✅ Runs 24/7 without your computer on
- ✅ Automatically updates calendar files on GitHub
- ✅ Airbnb pulls the updated calendars automatically
- ✅ 100% hands-free after initial setup

---

## 📋 Prerequisites

1. ✅ GitHub repository created and public
2. ✅ GitHub Pages enabled
3. ✅ This repository uploaded to GitHub
4. ✅ All your property and calendar feed information ready

---

## 🚀 Step-by-Step Setup

### Step 1: Configure Your Calendar Feeds (One Time)

1. **Open the web tool locally:**
   - Open `index.html` in your browser (double-click the file)

2. **Add all your properties and calendar feeds:**
   - Click "**+ Add Property**" → Enter property name (e.g., "Beach House")
   - Click "**+ Add Airbnb Account Calendar**"
   - Enter account name (e.g., "Account 1 - Entire Place")
   - Paste the iCal export URL from Airbnb
   - Repeat for **ALL** listings on **ALL** accounts

3. **Save your configuration:**
   - Click "**💾 Save Configuration**"
   - Download the JSON file (e.g., `airbnb-sync-config-v2.json`)
   - **Keep this file safe!** You'll need it for GitHub setup

---

### Step 2: Create GitHub Secret (Store Your Configuration)

1. **Open your downloaded JSON config file:**
   - Right-click `airbnb-sync-config-v2.json` → Open with Notepad
   - Select ALL text (Ctrl+A) and Copy (Ctrl+C)

2. **Go to your GitHub repository:**
   - Navigate to: `https://github.com/alfieeenieee/airbnb-calendar-sync-5sec`

3. **Access Settings:**
   - Click "**Settings**" tab (top menu)

4. **Navigate to Secrets:**
   - Left sidebar → Click "**Secrets and variables**" → "**Actions**"

5. **Create new secret:**
   - Click "**New repository secret**" button
   - **Name:** `CALENDAR_CONFIG`
   - **Secret:** Paste your JSON configuration (the entire content)
   - Click "**Add secret**"

**Example of what you're pasting:**
```json
{
  "properties": [
    {
      "id": 1234567890,
      "name": "Beach House",
      "feeds": [
        {
          "id": 1234567891,
          "accountName": "Account 1",
          "url": "https://www.airbnb.com/calendar/ical/..."
        },
        {
          "id": 1234567892,
          "accountName": "Account 2",
          "url": "https://www.airbnb.com/calendar/ical/..."
        }
      ]
    }
  ],
  "hostingMethod": "github",
  "githubUrl": "https://alfieeenieee.github.io/airbnb-calendar-sync-5sec"
}
```

---

### Step 3: Upload Files to GitHub

If you haven't already, upload these files to your repository:

**Method A: Via GitHub Web Interface**

1. Go to your repository: `https://github.com/alfieeenieee/airbnb-calendar-sync-5sec`
2. Click "**Add file**" → "**Upload files**"
3. Drag and drop these files:
   - `index.html`
   - `sync-script.js`
   - `package.json`
   - `.github/workflows/auto-sync.yml` (the workflow file)
   - `README.md`
4. Click "**Commit changes**"

**Method B: Via Git Command Line**

```bash
cd "C:\Users\alfie\Downloads\airbnb-calendar-sync-github"

git init
git add .
git commit -m "Initial commit with auto-sync"
git branch -M main
git remote add origin https://github.com/alfieeenieee/airbnb-calendar-sync-5sec.git
git push -u origin main
```

---

### Step 4: Enable GitHub Actions (First Time)

1. **Go to the Actions tab:**
   - In your repository, click "**Actions**" (top menu)

2. **Enable workflows:**
   - If you see "Workflows aren't being run on this repository", click "**I understand my workflows, go ahead and enable them**"

3. **Verify the workflow appears:**
   - You should see "**Auto-Sync Airbnb Calendars Every 5 Minutes**" in the workflows list

---

### Step 5: Test the Workflow (Manual Run)

Before waiting for the schedule, let's test it manually:

1. **Go to Actions tab**
2. **Click on** "Auto-Sync Airbnb Calendars Every 5 Minutes"
3. **Click** "Run workflow" (right side)
4. **Select branch:** `main`
5. **Click** "Run workflow" (green button)

**Wait 30-60 seconds**, then:
- Click on the running workflow
- Watch it execute (you'll see green checkmarks as each step completes)
- Check for any errors

**Expected output:**
```
✓ Checkout repository
✓ Setup Node.js
✓ Install dependencies
✓ Run sync script
  🚀 Starting calendar sync...
  📅 Timestamp: 2026-03-16T12:00:00.000Z
  📊 Found 1 property/properties

  🏠 Processing: Beach House
     Feeds: 2
     📱 Fetching: Account 1...
     ✅ Found 5 booking(s)
     📱 Fetching: Account 2...
     ✅ Found 3 booking(s)
     📝 Generating master calendar with 8 total booking(s)
     💾 Saved: beach_house.ics

  ✅ Sync completed successfully!
✓ Commit and push calendar updates
  ✅ Calendars updated and pushed to GitHub
```

---

### Step 6: Verify Calendar Files Were Created

1. **Go back to your repository main page**
2. **Refresh the page**
3. **You should now see:** `.ics` files (e.g., `beach_house.ics`)

4. **Get your calendar URL:**
   - `https://alfieeenieee.github.io/airbnb-calendar-sync-5sec/beach_house.ics`

---

### Step 7: Import URLs to Airbnb (One Time Per Listing)

For **EVERY listing** on **EVERY account**:

1. **Log into Airbnb account**
2. **Go to Calendar** for the listing
3. **Click** "Availability Settings" or "Calendar Settings"
4. **Scroll to** "Import Calendar"
5. **Click** "Import new calendar"
6. **Enter:**
   - **Name:** `Master Calendar - Beach House`
   - **URL:** `https://alfieeenieee.github.io/airbnb-calendar-sync-5sec/beach_house.ics`
7. **Click** "Import"
8. **Repeat** for ALL other listings

✅ **Done!** After this, you NEVER need to re-import (unless you change hosting)

---

## 🔄 How It Works Now

```
Every 5 minutes (automatic):
├─ GitHub Actions runs sync-script.js
├─ Fetches all Airbnb calendar feeds
├─ Merges bookings into master .ics files
├─ Commits updated .ics files to repository
└─ GitHub Pages serves updated files

Every 4-24 hours (Airbnb's schedule):
└─ Airbnb refreshes imported calendars from your GitHub URLs
```

**Result:** Fully automated, no browser needed! 🎉

---

## 📊 Sync Frequency Options

The workflow file is set to **every 5 minutes** by default.

**To change the frequency**, edit [.github/workflows/auto-sync.yml](.github/workflows/auto-sync.yml):

```yaml
schedule:
  - cron: '*/5 * * * *'   # Every 5 minutes (current)
```

**Other options** (uncomment the one you want):

```yaml
  # - cron: '*/15 * * * *'  # Every 15 minutes (more reliable)
  # - cron: '*/30 * * * *'  # Every 30 minutes (recommended)
  # - cron: '0 * * * *'     # Every hour
  # - cron: '0 */2 * * *'   # Every 2 hours
```

**⚠️ Important:** GitHub may delay 5-minute schedules to 15-30 minutes during high load on free accounts.

**Recommendation:** Use `*/15 * * * *` (every 15 minutes) for best reliability.

---

## 🔍 Monitoring Your Auto-Sync

### Check if it's running:

1. **Go to:** `https://github.com/alfieeenieee/airbnb-calendar-sync-5sec/actions`
2. **Look for** recent workflow runs
3. **Green checkmark** = Success
4. **Red X** = Failed (click to see error)

### View sync logs:

1. **Click on any workflow run**
2. **Click** "sync-calendars" job
3. **Expand** "Run sync script" step
4. **See** detailed logs with booking counts

### Check last update time:

1. **Go to your repository**
2. **Look at** `.ics` files
3. **See** "Updated X minutes ago"

---

## 🛠️ Troubleshooting

### ❌ "Error: CALENDAR_CONFIG is not defined"

**Cause:** Secret not set up correctly

**Fix:**
1. Go to Settings → Secrets → Actions
2. Verify `CALENDAR_CONFIG` secret exists
3. Make sure the JSON is valid (use JSONLint.com to check)
4. Re-create the secret if needed

---

### ❌ "Error fetching calendar from Account X"

**Cause:** iCal URL expired or incorrect

**Fix:**
1. Go to Airbnb → Get fresh iCal export URLs
2. Update your local config (open index.html, add feeds, save config)
3. Update GitHub Secret with new JSON
4. Manually trigger workflow to test

---

### ❌ Workflow runs but no .ics files appear

**Cause:** Script may have errors or no bookings found

**Fix:**
1. Check workflow logs for errors
2. Verify your CALENDAR_CONFIG JSON is correct
3. Make sure calendar URLs are valid
4. Try manually triggering the workflow

---

### ⚠️ Workflow not running on schedule

**Cause:** GitHub Actions schedule delays (common on free accounts)

**Fix:**
- Wait up to 30 minutes for first scheduled run
- Check Actions tab to confirm it's enabled
- Try manual run to verify it works
- Consider changing to `*/15 * * * *` (every 15 min) for better reliability

---

### ⚠️ Changes not showing in Airbnb

**Cause:** Airbnb hasn't refreshed yet (they refresh every 4-24 hours)

**Fix:**
- Wait up to 24 hours after importing URL
- Verify the GitHub URL is accessible in browser
- Check if .ics file was updated recently on GitHub

---

## 📝 Updating Your Configuration

**When you add a new listing:**

1. **Open** `index.html` locally in browser
2. **Click** "📂 Load Configuration"
3. **Select** your saved `airbnb-sync-config-v2.json`
4. **Add** the new calendar feed
5. **Click** "💾 Save Configuration"
6. **Copy** the updated JSON content
7. **Go to** GitHub → Settings → Secrets → Actions
8. **Edit** `CALENDAR_CONFIG` secret
9. **Paste** new JSON
10. **Save**

Next sync (within 5-15 minutes) will include the new listing!

---

## 🎉 Success Checklist

- [ ] Created `CALENDAR_CONFIG` secret on GitHub
- [ ] Uploaded all files including `.github/workflows/auto-sync.yml`
- [ ] Enabled GitHub Actions
- [ ] Manually triggered workflow successfully
- [ ] `.ics` files appeared in repository
- [ ] GitHub Pages URL shows calendar files
- [ ] Imported URLs to all Airbnb listings
- [ ] Workflow runs automatically on schedule
- [ ] Bookings sync correctly across accounts

✅ **You're all set for fully automated syncing!**

---

## 💡 Advanced: Adding More Properties

To sync multiple properties separately:

1. **Add each property** in the web tool
2. **Each property gets its own** `.ics` file
3. **Each property gets its own** GitHub URL
4. **Import the specific URL** to that property's listings

**Example:**

```
Beach House → beach_house.ics → Import to Beach House listings
Mountain Cabin → mountain_cabin.ics → Import to Mountain Cabin listings
City Apartment → city_apartment.ics → Import to City Apartment listings
```

---

## 🆘 Need Help?

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Cron Schedule Help:** https://crontab.guru/
- **Check workflow logs** for detailed error messages
- **Open an issue** on your repository if stuck

---

**Happy automated syncing!** 🚀✨

*Last updated: 2026-03-16*
