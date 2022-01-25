import app from './index'
const port = process.env.PORT

app.get('/halo', (req, res) => {
    res.send('s')
})
console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
}) 
