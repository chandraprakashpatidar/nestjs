import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersService } from "src/user.service";
import { Authservice } from "./auth.service";
import { LocalStrategy } from "./Local.strategy";

 

@Module({

imports:[PassportModule,UsersService],
providers:[Authservice,LocalStrategy]

})

export class Authmodule
{



}