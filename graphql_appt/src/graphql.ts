/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum EnumUserRole {
    DOCTOR = "DOCTOR",
    THERAPY = "THERAPY",
    CARE_MANAGER = "CARE_MANAGER"
}

export class NewAppt {
    user: string;
    startTime: string;
    endTime: string;
}

export class UpdateAppt {
    id: string;
    startTime?: Nullable<string>;
    endTime?: Nullable<string>;
}

export class FilterFindApptsByUser {
    user?: Nullable<string>;
    id?: Nullable<string>;
    startTime?: Nullable<string>;
    endTime?: Nullable<string>;
}

export class NewUser {
    email: string;
    firstName: string;
    lastName: string;
    birthdate?: Nullable<string>;
    role?: Nullable<EnumUserRole>;
    appointments?: Nullable<Nullable<string>[]>;
}

export class UpdateUser {
    id: string;
    email?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    birthdate?: Nullable<string>;
    role?: Nullable<EnumUserRole>;
}

export class Appointment {
    id: string;
    user: User;
    name: string;
    startTime: string;
    endTime: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract appointments(): Appointment[] | Promise<Appointment[]>;

    abstract appointment(id: string): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract appointmentsByUser(filter?: Nullable<FilterFindApptsByUser>): Nullable<Nullable<Appointment>[]> | Promise<Nullable<Nullable<Appointment>[]>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAppt(input?: Nullable<NewAppt>): Appointment | Promise<Appointment>;

    abstract updateAppt(input?: Nullable<UpdateAppt>): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract deleteAppt(id: string): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    appointments: Appointment[];
    role?: Nullable<EnumUserRole>;
    createdAt: string;
}

type Nullable<T> = T | null;
