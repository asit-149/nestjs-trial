import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user-dto";
import { CreateUserDto } from "./dto/create-user-dto";

@Controller('user')
export class UserController {
 

  constructor(private userService:UserService){} 
    
  @Get()

  getUsers() {
    return this.userService.get();
  }

  @Post()

  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto); // Return the actual request body, not a string
  }

  @Patch('/:userId')

  update(@Body() updateUserDto: UpdateUserDto, 
  @Param('userId',ParseIntPipe) userId: number) {
    return this.userService.update(updateUserDto,userId); // Return the actual request body, not a string
  }

  @Get('/:userId')

  getUser(@Param('userId',ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')

  deleteUser(@Param('userId',ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
