// Import necessary packages
import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';
import { ICalCalendar } from 'ical-generator';



async function addFootballMatchEvents(cal: ICalCalendar) {
	const url = 'https://www.cariverplate.com.ar/calendario-de-partidos';
	const response = await axios.get(url);
	const $ = load(response.data);
	const matches = $('ul.l_calendario > li');
	for (let i = 0; i < matches.length; i++) {
			const match = matches[i];
				const str = $(match).find('.d_calendario p').text();
				const [_, _dow, dateString, _3, time] = str.split('•')[1].split(' ');
				const [day, month, year] = dateString.split('/').map(Number);
				const [hour, minute] = time === 'A confirmar' ? [0, 0] : time.split('.').map(Number);
				const date = new Date(year, month - 1, day, hour || 0, minute || 0 );
				cal.createEvent({
					summary: 'Partido River',
					start: date,
					timezone: 'America/Argentina/Buenos_Aires',
			});   
		}
}

async function addConcertEvents(cal: ICalCalendar) {
	const url = 'https://www.livenation.lat/venue/1357897/estadio-river-plate-tickets'
	const response = await axios.get(url);
	const $ = load(response.data);
	const matches = $('li.artistticket');

	for (let i = 0; i < matches.length; i++) {
		const match = matches[i];

		const eventName = $(match).find('.artistticket__name').text();

		const day = $(match).find('.date__day').text();
		const [monthString, year] = $(match).find('.date__month').text().split('. ');

		// monthStirng is 
		// ENE, FEB, MAR, ABR, MAY, JUN, JUL, AGO, SEP, OCT, NOV, DIC

		const month = monthString === 'ene' ? 0 : 
									monthString === 'feb' ? 1 : 
									monthString === 'mar' ? 2 : 
									monthString === 'abr' ? 3 : 
									monthString === 'may' ? 4 : 
									monthString === 'jun' ? 5 : 
									monthString === 'jul' ? 6 : 
									monthString === 'ago' ? 7 : 
									monthString === 'sep' ? 8 : 
									monthString === 'oct' ? 9 : 
									monthString === 'nov' ? 10 : 
									monthString === 'dic' ? 11 : -1;


		const date = new Date(Number(year), month, Number(day))

		
		cal.createEvent({
			summary: `River: ${eventName}`,
			start: date,
			timezone: 'America/Argentina/Buenos_Aires',
	}); 

	}

}


// Get match schedule
const getMatchSchedule = async () => {
	const cal = new ICalCalendar();
	await addFootballMatchEvents(cal);
	await addConcertEvents(cal);

	fs.writeFileSync('riverPlate.ics', cal.toString());

};

getMatchSchedule().catch(console.error);
