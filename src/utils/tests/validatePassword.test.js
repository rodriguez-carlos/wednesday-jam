import validatePassword from "../validatePassword";

test('Validates username and password for \'carlos\' and \'crls\'', () => {
    expect(validatePassword('carlos', 'crls')).toBe(true);
});

test('Validates username and password for \'000000\' and \'000000\'', () => {
    expect(validatePassword('000000', '000000')).toBe(true);
});

test('Validates username and password for \'hello@hello.com\' and \'hll@hll.cm\'', () => {
    expect(validatePassword('hello@hello.com', 'hll@hll.cm')).toBe(true);
});

test('Rejects username and password for \'aeiou\' and \'\'', () => {
    expect(validatePassword('aeiou', '')).toBe(false);
});