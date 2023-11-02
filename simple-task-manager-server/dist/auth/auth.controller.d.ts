import { AuthService } from './auth.service';
import { authModel } from './auth.model';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(regData: authModel): Promise<any>;
    register(regData: authModel): Promise<any>;
}
