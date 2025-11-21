import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
export declare class PlatformController {
    private readonly platformService;
    constructor(platformService: PlatformService);
    create(createPlatformDto: CreatePlatformDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlatformDto: UpdatePlatformDto): string;
    remove(id: string): string;
}
