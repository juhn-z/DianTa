import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();

    user.user_id =
      String(new Date().getTime()) + '-' + String(Math.random()).slice(2, 10);

    user.created_at = new Date().getTime();
    user.email = createUserDto.email;
    user.mobile_phone = createUserDto.mobile_phone;
    user.real_name = createUserDto.real_name;
    user.user_name = createUserDto.user_name;
    user.sex = createUserDto.sex;
    user.updated_at = createUserDto.updated_at;

    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ user_id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ user_id: id });
    if (user && JSON.stringify(user) !== JSON.stringify(updateUserDto)) {
      user.created_at = updateUserDto.created_at;
      user.email = updateUserDto.email;
      user.mobile_phone = updateUserDto.mobile_phone;
      user.real_name = updateUserDto.real_name;
      user.sex = updateUserDto.sex;
      user.updated_at = new Date().getTime();
      user.user_name = updateUserDto.user_name;

      return this.usersRepository.save(user);
    }
    return '查找用户失败!';
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ user_id: id });
    if (user) {
      return this.usersRepository.remove(user);
    }
    return '查找用户失败!';
  }
}
