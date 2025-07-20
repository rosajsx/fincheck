import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @SetMetadata('IS_PUBLIC', true)
  signin(@Body() signinDto: SignInDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  @SetMetadata('IS_PUBLIC', true)
  signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }
}
