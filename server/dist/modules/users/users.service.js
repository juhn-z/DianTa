"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(createUserDto) {
        const user = new user_entity_1.User();
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
    findOne(id) {
        return this.usersRepository.findOneBy({ user_id: id });
    }
    async update(id, updateUserDto) {
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
    async remove(id) {
        const user = await this.usersRepository.findOneBy({ user_id: id });
        if (user) {
            return this.usersRepository.remove(user);
        }
        return '查找用户失败!';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map