/**
 * Automated Calendar Sync Script for GitHub Actions
 *
 * This script runs automatically on GitHub Actions to sync your Airbnb calendars
 * without needing your computer on!
 */

const fs = require('fs');
const https = require('https');

// Configuration will be loaded from GitHub Secrets
const config = JSON.parse(process.env.CALENDAR_CONFIG || '{"properties":[]}');

/**
 * Fetch content from URL using CORS proxy
 */
async function fetchUrl(url) {
    const fetch = (await import('node-fetch')).default;
    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);

    try {
        const response = await fetch(proxyUrl);
        return await response.text();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
}

/**
 * Parse iCalendar format
 */
function parseICalendar(icalText) {
    const events = [];
    const lines = icalText.split('\n');
    let currentEvent = null;

    for (let line of lines) {
        line = line.trim();

        if (line === 'BEGIN:VEVENT') {
            currentEvent = {};
        } else if (line === 'END:VEVENT') {
            if (currentEvent && currentEvent.start && currentEvent.end) {
                events.push(currentEvent);
            }
            currentEvent = null;
        } else if (currentEvent) {
            if (line.startsWith('DTSTART')) {
                const date = line.split(':')[1];
                currentEvent.start = parseICalDate(date);
            } else if (line.startsWith('DTEND')) {
                const date = line.split(':')[1];
                currentEvent.end = parseICalDate(date);
            } else if (line.startsWith('SUMMARY')) {
                currentEvent.summary = line.substring(line.indexOf(':') + 1);
            }
        }
    }

    return events;
}

/**
 * Parse iCal date format
 */
function parseICalDate(dateStr) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${year}-${month}-${day}`;
}

/**
 * Generate iCalendar content
 */
function generateICalContent(propertyName, bookings) {
    let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Airbnb Calendar Sync v2//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:${propertyName} - Master Calendar
X-WR-TIMEZONE:UTC
X-PUBLISHED-TTL:PT4H
`;

    bookings.forEach((booking, index) => {
        const uid = `booking-${Date.now()}-${index}@calendarsync.local`;
        const startDate = booking.start.replace(/-/g, '');
        const endDate = booking.end.replace(/-/g, '');
        const summary = booking.summary || 'Blocked';
        const description = `Blocked from ${booking.source}`;

        ical += `BEGIN:VEVENT
DTSTART;VALUE=DATE:${startDate}
DTEND;VALUE=DATE:${endDate}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
UID:${uid}
SUMMARY:${summary}
DESCRIPTION:${description}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`;
    });

    ical += 'END:VCALENDAR';
    return ical;
}

/**
 * Sanitize filename
 */
function sanitizeFileName(name) {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

/**
 * Main sync function
 */
async function syncCalendars() {
    console.log('🚀 Starting calendar sync...');
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);

    if (!config.properties || config.properties.length === 0) {
        console.error('❌ No properties configured. Please set CALENDAR_CONFIG secret in GitHub.');
        console.log('ℹ️  To configure:');
        console.log('   1. Use the web tool to configure your properties');
        console.log('   2. Click "💾 Save Configuration" to download config');
        console.log('   3. Add the JSON content to GitHub Secrets as CALENDAR_CONFIG');
        return;
    }

    console.log(`📊 Found ${config.properties.length} property/properties`);

    for (const property of config.properties) {
        console.log(`\n🏠 Processing: ${property.name}`);
        console.log(`   Feeds: ${property.feeds.length}`);

        const allBookings = [];

        for (const feed of property.feeds) {
            console.log(`   📱 Fetching: ${feed.accountName}...`);

            try {
                const icalData = await fetchUrl(feed.url);

                if (!icalData) {
                    console.log(`   ⚠️  Warning: Could not fetch ${feed.accountName}`);
                    continue;
                }

                const events = parseICalendar(icalData);
                console.log(`   ✅ Found ${events.length} booking(s)`);

                events.forEach(event => {
                    allBookings.push({
                        ...event,
                        source: feed.accountName
                    });
                });
            } catch (error) {
                console.error(`   ❌ Error fetching ${feed.accountName}:`, error.message);
            }
        }

        // Generate master calendar
        console.log(`   📝 Generating master calendar with ${allBookings.length} total booking(s)`);
        const icalContent = generateICalContent(property.name, allBookings);
        const fileName = sanitizeFileName(property.name) + '.ics';

        // Write to file
        fs.writeFileSync(fileName, icalContent);
        console.log(`   💾 Saved: ${fileName}`);
    }

    console.log('\n✅ Sync completed successfully!');
    console.log(`🕐 Next sync in 30 minutes (or as configured)`);
}

// Run the sync
syncCalendars().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
