import { BadRequestException, Injectable } from '@nestjs/common';
const bcrypt = require('bcryptjs');
import * as bcryptjs from 'bcryptjs';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signup(dto: AuthDto){
        const { email, password } = dto;  //because we are expecting it, so it being created down/

        const foundUser = await this.prisma.user.findUnique({ where: { email } });
        if (foundUser){
            throw new BadRequestException("Email Already Exist")
        }

        const hashedPassword = await this.hashPassword(password); //hashing the password
        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        return {
            success: true,
            message: 'sign up was succesful',
            data: user
        };
    }

    async signin(){
        return '';
    }
    
    async signout(){
        return '';
    }

    
    async hashPassword(password:string){
        const saltOrRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword;
    
    }
}
