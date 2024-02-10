import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUSerDTO } from './dto/update-put-user.dto';
import { UpdatePatchUSerDTO } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }

  @Get()
  async list() {
    return { users: [] }
  }

  @Get(':id')
  async showId(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id }
  }

  @Put(':id')
  async update(@Body() { email, name, password }: UpdateUSerDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'put',
      email, name, password,
      id
    }
  }


  @Patch(':id')
  async updatePartial(@Body() { email, name, password }: UpdatePatchUSerDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'path',
      email, name, password,
      id
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id
    }
  }

}