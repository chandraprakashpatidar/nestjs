import { Injectable } from "@nestjs/common";
//import axios from "axios";
@Injectable()
export class DecviceService
{

  //  async getdeviceById(id: string): Promise<any> {
       /* try {
    console.log(id,"iii")
            const url = `https://dashboard.hologram.io/api/1/devices/${id}`;
            console.log(url,"qqq")
            const response = await axios.get(url);
            console.log(response.data,"rrr")
            const data = response.data;
            console.log(data,"iii")
            //return data;
         
           
        } catch (error) {
          throw new Error
        }
      }*/
    
async getAlldeviceByorgId(orgid:string):Promise<any>
    {
try {
    console.log(orgid,"orgid")
    return  
} catch (error) {

throw new error       
}
    }
    
    async getAlldevicelocationBydeviceId(deviceid:string):Promise<any>

    {
try {
    console.log(deviceid,"orgid")
    return  
} catch (error) {

throw new error    
    
}

    }    
 async Devicepauseandunpause(id, datadetails):Promise<any>
 {

try {
    
console.log(id)
console.log(datadetails)

} catch (error)



{
    
}



 } 
    



}