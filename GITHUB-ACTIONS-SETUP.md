# 🤖 GitHub Actions Setup - 24/7 Auto-Sync Without Your Computer!

This guide shows you how to set up **completely automatic syncing** that runs in the cloud 24/7 - **no computer needed!**

---

## 🎯 What You'll Get

✅ **Syncs every 30 minutes automatically** (or custom schedule)
✅ **Runs 24/7 in the cloud** (GitHub's servers)
✅ **No computer needed** (close your laptop, go on vacation!)
✅ **Completely FREE** (GitHub's free tier)
✅ **Auto-updates calendar files** (commits to your repository)
✅ **Works with existing setup** (no changes to web tool)

---

## 📋 How It Works

```
Every 30 minutes:
  ↓
GitHub Actions triggers automatically
  ↓
Runs sync-script.js in the cloud
  ↓
Fetches all your Airbnb calendar feeds
  ↓
Generates updated .ics files
  ↓
Commits them to your repository
  ↓
GitHub Pages serves the new files
  ↓
Airbnb refreshes and blocks dates
  ↓
Done! (repeats every 30 minutes)
```

**You don't need to do ANYTHING!** It just works.

---

## 🚀 Complete Setup Guide

### Step 1: Upload All Files to GitHub

Make sure these files are in your repository:

```
airbnb-calendar-sync/
├── index.html                      ✅ Already have this
├── README.md                       ✅ Already have this
├── .gitignore                      ✅ Already have this
├── package.json                    ✅ NEW - Just created
├── sync-script.js                  ✅ NEW - Just created
└── .github/
    └── workflows/
        └── auto-sync.yml           ✅ NEW - Just created
```

**To upload:**

1. Go to: https://github.com/alfieeenieee/airbnb-calendar-sync

2. Upload these 3 new files:
   - `package.json`
   - `sync-script.js`
   - `.github/workflows/auto-sync.yml`

   **Note:** For `.github/workflows/auto-sync.yml`, you need to:
   - Click "Create new file"
   - Type the path: `.github/workflows/auto-sync.yml`
   - Paste the content
   - Commit

---

### Step 2: Get Your Configuration

1. **Open your web tool:**
   ```
   https://alfieeenieee.github.io/airbnb-calendar-sync/
   ```

2. **Add all your properties and calendar feeds** (if not done already)

3. **Click "💾 Save Configuration"**

4. **A file downloads:** `airbnb-sync-config-v2.json`

5. **Open this file** in Notepad

6. **Copy ALL the content** (Ctrl+A, Ctrl+C)

---

### Step 3: Add Configuration to GitHub Secrets

1. **Go to:** https://github.com/alfieeenieee/airbnb-calendar-sync/settings/secrets/actions

2. **Click "New repository secret"**

3. **Fill in:**
   - **Name:** `CALENDAR_CONFIG`
   - **Secret:** Paste the entire JSON content you copied

4. **Click "Add secret"**

✅ Your calendar feed URLs are now securely stored!

---

### Step 4: Enable GitHub Actions

1. **Go to:** https://github.com/alfieeenieee/airbnb-calendar-sync/actions

2. **If you see a message about workflows:**
   - Click **"I understand my workflows, go ahead and enable them"**

3. **You should see:** "Auto-Sync Airbnb Calendars" workflow

---

### Step 5: Test It Manually (First Time)

1. **Go to Actions tab:** https://github.com/alfieeenieee/airbnb-calendar-sync/actions

2. **Click "Auto-Sync Airbnb Calendars"** (on the left)

3. **Click "Run workflow"** (button on the right)

4. **Click green "Run workflow"** button

5. **Wait 30-60 seconds**

6. **Refresh the page** - you'll see a workflow running

7. **Click on it** to see the live log

8. **Wait for it to complete** (green checkmark)

9. **Go to your repository** - you should see new `.ics` files!

---

### Step 6: Verify Auto-Sync is Working

1. **Wait 30 minutes**

2. **Go to Actions tab**

3. **You should see a new run** started automatically!

4. **Check your calendar files** - they update automatically

✅ **It's working!** Now runs every 30 minutes forever.

---

## ⚙️ Customizing Sync Schedule

### Change Sync Frequency

Edit `.github/workflows/auto-sync.yml`:

**Every 30 minutes (default):**
```yaml
- cron: '*/30 * * * *'
```

**Every 1 hour:**
```yaml
- cron: '0 * * * *'
```

**Every 2 hours:**
```yaml
- cron: '0 */2 * * *'
```

**Every 15 minutes:**
```yaml
- cron: '*/15 * * * *'
```

**Every 5 minutes:**
```yaml
- cron: '*/5 * * * *'
```

**Every hour at specific minutes (e.g., :15 and :45):**
```yaml
- cron: '15,45 * * * *'
```

**Only during business hours (9am-5pm):**
```yaml
- cron: '*/30 9-17 * * *'
```

**How to update:**
1. Go to your repository
2. Click `.github/workflows/auto-sync.yml`
3. Click edit (pencil icon)
4. Change the cron line
5. Commit changes

---

## 📊 Understanding Cron Syntax

```
*/30  *  *  *  *
 │    │  │  │  │
 │    │  │  │  └─── Day of week (0-6, Sunday=0)
 │    │  │  └────── Month (1-12)
 │    │  └───────── Day of month (1-31)
 │    └──────────── Hour (0-23)
 └───────────────── Minute (0-59)
```

**Examples:**

| Schedule | Cron Expression |
|----------|----------------|
| Every 5 minutes | `*/5 * * * *` |
| Every 15 minutes | `*/15 * * * *` |
| Every 30 minutes | `*/30 * * * *` |
| Every hour | `0 * * * *` |
| Every 2 hours | `0 */2 * * *` |
| Every day at 9am | `0 9 * * *` |
| Every weekday at 9am | `0 9 * * 1-5` |

**Test your cron:** https://crontab.guru/

---

## 🔍 Monitoring & Logs

### View Sync Logs:

1. **Go to:** https://github.com/alfieeenieee/airbnb-calendar-sync/actions

2. **Click on any workflow run**

3. **Click "sync-calendars"** to expand

4. **Click "Run sync script"** to see detailed logs

**You'll see:**
```
🚀 Starting calendar sync...
📅 Timestamp: 2026-03-11T15:30:00.000Z
📊 Found 1 property/properties

🏠 Processing: Beach House
   Feeds: 5
   📱 Fetching: Account 1 - Entire Place...
   ✅ Found 3 booking(s)
   📱 Fetching: Account 1 - Master Bedroom...
   ✅ Found 2 booking(s)
   ...
   📝 Generating master calendar with 12 total booking(s)
   💾 Saved: beach_house.ics

✅ Sync completed successfully!
🕐 Next sync in 30 minutes
```

---

## 🆘 Troubleshooting

### "No properties configured" Error

**Problem:** CALENDAR_CONFIG secret not set or empty

**Fix:**
1. Use the web tool to configure properties
2. Save configuration (download JSON)
3. Add to GitHub Secrets as CALENDAR_CONFIG

---

### Workflow Not Running Automatically

**Problem:** GitHub Actions not enabled or workflow file has errors

**Fix:**
1. Check Actions tab is enabled
2. Verify `.github/workflows/auto-sync.yml` exists
3. Check for syntax errors in YAML file
4. Try running manually first

---

### "Could not fetch calendar" Warnings

**Problem:** Calendar URL is invalid or temporarily unavailable

**Fix:**
1. Check the calendar URL in Airbnb is still valid
2. Re-export calendar from Airbnb
3. Update configuration secret with new URL

---

### No .ics Files Created

**Problem:** Script ran but didn't generate files

**Fix:**
1. Check logs in Actions tab
2. Verify CALENDAR_CONFIG has correct format
3. Make sure feeds array is not empty

---

## 💰 Cost & Limits

### GitHub Actions Free Tier:

| Feature | Free Tier Limit |
|---------|----------------|
| **Minutes/month** | 2,000 minutes |
| **Storage** | 500 MB |
| **Concurrent jobs** | 20 |

### Your Usage:

**Per sync run:** ~30 seconds (0.5 minutes)

**Syncing every 30 minutes:**
- 48 runs/day
- 1,440 runs/month
- 720 minutes/month ✅ (well within free tier!)

**Syncing every 15 minutes:**
- 96 runs/day
- 2,880 runs/month
- 1,440 minutes/month ✅ (still within free tier!)

**Syncing every 5 minutes:**
- 288 runs/day
- 8,640 runs/month
- 4,320 minutes/month ❌ (exceeds free tier)

**Recommendation:** Stick with 15-30 minute intervals to stay free forever!

---

## 🎯 Recommended Setup

### Best Practice Schedule:

**For most hosts:**
```yaml
# Every 30 minutes - reliable and free
- cron: '*/30 * * * *'
```

**For active/high-season:**
```yaml
# Every 15 minutes - more responsive
- cron: '*/15 * * * *'
```

**For multiple properties with high traffic:**
```yaml
# Every hour - conservative but effective
- cron: '0 * * * *'
```

---

## 🔄 Updating Configuration

### When You Add New Listings:

**Method 1: Update via Web Tool + Secret**

1. Open web tool
2. Add new listing's calendar feed
3. Save configuration (download JSON)
4. Go to GitHub Secrets
5. Edit CALENDAR_CONFIG
6. Paste new JSON
7. Save

**Method 2: Manual Edit**

1. Go to GitHub Secrets
2. Click CALENDAR_CONFIG → Edit
3. Add new feed to the JSON:
   ```json
   {
     "id": 1234567890,
     "accountName": "Account 3 - New Listing",
     "url": "https://airbnb.com/calendar/ical/..."
   }
   ```
4. Save

**Next sync will automatically include the new listing!**

---

## 🚀 Advanced Features

### Email Notifications on Failure:

Add to `.github/workflows/auto-sync.yml`:

```yaml
- name: Send failure notification
  if: failure()
  run: echo "Sync failed! Check logs."
```

### Sync Only During Peak Hours:

```yaml
schedule:
  - cron: '*/15 9-22 * * *'  # Every 15 min, 9am-10pm
  - cron: '0 * * * *'         # Every hour, off-peak
```

### Multiple Schedules:

```yaml
schedule:
  - cron: '*/15 * * * *'      # Every 15 min (peak season)
  # Comment out when not needed:
  # - cron: '*/30 * * * *'    # Every 30 min (normal)
  # - cron: '0 */2 * * *'     # Every 2 hours (low season)
```

---

## ✅ Benefits Summary

### Before (Manual Sync):

- ❌ Must keep computer on
- ❌ Must keep browser tab open
- ❌ Stops when computer sleeps
- ❌ Stops when you travel
- ⚠️ High battery/resource usage

### After (GitHub Actions):

- ✅ Runs 24/7 automatically
- ✅ No computer needed
- ✅ Works while you sleep/travel
- ✅ Free forever (with reasonable limits)
- ✅ Zero battery/resource usage
- ✅ Visible logs and monitoring
- ✅ Reliable cloud infrastructure

---

## 🎉 You're Done!

Once set up:

1. **GitHub syncs every 30 minutes automatically**
2. **Calendar files update in your repository**
3. **Airbnb imports the latest calendars**
4. **Dates block across all accounts**
5. **Zero maintenance needed!**

**You can:**
- Close your computer ✅
- Go on vacation ✅
- Sleep peacefully ✅
- Never worry about double bookings ✅

---

## 📞 Support

**Check sync status:**
https://github.com/alfieeenieee/airbnb-calendar-sync/actions

**View calendar files:**
https://github.com/alfieeenieee/airbnb-calendar-sync

**Your hosted tool:**
https://alfieeenieee.github.io/airbnb-calendar-sync/

---

**Questions? Issues?** Check the Actions logs first - they show exactly what's happening!

🏠 **Happy hands-free hosting!** ✨

*Last updated: 2026-03-11*
