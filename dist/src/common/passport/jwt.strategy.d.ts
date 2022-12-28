import { Strategy } from 'passport-jwt';
import { User } from '../../auth/user.entity';
import { UserRepository } from '../../auth/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: any): Promise<User>;
}
export {};
