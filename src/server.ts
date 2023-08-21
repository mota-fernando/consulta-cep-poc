import  express  from "express";
import  {cepRoutes} from "./api/routes/cepRoutes";

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', cepRoutes)
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})