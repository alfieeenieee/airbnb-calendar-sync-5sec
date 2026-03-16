# 🐙 GitHub Setup Guide - Step by Step

This guide will walk you through hosting your Airbnb Calendar Sync tool on GitHub Pages.

---

## 📋 What You'll Need

- GitHub account (free) - Sign up at https://github.com
- 15 minutes of your time
- The files in this folder

---

## 🚀 Step-by-Step Instructions

### Step 1: Create GitHub Account (if needed)

1. Go to https://github.com
2. Click **"Sign up"**
3. Enter your email, create a password, choose a username
4. Verify your email address
5. Choose the free plan

### Step 2: Create New Repository

1. Log into GitHub
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name:** `airbnb-calendar-sync`
   - **Description:** "Calendar sync tool for Airbnb multi-account hosting"
   - **Public** ← MUST select this (required for GitHub Pages)
   - ✅ Check "Add a README file"
4. Click **"Create repository"**

### Step 3: Upload Your Files

You have two options:

#### Option A: Upload via Web (Easiest)

1. In your new repository, click **"Add file"** → **"Upload files"**

2. Drag and drop these files from `airbnb-calendar-sync-github` folder:
   - `index.html`
   - `README.md`
   - `.gitignore`

3. Scroll down, type commit message: "Initial commit"

4. Click **"Commit changes"**

#### Option B: Use Git (Advanced)

```bash
# Navigate to your folder
cd c:\Users\alfie\Downloads\airbnb-calendar-sync-github

# Initialize git
git init

# Add files
git add index.html README.md .gitignore

# Commit
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/airbnb-calendar-sync.git

# Push
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click **"Settings"** tab (top menu)

2. Scroll down the left sidebar

3. Click **"Pages"**

4. Under "Build and deployment":
   - **Source:** Select **"Deploy from a branch"**
   - **Branch:** Select **"main"** and **"/ (root)"**
   - Click **"Save"**

5. Wait 1-2 minutes for deployment

6. **Refresh the page** - you'll see a green banner:
   ```
   Your site is live at https://yourusername.github.io/airbnb-calendar-sync/
   ```

7. **Copy this URL!** This is your hosted tool!

### Step 5: Test Your Hosted Tool

1. Click the URL or visit: `https://yourusername.github.io/airbnb-calendar-sync/`

2. You should see the purple Calendar Sync Tool page

3. **Bookmark this URL** for easy access

---

## 📝 Using the Tool

### First Time Setup

1. **Open your hosted tool** (the GitHub Pages URL)

2. **Add a property:**
   - Click "+ Add Property"
   - Enter property name: "Beach House"

3. **Add calendar feeds:**
   - Click "+ Add Airbnb Account Calendar"
   - Enter account name: "Account 1 - Entire Place"
   - Paste the iCal URL from Airbnb
   - Repeat for ALL listings on ALL accounts

4. **Sync calendars:**
   - Click "🔄 Sync All Calendars"
   - Wait for sync to complete
   - You'll see all your bookings listed

5. **Download calendar files:**
   - Click "📥 Download [Property Name] Calendar"
   - Save the `.ics` file (e.g., `beach_house.ics`)

6. **Upload to GitHub:**
   - Go to your GitHub repository
   - Click "Add file" → "Upload files"
   - Upload the `.ics` file(s)
   - Commit changes

7. **Get calendar URLs:**
   - After uploading, the tool will show you URLs like:
   - `https://yourusername.github.io/airbnb-calendar-sync/beach_house.ics`
   - **Copy these URLs!**

8. **Import to Airbnb:**
   - Log into each Airbnb account
   - For each listing: Calendar → Import Calendar
   - Paste the GitHub calendar URL
   - Repeat for ALL listings on ALL accounts

9. **Set auto-sync:**
   - In the tool, set "Sync every: 2 hours"
   - Click "Update Auto-Sync"
   - Keep the browser tab open

✅ **Done!** Your calendars now sync automatically!

---

## 🔄 Updating Calendar Files

When you add a new listing or update bookings:

### Method 1: Web Upload (Easy)

1. Open the hosted tool
2. Add new calendar feed (if needed)
3. Sync and download updated .ics file
4. Go to GitHub repository
5. Click "Add file" → "Upload files"
6. Upload the .ics file (it will replace the old one)
7. Commit changes
8. Import GitHub URL to new listing (if applicable)

### Method 2: Git Command Line (Fast)

```bash
# Navigate to your local folder
cd c:\Users\alfie\Downloads\airbnb-calendar-sync-github

# Copy the new .ics files here
# (after downloading from the tool)

# Add and commit
git add *.ics
git commit -m "Update calendars"

# Push to GitHub
git push
```

### Method 3: GitHub Desktop (Visual)

1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Copy new .ics files to the folder
4. Commit in GitHub Desktop
5. Click "Push origin"

---

## 🎯 Complete Workflow Example

### Initial Setup (One Time):

