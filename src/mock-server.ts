import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { json } from 'stream/consumers';

@Controller('users')
export class MockServerController {
  @Get()
  getUsers() {



    
      const data = fs.readFileSync('/home/smartaxiom/Desktop/nestjs/src/auth/mock-data.json', 'utf8');
     console.log(data)
     

   
    //  const filePath = path.resolve(__dirname, 'auth', 'mock-data.json');
    //  console.log(filePath, "filepath");
 
    //  const data = fs.readFileSync(filePath, 'utf8');
    //  console.log(data);

      return data;

    // const data=(__dirname +'home/smartaxiom/Desktop/nestjs/src/auth/mock-data.json' )
    // console.log(data)
    // // const filePath = path.resolve(__dirname, '..', 'mock-data.json');
    // // const data = fs.readFileSync(filePath, 'utf8');
    // return JSON.parse(data);
  }
}


