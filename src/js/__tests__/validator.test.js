import { isValidInn } from '../validator';

test('notValid', () => {
  const result = isValidInn('');
  expect(result).toBe(false);
});

test('valid', () => {
    const result = isValidInn('1234567890');
    expect(result).toBe(true);
});

