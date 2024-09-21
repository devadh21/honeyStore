
import { writeFile } from "fs/promises";
import cloudinary from "@/cloudinaryconfig";

import fs from "fs";



export default async function writeFileAction(path:string,buffer:Buffer) {
    // const path =join("/" ,"tpm" , image_file["name"]);
    // const fs = require('fs-extra')
    // await fs.promises.writeFile("/'tpm'/name.png",buffer)  
    const res = await cloudinary.uploader.upload('C:/Users/hicham/Desktop/honey_bee/honey_bee/public/img/honey_sidar.png')
    console.log(res)

}

