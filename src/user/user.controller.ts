/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {

    //private userRepository = new UserRepository();

    constructor(private userRepository: UserRepository){}

    @Post()
    async createUser(@Body() dataOfUsers) {
        this.userRepository.save(dataOfUsers);
        return dataOfUsers;
    }

    @Get()
    async listUsers(){
        return this.userRepository.list();
    }
}
