const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-06-23 14:60:07');

    expect(format_date(date)).toBe('6/23/2021');
});

test('format_plural() returns pluralized word', () => {
    const word1 = format_plural('apples', 2);
    const word2 = format_plural('celery', 1);

    expect(word1).toBe('apples');
    expect(word2).toBe('celery');
}) 