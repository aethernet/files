const express = require("express")
const serveIndex = require("serve-index")
const fs = require("fs")

const app = express()

const folder = process.env.BROWSE_FOLDER

if (!folder) {
  throw new Error("No Browsable Folder Defined")
  process.exit(9)
}

if (!fs.existsSync(folder)) {
  console.log("Folder doesn't exist")
  // we might create it if not existing in future version
  process.exit(9)
}

// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use("/", express.static(folder), serveIndex(folder, { icons: true }))

// Listen
app.listen(process.env.PORT ?? 80)
