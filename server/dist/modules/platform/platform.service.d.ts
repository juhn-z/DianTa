import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
export declare class PlatformService {
    create(createPlatformDto: CreatePlatformDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlatformDto: UpdatePlatformDto): string;
    remove(id: number): string;
}
