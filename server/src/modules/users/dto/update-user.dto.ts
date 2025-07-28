import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  real_name: string;

  @ApiProperty()
  created_at: number;

  @ApiProperty()
  updated_at: number;

  @ApiProperty()
  sex: number;

  @ApiProperty()
  mobile_phone: string;

  @ApiProperty()
  email: string;
}
