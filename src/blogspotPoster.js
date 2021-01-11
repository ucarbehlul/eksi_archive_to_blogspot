const axios = require('axios')
const moment = require('moment')

import convertToHtml from './convertToHtml'

const postEntryToBlog = async (blogId, entry) => {
  let content = convertToHtml(entry["#text"])

  const data = {
    title: entry["@_title"],
    content: content,
    published: moment(entry["@_date"])
  }
  console.debug("Will post entry with data", data)
  return axios.post(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`, 
    data,
    {
      headers: {
        'authorization': "Bearer "+process.env.AUTH_TOKEN,
        'Content-Type': 'application/json',
      }
    }, 
  ) 
}

export default postEntryToBlog