```
1. Create GitHub repo
   ↓
2. Upload index.html, README.md, .gitignore
   ↓
3. Enable GitHub Pages
   ↓
4. Open hosted tool
   ↓
5. Add all properties/calendar feeds
   ↓
6. Sync → Download .ics files
   ↓
7. Upload .ics to GitHub
   ↓
8. Import GitHub URLs to all Airbnb listings
   ↓
9. Set auto-sync to 2 hours
   ↓
✅ Done!
```

### When Adding New Listing:

```
1. Add new listing's calendar feed in tool
   ↓
2. Sync → Download updated .ics
   ↓
3. Upload .ics to GitHub (replaces old file)
   ↓
4. Import GitHub URL to NEW listing only
   ↓
✅ Done! (2-5 minutes)
```

---

## 🔧 Advanced Tips

### Making Your URL Pretty

Instead of: `https://yourusername.github.io/airbnb-calendar-sync/`

You can use a custom domain:
1. Buy a domain (e.g., `mycalendarsync.com`)
2. In GitHub Pages settings, add custom domain
3. Update DNS records
4. Now use: `https://mycalendarsync.com`

### Keeping It Private

GitHub Pages is public by default. To keep it somewhat private:

1. **Use a unique repo name:** Instead of `airbnb-calendar-sync`, use `calendar-sync-xyz123`
2. **Don't share the URL publicly**
3. **Note:** Calendar URLs are still discoverable if someone knows them

For truly private hosting, consider:
- GitHub private repo + local server
- Self-hosted solution
- Password-protected hosting

### Automating Updates

You can create a GitHub Action to auto-commit calendar files:

1. Create `.github/workflows/auto-update.yml`
2. Set up workflow to commit changes
3. Now updates push automatically

(Advanced - requires GitHub Actions knowledge)

---

## 🆘 Troubleshooting

### "404 Page Not Found"

**Cause:** GitHub Pages not enabled or still building

**Fix:**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages shows green "Your site is live" message
- Try URL with trailing slash: `https://username.github.io/airbnb-calendar-sync/`

### "Calendar file not found"

**Cause:** .ics file not uploaded or wrong filename

**Fix:**
- Check file exists in GitHub repository
- Verify filename matches exactly (case-sensitive!)
- URL should be: `https://username.github.io/airbnb-calendar-sync/beach_house.ics`

### "Can't enable GitHub Pages"

**Cause:** Repository is private

**Fix:**
- Go to Settings → General
- Scroll to "Danger Zone"
- Click "Change visibility" → Make public
- Now try enabling Pages again

### "Changes not showing up"

**Cause:** GitHub Pages caching

**Fix:**
- Wait 1-2 minutes after pushing changes
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check if commit appears in repository

### "Sync fails - CORS error"

**Cause:** Browser blocking cross-origin requests (normal)

**Fix:**
- Tool uses CORS proxy automatically
- Try syncing again
- If persistent, wait 10 minutes and retry

---

## 📊 Comparison: GitHub vs Other Methods

| Feature | GitHub Pages | Dropbox | Local Server |
|---------|-------------|---------|--------------|
| **Always online** | ✅ Yes | ✅ Yes | ❌ Only when PC on |
| **Free** | ✅ Yes | ✅ Limited | ✅ Yes |
| **Easy to share** | ✅ Simple URL | ⚠️ Update links | ❌ Complex |
| **Version history** | ✅ Built-in | ❌ No | ❌ No |
| **Setup difficulty** | ⭐⭐⭐ Medium | ⭐⭐⭐⭐⭐ Easy | ⭐⭐ Hard |
| **Professional** | ✅ Very | ⚠️ OK | ⚠️ OK |
| **Reliability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

**Verdict:** GitHub Pages is best for permanent, shareable hosting!

---

## 🎉 Success Checklist

- [ ] GitHub account created
- [ ] Repository created and set to Public
- [ ] Files uploaded (index.html, README.md, .gitignore)
- [ ] GitHub Pages enabled
- [ ] Hosted URL working (can see the tool)
- [ ] Added all properties and calendar feeds
- [ ] Synced calendars successfully
- [ ] Downloaded .ics files
- [ ] Uploaded .ics files to GitHub
- [ ] Copied GitHub calendar URLs
- [ ] Imported URLs to all Airbnb listings
- [ ] Set auto-sync to 2 hours
- [ ] Tested with a blocked date
- [ ] Bookmarked the hosted URL

✅ **You're all set!** Enjoy double-booking-free hosting!

---

## 🚀 Next Steps

1. **Share with co-hosts:** Send them your GitHub Pages URL
2. **Monitor regularly:** Check sync is running weekly
3. **Backup config:** Save your configuration file monthly
4. **Spread the word:** Help other Airbnb hosts!

---

## 📞 Need Help?

- **GitHub Pages docs:** https://pages.github.com/
- **GitHub support:** https://support.github.com/
- **This tool's issues:** Open an issue on your repository

---

**Happy hosting!** 🏠✨

*Last updated: 2026-03-11*
