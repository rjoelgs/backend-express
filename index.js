import express from 'express';
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json())

const port = 3005;

let data = [
    {id: 1, year: 2021, model: 'ford', price: 10000, color: 'red'},
    {id: 2, year: 2019, model: 'chevrolet', price: 20000, color: 'blue'},
    {id: 3, year: 2024, model: 'fiat', price: 25000, color: 'yellow'}
]


app.get('/', (req, res)=>{
    res.json(data)
})

app.post('/', (req, res)=>{
    const {year, model, price, color}= req.body
    console.log(`alguien esta haciendo un post y mando un ${year}, un ${model}, etc`)
   const newCar ={
    id: Date.now(),
    year: year,
    model: model,
    price: price,
    color: color
   }
   data.push(newCar)
    res.json({"data": data})
})

app.listen(port, ()=>{
    console.log(`app listening at ${port}`)
})