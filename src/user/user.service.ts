import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUSerDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUSerDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }
    async create({ email, name, password, birthAt }: CreateUserDTO) {
        return this.prisma.user.create({
            data: {
                email,
                name,
                password,
                birthAt: birthAt ? new Date(birthAt) : null,
            }
        })
    }

    async list() {
        return this.prisma.user.findMany()
    }

    async showId(id: number) {

        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, { birthAt, email, name, password }: UpdatePutUSerDTO) {

        await this.exists(id)


        if (!birthAt) {
            birthAt = null;
        }


        return this.prisma.user.update({
            data: { email, name, password, birthAt: birthAt ? new Date(birthAt) : null },
            where: {
                id
            }
        })
    }

    async updatePartial(id: number, { birthAt, email, name, password }: UpdatePatchUSerDTO) {

        await this.exists(id)


        const data: any = {}

        if (birthAt) {
            data.birthAt = new Date(birthAt)
        }
        if (email) {
            data.email = email
        }
        if (name) {
            data.name = name
        }
        if (password) {
            data.password = password
        }

        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number) {

        await this.exists(id)
        return this.prisma.user.delete({
            where: {
                id
            }
        })
    }

    async exists(id: number) {
        if (!(await this.showId(id))) {
            throw new NotFoundException(`O usuário ${id} não existe!`)
        }
    }
}