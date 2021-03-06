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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const appointment_service_1 = require("./appointment.service");
const appointment_dto_1 = require("./dto/appointment.dto");
const create_appointment_dto_1 = require("./dto/create-appointment.dto");
const update_appointment_dto_1 = require("./dto/update-appointment.dto");
const appointment_entity_1 = require("./valid/appointment.entity");
const validation_pip_1 = require("../shared/validation.pip");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async findOneApp(id) {
        return await this.appointmentService.appointment(id);
    }
    async findApptsByUser(filter) {
        return await this.appointmentService.appointmentsByUser(filter);
    }
    async createOneApp(input) {
        appointment_entity_1.checkValid.validate(input);
        const { toUser, startTime, endTime, timeZone } = input;
        return await this.appointmentService.createApp({
            toUser,
            startTime,
            endTime,
            timeZone
        });
    }
    async updateOneAppt(id, input) {
        return await this.appointmentService.updateApp(id, input);
    }
    async deleteOneAppt(id) {
        return await this.appointmentService.deleteApp(id);
    }
};
__decorate([
    (0, common_1.Get)('getById/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get Appointment By Id'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "findOneApp", null);
__decorate([
    (0, common_1.Post)('listAppByUser'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'get list App Follow User'
    }),
    __param(0, (0, common_1.Body)(new validation_pip_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_dto_1.getApptsDTO]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "findApptsByUser", null);
__decorate([
    (0, common_1.Post)('createApp'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Create Appointment'
    }),
    __param(0, (0, common_1.Body)(new validation_pip_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "createOneApp", null);
__decorate([
    (0, common_1.Patch)('updateAppt/:id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update Appointment'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new validation_pip_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateOneAppt", null);
__decorate([
    (0, common_1.Delete)('deleteUser/:id'),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Delete Appointment'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteOneAppt", null);
AppointmentController = __decorate([
    (0, common_1.Controller)('appointment'),
    (0, swagger_1.ApiTags)('appointment'),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map