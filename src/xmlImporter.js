const parser = require('fast-xml-parser');
const fs = require('fs')

const importEntries = (filename) => {
  const jsonObj = parser.parse(
    fs.readFileSync(filename, {encoding: "UTF-8"}),
    {ignoreAttributes: false}
  )
  //console.debug("backup obj found:", jsonObj?.backup)
  const entries = jsonObj?.backup?.entries?.entry
  return Array.isArray(entries) ? entries : [entries]
}

export default importEntries
