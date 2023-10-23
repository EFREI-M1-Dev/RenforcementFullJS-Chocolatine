import {UserService} from "./user.service";
import {User} from "./user";
import {containsSpaces, isNegativeNumber, isNotDefined} from "../utils";

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (isNotDefined(username)) {
            throw new Error("Username is empty");
        }

        if (containsSpaces(username)) {
            throw new Error("Username contains spaces");
        }

        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (isNegativeNumber(id)) {
            throw new Error("Id is negative");
        }

        return this.userService.getById(id);
    }
}