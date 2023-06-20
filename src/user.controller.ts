import { Controller,Post,Body,Get ,Res,HttpStatus, HttpCode ,Patch,Param,Delete, UseGuards,Req,Query} from '@nestjs/common';
import { UsersService } from './user.service';
import { user } from './user.schema';
//import { userdto } from './user.dto';
//import { userint } from './user.interface';
import { response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Authmodule } from './auth/auth.module';
//import { ApiTags } from '@nestjs/swagger';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import axios from 'axios';
@Controller("user")
@ApiTags('user')
export class Usercontroller{
    constructor(private readonly usersService: UsersService) {}



    @Get('/all')
    async getAllUsers() {
      const response = await axios.get('http://localhost:3001/users');
      return response.data;
    }


   /* @Get(':id')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiResponse({ status: 200, description: 'User found successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async getUserById(@Res() response, @Param('id') id: string ,@Query('apikey') apiKey: string): Promise<any> {
      try {
        console.log(id,"orgid")
        const user = await this.usersService.getdeviceById(id);
        return response.status(HttpStatus.OK).json({
          message: 'User found successfully',
          data: user,
        });
      } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statuscode: 400,
          message: 'Error',
          err: 'Bad request',
        });
      }
    }*/
  }
  

 // @Post('/save')
 // @ApiOperation({ summary: 'Create a new user' })
//@ApiResponse({ status: 201, description: 'User created successfully' })
  //@ApiResponse({ status: 400, description: 'Bad request' })
 /* async createUser(@Res() response, @Body() user1: user): Promise<user> {
    try {
      console.log(user1, 'hhhhhhh');
      const data = await this.usersService.create(user1);
      return response.json({
        message: 'Successfully created user',
        data,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error',
        err: 'Bad request',
      });
    }
  }*/









  
  
  
  
  





/*@Post("/save")
async createUser(@Res() response ,@Body() user1: user): Promise<user> {
try
  {

console.log(user1,"hhhhhhh")
 const data= await this.usersService.create(user1)
 //console.log(data,"hhhhhhh")
 return response.json({
    message:"successfully",data,
 }) 

  }catch(err)
  {
  return  response.status(HttpStatus.BAD_REQUEST).json({
        statuscode:400,
        message:"err",
        err:"bad request"

    })
  }
}


@Get("/alldata")
async getalldata(@Res() response):Promise<user>
{

  try {

    const data1=await this.usersService.getalldata()
    console.log(data1,"jjjj")
    return response.status(HttpStatus.CREATED).json({
        message:"successfully",data1,
     })  
    
  } catch (error) {

    return  response.status(HttpStatus.BAD_REQUEST).json({
        statuscode:400,
        message:"err",
        err:"bad request"

    })
    
  }
}

@Patch("/update/:id")

async upadateall(@Res() response, @Param('id') id:string, @Body() user:user):Promise<user>
{
    try {
        
        var dd=await this.usersService.dataupdate(id,user)
        return  response.json({
            message:"successfully",dd,
         }) 

    } catch (error) {

        return  response.status(HttpStatus.BAD_REQUEST).json({
            statuscode:400,
            message:"err",
            err:"bad request"
    
        })    

    }
}

@Delete("/delete/:id")

async deletedata(@Res() response,@Param('id') id:string) :Promise<user>
{
    try {
    
        const data=await this.usersService.delete(id)
    

        return  response.json({
            message:"successfully",data,
         }) 

    
    } catch (error) {


        return  response.status(HttpStatus.BAD_REQUEST).json({
            statuscode:400,
            message:"err",
            err:"bad request"
    
        })  
        
    }
    
}


@UseGuards(AuthGuard('local'))
@Post("/login")
async login(@Req()req)
{
return req.user
}*/
