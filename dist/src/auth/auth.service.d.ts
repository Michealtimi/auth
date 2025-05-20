import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            name: string | null;
            email: string | null;
            role: string | null;
            password: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    signin(): Promise<string>;
    signout(): Promise<string>;
    hashPassword(password: string): Promise<any>;
}
