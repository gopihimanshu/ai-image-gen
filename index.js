import express from "express";
import router from "./routes/openaiRoutes";

const port = process.env.PORT || 5000;

const app = express();

// Enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", router);

app.listen(port, () => {
  console.log(`Server started on ${port} `);
});
