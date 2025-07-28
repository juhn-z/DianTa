import { CreateLiveDto } from './dto/create-live.dto';
import { UpdateLiveDto } from './dto/update-live.dto';
export declare class LiveService {
    create(createLiveDto: CreateLiveDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLiveDto: UpdateLiveDto): string;
    remove(id: number): string;
}
