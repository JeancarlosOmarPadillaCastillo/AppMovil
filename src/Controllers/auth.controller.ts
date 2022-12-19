import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDtos } from '../dtos/login.dtos';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() login: LoginDtos) {
    return this.authService.findByUser(login.DNI, login.Contrasena);
  }
}
