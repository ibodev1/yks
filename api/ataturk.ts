const { readFile } = require("node:fs/promises");
const path = require("node:path");

const respond = (quotes: string[]): string => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports = async function handler(req, res) {
  const file = path.join(process.cwd(), "api", "json", "data.json");
  const quotes = JSON.parse(await readFile(file, "utf8"));
  res.setHeader("Content-Type", "application/json");
  return res.json({
    responseTime: Date.now(),
    quote: respond(quotes)
  })
}
