import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class AppController {
  @Get()
  getUsers() {
    return { name: 'Asit', email: 'asitsahoo622@gmail.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body; // Return the actual request body, not a string
  }
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body; // Return the actual request body, not a string
  }
  @Get('/:userId')
  getUser(@Param() userId:number){
    return userId;
  }
  @Delete('/:userId')
  deleteUser(@Param() userId:number){
    return userId;
  }
}
