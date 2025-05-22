import { PrismaService } from 'prisma/prisma.service';
import { Request } from 'express';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyUser(id: string, req: Request): Promise<{
        user: {
            name: string | null;
            id: string;
            email: string | null;
            role: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getUsers(): Promise<{
        id: string;
        email: string | null;
    }[]>;
}
