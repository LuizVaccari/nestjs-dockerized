import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../user.entity';
import { UserI } from '../user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) {}

    async addUser(user: UserI): Promise<UserI>{
        return await this.userRepository.save(user)
    }

    async findAll(): Promise<UserI[]>{
        return await this.userRepository.find();
    }
}
