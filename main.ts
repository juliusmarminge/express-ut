import {
  createUploadthing,
  createUploadthingExpressHandler,
} from "uploadthing/express";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const f = createUploadthing();

export const uploadRouter = {
  videoAndImage: f(["image"]).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
};

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  })
);

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log("listining on", port));
