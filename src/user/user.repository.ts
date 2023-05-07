/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

@Injectable()   // é um decorator que transforma a classe em um provider para o Nest
export class UserRepository {
    private users = [];

    async save(user) {
        this.users.push(user);
    }

    async list() {
        return this.users;
    }
}