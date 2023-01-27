import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const configuration = new Configuration({
    organization: "org-hmSegK72n5o98pUVjhZoVlCI",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// Editar imagem já existente

/*const response = await openai.createImageEdit(
    fs.createReadStream("./images/IMG_2909.png"),
    fs.createReadStream("./images/IMG_2909_mask.png"),
    "Gerar imagem futuristica",
    1,
    "1024x1024"
  );
*/

// Gerar imagem com linha de comando
/*
const response = await openai.createImage({
    prompt: " gerar uma guerreira com cabelo preto",
    n: 1,
    size: "1024x1024",
  });

*/
const response = await openai.createImageVariation(
    fs.createReadStream("./images/12.png"),
    1,
    "1024x1024"
  );

  let image_url;
  
  image_url = response.data.data[0].url;

  console.log(image_url);
