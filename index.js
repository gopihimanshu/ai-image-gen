import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import router from "./routes/openaiRoutes";

const port = process.env.PORT || 5000;

const app = express();

// Enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// As __dirname is not working in ES6 Module,
// another way to fix the issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", router);

app.listen(port, () => {
  console.log(`Server started on ${port} `);
});
