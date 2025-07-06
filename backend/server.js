import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import contactRouter from "./router/contact-router.js";
import cors from "cors"


dotenv.config();
const app=express();
const corsOptions = {
   origin: "https://portfolio-frontend-a6ya.onrender.com",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use("/api", contactRouter);


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
});



