import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({
      secret: `u1AuR8LZ}Zu9glr@Fg?:Cj.rAJ?}g"@M`,
    }),
    UserModule,
    PrismaModule
  ],
  controllers: [AuthController],
  providers:[AuthService]
})

export class AuthModule {}
