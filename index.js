const util = require('util')
const commandLineArgs = require('command-line-args')
import importEntries from './src/xmlImporter' 
import poster from './src/blogspotPoster'

require('dotenv').config()

const options = commandLineArgs([
  { name: 'xml', type: String },
  { name: 'blogId', type: String},
  { name: 'atla', type: Number},
]);
console.debug("cmd line options", options)

const entries = importEntries(options.xml)
  .slice(options.atla)

console.debug("şu kadar entry bulundu:", entries?.length, "örnek:", entries?.[0])

const fun = async () => {

  for(let i=0; i<entries.length; i++) {
    console.debug("Post ediliyor i:", i, "toplam:", entries.length);

    try {
      const response = await poster(options.blogId, entries[i]) 
      console.debug("Entry posted as blog post; response:", response.data)
    } catch(error) {
      if (error.response) {
        // Request made and server responded
        console.log("Blogspot error response:", 
          util.inspect(error.response.data, {depth: null}), 
          "status:", error.response.status, 
          "headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Blogspot no response, request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Blogspot other Error', error.message);
      }
      throw error
    }
  }
}
fun()
