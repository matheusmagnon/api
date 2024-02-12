import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    //definição de execução
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', () => {
            app.close();
        });
    }
}