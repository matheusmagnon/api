import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUSerDTO } from './dto/update-put-user.dto';
import { UpdatePatchUSerDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() { email, name, password, birthAt }: CreateUserDTO) {
    return this.userService.create({ email, name, password, birthAt });
  }

  @Get()
  async list() {
    return this.userService.list()
  }

  @Get(':id')
  async showId(@Param('id', ParseIntPipe) id: number) {
    return this.userService.showId(id)
  }

  @Put(':id')
  async update(@Body() data: UpdatePutUSerDTO, @Param('id', ParseIntPipe) id: number) {
    console.log(data.birthAt)

    return this.userService.update(id, data)
  }


  @Patch(':id')
  async updatePartial(@Body() data: UpdatePatchUSerDTO,
    @Param('id', ParseIntPipe) id: number) {
    return this.userService.updatePartial(id, data);

  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }

}