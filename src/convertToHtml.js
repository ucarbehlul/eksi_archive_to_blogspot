const urlRegexStr = "(?<url>https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*))"
const unboundUrlRegexStr = `(?<!\\[)${urlRegexStr}(?!\\])`
const unboundUrlRegex = new RegExp(unboundUrlRegexStr, 'g')
const boundUrlRegexStr = `\\[${urlRegexStr} (?<metin>[^\\]]*)\\]`
const boundUrlRegex = new RegExp(boundUrlRegexStr, 'g')

//entryi ekşi sözlük formatından html formatına çevirir
const convertToHtml = (entry) => {
  let converted = entry
    .replace(unboundUrlRegex, '[$<url> $<url>]') // unbound linkleri bound linke [url açıklama] çevir
    .replace(boundUrlRegex, '<a href="$<url>">$<metin></a>') // bound linkleri [url açıklama]'dan <a> tagına çevir
    .replace(/\n/g, '<br>')
  return converted
}

export default convertToHtml
