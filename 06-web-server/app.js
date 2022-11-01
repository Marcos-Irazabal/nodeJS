import * as dotenv from 'dotenv'
dotenv.config()

//de express
import express from 'express';
const app = express()
const port = process.env.PORT;

//para poder usar el __dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//para usar hbs
import hbs from "hbs"
app.set("view engine","hbs");
hbs.registerPartials(__dirname+ "/views/layout")


app.use( express.static("public/templated-roadtrip"));

app.get('/', (req, res) => {
  res.render("home",{
    titulo:"Curso node",
    nombre: "marcos irazabal"
  })
})

app.get('/elements', (req, res) => {
  res.render("elements",{
    titulo:"Curso node",
    nombre: "marcos irazabal"
  })
})

app.get('/generic', (req, res) => {
  res.render("generic",{
    titulo:"Curso node",
    nombre: "marcos irazabal"
  })
})

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + "/public/templated-roadtrip/elements.html")
// })

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + "/public/templated-roadtrip/generic.html")
// })

// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + "/public/templated-roadtrip/index.html")
// })

app.get('*', (req, res) => {
    res.send('404 error')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})