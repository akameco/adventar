'use strict';
const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

module.exports = input => {
	if (!input) {
		return Promise.reject(new Error(`id or url required`));
	}

	const target = /http/.test(input) ? input : url.resolve('http://www.adventar.org/calendars/', input);

	return got(target).then(res => {
		const $ = cheerio.load(res.body);

		return $('.mod-entryList tr').map((v, el) => {
			const getText = c => $(el).find(c).text();

			const obj = {
				date: getText('.mod-entryList-date'),
				user: getText('.mod-entryList-user'),
				title: getText('.mod-entryList-title'),
				url: getText('.mod-entryList-url')
			};

			return obj;
		}).get();
	});
};
