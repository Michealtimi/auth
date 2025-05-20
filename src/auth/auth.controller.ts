import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
 
  @Post('signup')
  signup(@Body(ValidationPipe) dto:AuthDto){
    return this.authService.signup(dto);
  }


  @Post('signin')
  signin(){
    return this.authService.signin();
  }

  @Get('signout')
  signout(){
    return this.authService.signout();
  }


  

}

