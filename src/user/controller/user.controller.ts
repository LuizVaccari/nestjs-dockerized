import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserI } from '../user.interface';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) {}
    
    @Post()
    async addUser(@Body() user: UserI): Promise<UserI>{
        return await this.userService.addUser(user);
    }

    @Get()
    async findAll(): Promise<UserI[]>{
        return await this.userService.findAll();
    }
}
