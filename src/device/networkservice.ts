import { HttpService } from '@nestjs/axios';
import { Injectable, Module } from '@nestjs/common';

@Injectable()
export class NetworkService {
  constructor(private readonly httpService: HttpService) {}

  async call(url: string, method: string, body?: any): Promise<any> {
    console.log(url, "url");
    console.log(method.toLowerCase(), "lowercase");
  
    try {
      switch (method.toLowerCase()) {
        case "get":
          const getResponse = await this.httpService.get(url).toPromise();
          console.log(getResponse, "response");
          return getResponse.data;
  
        case "put":
          const putResponse = await this.httpService.put(url, body).toPromise();
          console.log(putResponse, "response");
          return putResponse.data;
  
        case "post":
          const postResponse = await this.httpService.post(url, body).toPromise();
          console.log(postResponse, "response");
          return postResponse.data;
  
        case "delete":
          const deleteResponse = await this.httpService.delete(url).toPromise();
          console.log(deleteResponse, "response");
          return deleteResponse.data;
  
        case "patch":
          const patchResponse = await this.httpService.patch(url, body).toPromise();
          console.log(patchResponse, "response");
          return patchResponse.data;
  
        default:
          throw new Error("Invalid HTTP method");
      }
    } catch (error) {
      console.log("fffffffffffffff");
      console.error(error);
      return null;
    }
  }
}  





/*import { Injectable,Get } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetworkService {
  async call(url: string, method: string): Promise<any> {
    console.log(url, "urlllll");
    console.log(method,",method")
    const response = await axios.get( url );
    return response.data;
  }
}*/

/*async call(url: string, method: string): Promise<any> {
    console.log(url, "url");
    
    try {
      const response = await this.httpService.get(url).toPromise();
      console.log(response.data, "response");
      return response.data;
    } catch (error) {
      console.log("fffffffffffffff");
      console.error(error);
      return null;
    }
  }*/
      



  /* async call(url: string, method: string): Promise<any> {
      new Promise((resolve, reject) => {
          this.httpService.get(url).subscribe((res)=> {
              console.log('res-------------', res)
                if (res.status === 200) {
                    resolve(res.data);
                } else {reject(res)};
          }, (error)=> {
              reject(error);
              console.log('error---------', error)
          });
      })
  } */


