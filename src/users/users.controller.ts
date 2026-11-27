import { 
  Body,
  Controller,
  Post, 
  Get, 
  Patch, 
  Param, 
  Query,
  Delete
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
   createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body.email, body.password); 
   } 

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id, 10));
  }

  @Get()
  findAll(@Query('email') email: string) {
    return this.usersService.find(email); // Find all users (this would need to be implemented in the service)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id, 10));
  }

}
