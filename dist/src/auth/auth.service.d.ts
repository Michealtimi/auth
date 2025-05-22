import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signup(dto: AuthDto): Promise<{
        success: boolean;
        message: string;
        data: {
            email: string | null;
            password: string | null;
            id: string;
            name: string | null;
            role: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    signin(dto: AuthDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    signout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    hashPassword(password: string): Promise<any>;
    comparePassword(args: {
        password: string;
        hashedPassword: string;
    }): Promise<any>;
    signToken(args: {
        id: string;
        email: string;
    }): Promise<string>;
}
