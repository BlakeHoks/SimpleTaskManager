import { Prisma } from '@prisma/client'

export class authModel implements Prisma.UserCreateInput {
  name?: string
  email: string
  password: string
}
