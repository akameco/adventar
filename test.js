import test from 'ava';
import fn from './';

const target = 'http://www.adventar.org/calendars/862';

test('scccess result', async t => {
	const result = await fn(target);
	t.is(result.length, 25);
	t.is(result[0].date, '12/01');
	t.is(result[0].title, 'slack 駆動研究室の考察 - 燃えるざっぷ');
	t.is(result[0].user, 'elzup');
	t.is(result[0].url, 'http://elzup.hatenablog.com/entry/cps_slacklab');
});

test('arguments - url message', async t => {
	try {
		await fn();
		t.fail('Exception is not thrown');
	} catch (err) {
		t.is(err.message, 'id or url required');
	}
});
