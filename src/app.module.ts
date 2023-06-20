import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Authmodule } from './auth/auth.module';
import { Usercontroller } from './user.controller';
import { user, userschema } from './user.schema';
import { UsersService } from './user.service';
import { DeviceController } from './device/device.controller';
import { DeviceService } from './device/device.service';
import { MockServerController } from './mock-server';
import { NetworkService } from './device/networkservice';
import { AxiosProvider } from './device/axios.provider'; 
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mynestjs'),
    MongooseModule.forFeature([{ name: user.name, schema: userschema }]),
  ],
  controllers: [Usercontroller, DeviceController, MockServerController],
  providers: [
    UsersService,
    Authmodule,
    DeviceService,
    NetworkService,
    AxiosProvider, 
  ],
  exports: [NetworkService],
})
export class AppModule {}
``
