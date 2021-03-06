import { User } from '.prisma/client';
import { LoggerService } from '../logger/logger.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private prisma;
    private myLogger;
    constructor(prisma: PrismaService, myLogger: LoggerService);
    create(newUsers: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User & {
        appointments: import(".prisma/client").Appointment[];
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
    findByLogin(input: LoginUserDto): Promise<UserDto>;
}
