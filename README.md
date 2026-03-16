# 🏠 Airbnb Calendar Sync Tool

**Prevent double bookings when you have the same property listed across multiple Airbnb accounts.**

🌐 **Live Tool:** [Open Calendar Sync Tool](https://yourusername.github.io/airbnb-calendar-sync/)

---

## The Problem

- Same property listed on multiple Airbnb accounts
- Multiple listings per account (with internal linking)
- Airbnb's internal linking only works within ONE account
- **Risk:** Double bookings between accounts!

## The Solution

This tool automatically syncs calendars across ALL your accounts:
- ✅ Fetches calendar feeds from each account
- ✅ Merges all bookings into master calendars
- ✅ Generates hosted URLs that Airbnb auto-refreshes
- ✅ One-time import to each listing
- ✅ Never re-import when adding new listings!

---

## 🚀 Quick Start

### 1. Access the Tool

Visit: **[https://yourusername.github.io/airbnb-calendar-sync/](https://yourusername.github.io/airbnb-calendar-sync/)**

*(Replace `yourusername` with your actual GitHub username)*

### 2. Get Your Calendar URLs from Airbnb

For **each listing** on **each account**:
1. Log into Airbnb
2. Go to Calendar → Availability Settings
3. Find "Export Calendar"
4. Copy the iCal URL

### 3. Add to Sync Tool

1. Click "+ Add Property"
2. Click "+ Add Airbnb Account Calendar"
3. Paste each iCal URL
4. Repeat for ALL listings on ALL accounts

### 4. Sync & Download

1. Click "🔄 Sync All Calendars"
2. Download the generated .ics files
3. Upload them back to this GitHub repository

### 5. Import to Airbnb

For **each listing** on **each account**:
1. Go to Calendar → Availability Settings
2. Click "Import Calendar"
3. Paste the GitHub URL (e.g., `https://yourusername.github.io/airbnb-calendar-sync/beach_house.ics`)
4. Import!

### 6. Done!

✅ Airbnb automatically refreshes every 4-24 hours
✅ When you add a new listing, just import the same URL
✅ No need to re-import to existing listings!

---

## ✨ Key Features

- **Multi-account support** - Unlimited Airbnb accounts
- **URL-based hosting** - No manual re-importing
- **Auto-sync** - Set it to sync every 1-6 hours
- **Free forever** - No monthly fees
- **Always online** - GitHub Pages hosting
- **Easy to share** - Send URL to co-hosts

---

## 📊 Your Use Case

Perfect for hosts with this setup:

```
Property: Beach House

Account 1:
  ├─ Listing A (entire place)
  ├─ Listing B (bedroom suite)
  └─ Listing C (master bedroom)

Account 2:
  ├─ Listing D (entire place)
  └─ Listing E (private room)

Account 3:
  └─ Listing F (entire place)
```

This tool syncs **ALL 6 listings** across **all 3 accounts**!

---

## 🔄 What Happens When Someone Books

1. Guest books Listing A (Account 1)
2. Auto-sync runs (every 2 hours)
3. Master calendar updates on GitHub
4. Airbnb refreshes (within 24 hours)
5. ✅ All other listings automatically blocked!

---

## 📂 Files in This Repository

- **index.html** - Main calendar sync tool
- **README.md** - This file
- **[property_name].ics** - Generated calendar files (after first sync)

---

## 🛠️ How to Use

### Initial Setup (30 minutes)

1. **Fork or clone this repository**
2. **Enable GitHub Pages** (Settings → Pages → Deploy from main branch)
3. **Open the live URL** (https://yourusername.github.io/airbnb-calendar-sync/)
4. **Add all your properties and calendar feeds**
5. **Sync and download .ics files**
6. **Upload .ics files to this repository**
7. **Import GitHub URLs to all Airbnb listings**

### Adding a New Listing (2 minutes)

1. **Add new listing's calendar feed** in the tool
2. **Sync and download updated .ics file**
3. **Upload to GitHub** (replaces old file)
4. **Import GitHub URL to new listing only**
5. ✅ Done! All other listings keep working automatically

---

## 💡 Benefits Over Manual Management

| Method | Time Per Update | Risk of Error | Cost |
|--------|----------------|---------------|------|
| **Manual blocking** | 15-30 min | High | Free |
| **Channel managers** | 5-10 min | Low | $20-100/month |
| **This tool** | 2 min | Very Low | **Free** ✅ |

---

## 🔒 Security & Privacy

- ✅ All processing happens in your browser
- ✅ No data sent to third parties (except Airbnb calendars)
- ✅ Calendar URLs stored locally in your browser
- ✅ Open source - inspect the code yourself

**Note:** Calendar export URLs are semi-public by design (that's how iCal works). Keep them private.

---

## ❓ FAQ

**Q: Do I need to keep a browser tab open?**
A: Only for auto-sync. Otherwise, sync manually whenever you want.

**Q: How often does Airbnb refresh imported calendars?**
A: Every 4-24 hours (Airbnb's schedule, not controllable).

**Q: What if I add a new listing?**
A: Just add its feed and sync. Import the same GitHub URL to that new listing only!

**Q: Can I use this with Booking.com or VRBO?**
A: Yes! Add their iCal export URLs the same way.

**Q: Is this against Airbnb's terms?**
A: No. This uses Airbnb's official calendar export/import feature as intended.

---

## 🐛 Troubleshooting

### "Failed to fetch calendar"
- Check if iCal URL is correct
- Try syncing again (proxy may be busy)
- Wait 5-10 minutes and retry

### "Dates not blocking on other accounts"
- Wait up to 24 hours for Airbnb to refresh
- Verify you imported the correct URL
- Check all listings have the calendar imported

### "404 when accessing calendar URL"
- Make sure you uploaded the .ics file to GitHub
- Check filename matches exactly (case-sensitive)
- Verify GitHub Pages is enabled

---

## 🙏 Credits

Built for Airbnb hosts who want to:
- Avoid expensive channel managers
- Prevent double bookings
- Automate calendar syncing
- Save time and money

---

## 📝 License

MIT License - Free to use, modify, and distribute.

---

## 🚀 Get Started Now!

1. Fork this repository
2. Enable GitHub Pages
3. Open: https://yourusername.github.io/airbnb-calendar-sync/
4. Start syncing!

**Questions?** Open an issue on GitHub.

**Happy hosting!** 🏠✨
