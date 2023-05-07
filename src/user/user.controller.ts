/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository){}

    @Post()
    async createUser(@Body() dataOfUsers: CreateUserDTO) {
        this.userRepository.save(dataOfUsers);
        return dataOfUsers;
    }

    @Get()
    async listUsers(){
        return this.userRepository.list();
    }
}
