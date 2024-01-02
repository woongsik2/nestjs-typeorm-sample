import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('create')
  // async postJoin(@Body('name') name: string, @Body('email') email: string, @Body('password') password: string) {
  //   return await this.usersService.postJoin({ name, email, password });
  // }

  @Post('create')
  async postJoin(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.postJoin(createUserDto);
  }

  @Get('userList')
  async getUserList() {
    return await this.usersService.getUserList();
  }

  @Get('getUser/:id')
  async getUser(@Param('id') userId: number) {
    return await this.usersService.getUser(userId);
  }

  @Put('editUser/:id')
  async editUser(@Param('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.editUser(userId, updateUserDto);
  }

  @Delete('deleteUser')
  async deleteUser(@Body() userDto) {
    return await this.usersService.deleteUser(userDto.id);
  }
}
