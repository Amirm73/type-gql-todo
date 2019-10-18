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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../entity/User");
const RegisterUserInput_1 = require("./register/RegisterUserInput");
const isAuth_1 = require("../middleware/isAuth");
const logger_1 = require("../middleware/logger");
const createConfirmationUrl_1 = require("../utils/createConfirmationUrl");
const sendEmail_1 = require("../utils/sendEmail");
let RegisterUserResolver = class RegisterUserResolver {
    access() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hello from there";
        });
    }
    register({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.create({
                email,
                name,
                password
            }).save();
            sendEmail_1.sendEmail(email, yield createConfirmationUrl_1.createConfirmationUrl(user.id));
            return user;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth, logger_1.logger),
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterUserResolver.prototype, "access", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserInput_1.RegisterUserInput]),
    __metadata("design:returntype", Promise)
], RegisterUserResolver.prototype, "register", null);
RegisterUserResolver = __decorate([
    type_graphql_1.Resolver(User_1.User)
], RegisterUserResolver);
exports.RegisterUserResolver = RegisterUserResolver;
//# sourceMappingURL=RegisterUser.js.map