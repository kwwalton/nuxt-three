import type { IncomingMessage, ServerResponse } from 'http'
import * as url from 'url'
export default async (req: IncomingMessage, res: ServerResponse) => {
  // return "Hello World";

  const queryObj = url.parse(req.url as string, true).query
  let data = { data: [{ data: '' }] }

  const { search } = queryObj

  if (search) {
    try {
      data = await $fetch(`https:////api.tvmaze.com/search/shows?q=${search}`)
    } catch (e) {
      console.log(e)
    }
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(data))
  res.end()
}
