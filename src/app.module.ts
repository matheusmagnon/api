import { forwardRef, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import {
  ThrottlerGuard,
  ThrottlerModule,
  ThrottlerStorageService,
} from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60, // Time to live in seconds
          limit: 3, // Maximum number of requests allowed in the ttl period
        },
      ],
      storage: new ThrottlerStorageService(),
    }),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, // Apply throttling globally
    },
  ],
  exports: [AppService],
})
export class AppModule {}
