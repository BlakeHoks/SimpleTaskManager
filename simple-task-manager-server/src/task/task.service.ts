import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Prisma, Task } from '@prisma/client'

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    })
  }

  async findAll(skip: number, take: number): Promise<Task[]> {
    return this.prisma.task.findMany({
      skip,
      take,
    })
  }

  async findOne(where: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where,
    })
  }

  async update(
    where: Prisma.TaskWhereUniqueInput,
    data: Prisma.TaskUpdateInput
  ): Promise<Task> {
    return this.prisma.task.update({
      where,
      data,
    })
  }

  async delete(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({
      where,
    })
  }
}
