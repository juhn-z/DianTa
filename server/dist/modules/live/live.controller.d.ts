import { LiveService } from './live.service';
import { CreateLiveDto } from './dto/create-live.dto';
import { UpdateLiveDto } from './dto/update-live.dto';
export declare class LiveController {
    private readonly liveService;
    constructor(liveService: LiveService);
    create(createLiveDto: CreateLiveDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLiveDto: UpdateLiveDto): string;
    remove(id: string): string;
}
