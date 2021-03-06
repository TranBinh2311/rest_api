import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    findAllUsers(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        appointments: import(".prisma/client").Appointment[];
    })[]>;
}
