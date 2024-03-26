import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly AuthService: AuthService,
    private readonly userService: UserService
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    try {
      const data = this.AuthService.checkToken(
        (authorization ?? "").split(" ")[1]
      );
      request.tokenPayLoad = data;

      request.user = await this.userService.showId(data.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
