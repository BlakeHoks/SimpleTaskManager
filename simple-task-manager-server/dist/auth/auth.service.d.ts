import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { authModel } from './auth.model';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    logIn(authData: authModel): Promise<any>;
    register(authData: authModel): Promise<any>;
}
