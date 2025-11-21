"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_live_dto_1 = require("./create-live.dto");
class UpdateLiveDto extends (0, swagger_1.PartialType)(create_live_dto_1.CreateLiveDto) {
}
exports.UpdateLiveDto = UpdateLiveDto;
//# sourceMappingURL=update-live.dto.js.map