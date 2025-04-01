import express, { Request, Response } from 'express'
import userRoutes from './routes/user.routes'
const app = express();
const PORT = process.env.PORT || 9032;
//Middleware
app.use(express.json());
//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello Home");
})
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})
