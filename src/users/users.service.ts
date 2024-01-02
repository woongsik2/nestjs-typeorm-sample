import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async postJoin(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

  async getUserList() {
    return this.userRepo.find({
      select: ['id', 'name', 'email'],
    });
  }

  async getUser(id: number) {
    return this.userRepo.findOneBy({ id: id });
  }

  async editUser(userId: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(userId, updateUserDto);
  }

  async deleteUser(userId: number) {
    return this.userRepo.delete(userId);
  }
}
