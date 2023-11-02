"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const argon2_1 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async logIn(authData) {
        const user = await this.userService.findByEmail(authData.email);
        const isValidPassword = await (0, argon2_1.verify)(user.password, authData.password);
        if (user && isValidPassword) {
            const payload = { id: user.id, email: user.email, name: user.name };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async register(authData) {
        const isExist = await this.userService.findByEmail(authData.email);
        if (isExist) {
            throw new Error('User already exists');
        }
        const user = await this.userService.create({
            name: authData.name,
            email: authData.email,
            password: await (0, argon2_1.hash)(authData.password),
        });
        const payload = { id: user.id, email: authData.email, name: authData.name };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map