import express, { Request, Response } from 'express'
import stringRoute from '../src/routes/string.route'
import path from 'path';
const app = express();
const PORT = process.env.PORT || 9032;
//Middleware
app.use(express.json());
//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello Home");
})
app.use("/api/v1/", stringRoute);
// Serve Jest HTML report
app.use("/coverage", express.static(path.join(__dirname, "../coverage/lcov-report")));

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})
