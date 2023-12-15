import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
   
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() loginDto:any){

     return this.authService.validateUser(loginDto.email,loginDto.password)
    }
}
