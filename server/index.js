const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../client/dist')))

// API Routes (if you need any)
app.get('/api/health', (req, res) => {
  res.json({ status: 'Senior Project is running! 🏰' })
})

// Serve React app for ALL other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`⚔️ Server running on port ${PORT}`)
})