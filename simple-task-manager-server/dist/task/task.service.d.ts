import { PrismaService } from '../prisma.service';
import { Prisma, Task } from '@prisma/client';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.TaskCreateInput): Promise<Task>;
    findAll(skip: number, take: number): Promise<Task[]>;
    findOne(where: Prisma.TaskWhereUniqueInput): Promise<Task | null>;
    update(where: Prisma.TaskWhereUniqueInput, data: Prisma.TaskUpdateInput): Promise<Task>;
    delete(where: Prisma.TaskWhereUniqueInput): Promise<Task>;
}
