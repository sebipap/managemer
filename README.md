Here's a nicely formatted Markdown README for your bot.

---

# River Plate Event Calendar Bot

The River Plate Event Calendar Bot is a program that reads football and concert events taking place at River Plate's stadium, Argentina's largest stadium, and exports them to a .ics file. This file can then be easily imported into your preferred calendar application, such as Google Calendar.

## Installation

The bot is written in TypeScript. Before running the script, make sure to have the necessary environment setup.

1. Ensure you have Node.js installed on your system. If not, you can download it from the official [Node.js website](https://nodejs.org/).

2. Install TypeScript globally on your system by running:

```bash
npm install -g typescript
```

3. Install the necessary dependencies by running:

```bash
npm install
```

## Usage

To execute the bot, use the following command in the terminal:

```bash
ts-node index.ts
```

The bot will then generate a file called `riverPlate.ics` which includes all the events scheduled at River Plate's stadium.

## Importing .ics File to Google Calendar

After running the bot, you can import the `riverPlate.ics` file into your Google Calendar using the following steps:

1. Open [Google Calendar](https://calendar.google.com).

2. Click on the "+" sign on the left side of the screen, and select "Create new calendar".

3. Name your new calendar, set the other options as desired, and click on "Create calendar".

4. Now click again on the "+" sign, this time select "Import".

5. Click on "Select file from your computer", and choose the `riverPlate.ics` file.

6. Make sure the new calendar you've just created is selected in the "Add to calendar" dropdown.

7. Click on "Import".

And that's it! The events from River Plate's stadium should now be visible on your Google Calendar.

---

This bot makes keeping track of events at River Plate's stadium a breeze. Enjoy the games and concerts!
