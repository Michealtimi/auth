import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
