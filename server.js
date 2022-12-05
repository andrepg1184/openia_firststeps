import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const configuration = new Configuration({
    organization: "org-ZuSCC8Twtsd6vyBZ1JtyLJbT",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.createImageEdit(
    fs.createReadStream("./images/IMG_2909.png"),
    fs.createReadStream("./images/IMG_2909_mask.png"),
    "an apocalypse scenario with cyberpunk suits",
    1,
    "1024x1024"
  );
  
  let image_url;
  
  image_url = response.data.data[0].url;

  console.log(image_url);