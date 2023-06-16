import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Authmodule } from './auth/auth.module';
//import { Authmodule } from './auth/auth.module';
//import { Authmodule } from './auth/auth.module';
import { Usercontroller } from './user.controller';
import { user, userschema } from './user.schema';
import { UsersService } from './user.service';
import { DeviceController } from './device/device.controller';
import { DecviceService } from './device/device.service';
import { MockServerController } from './mock-server';


@Module({
  imports: [ 
    MongooseModule.forRoot("mongodb://localhost:27017/mynestjs"),
MongooseModule.forFeature([{name:user.name,schema:userschema},]),
      ],
  controllers: [Usercontroller,DeviceController,MockServerController],
  providers: [UsersService,Authmodule,DecviceService],
})
export class AppModule {}
