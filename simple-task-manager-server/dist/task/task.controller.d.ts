import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(taskData: {
        title: string;
        content: string;
        authorId: number;
    }): Promise<{
        id: number;
        status: string;
        title: string;
        content: string;
        date: Date;
        authorId: number;
    }>;
    findAll(skip: number, take: number): Promise<{
        id: number;
        status: string;
        title: string;
        content: string;
        date: Date;
        authorId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        status: string;
        title: string;
        content: string;
        date: Date;
        authorId: number;
    }>;
    update(id: string, taskData: {
        title: string;
        content: string;
    }): Promise<{
        id: number;
        status: string;
        title: string;
        content: string;
        date: Date;
        authorId: number;
    }>;
    delete(id: string): Promise<{
        id: number;
        status: string;
        title: string;
        content: string;
        date: Date;
        authorId: number;
    }>;
}
