import app from './src/app.js'

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('Escutando em http://localhost:8080')
})