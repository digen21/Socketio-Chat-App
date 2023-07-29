import "dotenv/config";
import express from "express";
import cors from "cors";

import { installHttpServer } from "@middlewares";
import router from "@routes";

const app = express();

app.use(cors());
app.use(router);

installHttpServer(app);
