import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    signin(dto: AuthDto, res: any, req: any): Promise<import("express").Response<any, Record<string, any>>>;
    signout(res: any, req: any): Promise<import("express").Response<any, Record<string, any>>>;
}
