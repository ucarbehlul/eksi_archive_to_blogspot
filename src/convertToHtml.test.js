import convertToHtml from './convertToHtml'

test('hic urlsiz entry', () => {
  expect(convertToHtml("some text"))
    .toBe("some text");
});

test('bound url tek kelime', () => {
  expect(convertToHtml("some text\n [https://www.behlul.com behlul]"))
    .toBe('some text<br> <a href="https://www.behlul.com">behlul</a>')
})

test('bound url çok kelime', () => {
  expect(convertToHtml("some text\n [https://www.behlul.com behlul de bana gel bana\nyeni satır]"))
    .toBe('some text<br> <a href="https://www.behlul.com">behlul de bana gel bana<br>yeni satır</a>')
})

test('bound url ama text kısmı da url', () => {
  expect(convertToHtml("some text\n [https://www.behlul.com https://www.behlul2.com]"))
    .toBe('some text<br> <a href="https://www.behlul.com">https://www.behlul2.com</a>')
})

test('unbound url', () => {
  expect(convertToHtml("some text\n https://www.behlul.com"))
    .toBe('some text<br> <a href="https://www.behlul.com">https://www.behlul.com</a>')
})
