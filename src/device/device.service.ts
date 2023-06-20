import { Injectable } from "@nestjs/common";
import { NetworkService } from "./networkservice";

@Injectable()
export class DeviceService {
    constructor(private readonly networkservice: NetworkService) {}
    async getdeviceById(id: string): Promise<any> {
        try {
            const bodyData = { key: 'value' };
            const url = `https://dashboard.hologram.io/api/1/devices/?orgid=51736&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
            const data = await this.networkservice.call(url, 'get', bodyData);
            console.log(data, "data");
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getAlldeviceByorgId(id: string): Promise<any> {
        try {
            const bodyData = { key: 'value' };
            const url = `https://dashboard.hologram.io/api/1/devices/${id}?apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
            const data = await this.networkservice.call(url, 'get', bodyData);
            console.log(data, "data");
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

async getAlldevicenameBydeviceId(deviceid:any,limit:any):Promise<any>
{
try {
const bodyData=({key:'value'})
const url = `https://dashboard.hologram.io/api/1/devices/names?orgid=${deviceid}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb&limit=${limit}`;

const data = await this.networkservice.call(url, 'get', bodyData);
            console.log(data, "data");
            return data


    
} catch (error) 
{
   throw new Error (error)    
}

}


 async getAlldevicelocationBydeviceId(deviceid: string): Promise<any> {
        try {
            const bodyData = { key: 'value' };
            const url = `https://dashboard.hologram.io/api/1/devices/locations?orgid=${deviceid}&apikey=5vQxeW6vRcjNotTukTc3MoMOB2ZLmb`;
        // console.log(url)
            const data = await this.networkservice.call(url, 'get', bodyData);
            console.log(data, "data");
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async Devicepauseandunpause(id: string, datadetails: any): Promise<any> {
      

try {
//console.log(id)
//console.log(datadetails,"detailsss")
const bodyData = { key: 'value' };
    
} 

catch (error) 

{
   throw new Error(error)   
}


    }
}
