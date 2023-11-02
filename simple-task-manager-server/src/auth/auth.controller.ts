import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { authModel } from './auth.model'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  logIn(@Body() regData: authModel) {
    return this.authService.logIn(regData)
  }
  @Post('/register')
  register(@Body() regData: authModel) {
    return this.authService.register(regData)
  }
}
