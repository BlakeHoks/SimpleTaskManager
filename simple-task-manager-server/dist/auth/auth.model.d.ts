import { Prisma } from '@prisma/client';
export declare class authModel implements Prisma.UserCreateInput {
    name?: string;
    email: string;
    password: string;
}
