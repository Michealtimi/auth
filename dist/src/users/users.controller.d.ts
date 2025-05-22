import { UsersService } from './users.service';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
