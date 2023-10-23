import {UserService} from "./user.service";
import {User} from "./user";

export class UserJsonService implements UserService {
    add(username: string): User {
        throw new Error("Method not implemented.");
    }

    getById(id: number): User | null {
        throw new Error("Method not implemented.");
    }
}