import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './user.schema';
import axios from 'axios';

@Injectable()
export class UsersService {
  //constructor(@InjectModel(user.name) private userModel: Model<user>) {}


  async getdeviceById(id: string): Promise<any> {
    try {
      console.log(id)

      const url = `https://dashboard.hologram.io/api/1/devices/${id}`;
            console.log(url,"ii")
            const response = await axios.get(url);
            console.log(response.data,"rrr")
            //const data = response.data;
            //console.log(data,"iii")
     
      return ;
    } catch (error) {
      throw new Error
    }
  }





 /* async create(user: user): Promise<user> {
//console.log(user,"wfjsfjewkf")

const gg=await this.userModel.find()
//console.log(gg,"new data")

var l=gg.length
console.log(l)
var _id=l+1
console.log(_id)

var hhh={...user,"_id":_id}
    const createdUser=new this.userModel(hhh)
   console.log(createdUser,"jhjkhb")
    return   createdUser.save();
  }



  async getalldata():Promise<user[]>
  {
const data= await this.userModel.find()
return data;

  }


  async dataupdate(id:string,data:user):Promise<user>
  {

    console.log(id,data,"jjjj")
 const exx=await this.userModel.findByIdAndUpdate(id,data,{new:true})
    console.log(exx,"sdcvvefve")

return exx; 
  }

async delete(id:string):Promise<user>
{
    console.log(id,"knnn")
 const ddd=await this.userModel.findByIdAndDelete(id)

    return ddd
}*/


}