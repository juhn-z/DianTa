import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    user_id: string;
    user_name: string;
    real_name: string;
    created_at: number;
    updated_at: number;
    sex: number;
    mobile_phone: string;
    email: string;
}
export {};
