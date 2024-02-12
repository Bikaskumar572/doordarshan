const app = require('./server/server')
const dotenv = require('dotenv')

dotenv.config({ path: 'config/config.env' })

const port = process.env.port || 7071
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})