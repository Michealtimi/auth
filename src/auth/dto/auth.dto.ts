import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString() 
  @Length(3, 20, { message: 'Password must be between 3 and 20 characters' })
  password: string;
}