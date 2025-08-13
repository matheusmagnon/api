import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUSerDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUSerDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/enum/role.enum";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";

@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.Admin)
  @Post()
  async create(@Body() { email, name, password, birthAt }: CreateUserDTO) {
    return this.userService.create({ email, name, password, birthAt });
  }

  @Roles(Role.Admin)
  @Get()
  async list() {
    return this.userService.list();
  }

  @Roles(Role.Admin)
  @Get(":id")
  async showId(@ParamId("id", ParseIntPipe) id: number) {
    // ParamId example of cuistom decorators
    return this.userService.showId(id);
  }

  @Roles(Role.Admin)
  @Put(":id")
  async update(
    @Body() data: UpdatePutUSerDTO,
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.userService.update(id, data);
  }

  @Roles(Role.Admin)
  @Patch(":id")
  async updatePartial(
    @Body() data: UpdatePatchUSerDTO,
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.userService.updatePartial(id, data);
  }

  @Roles(Role.Admin)
  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
