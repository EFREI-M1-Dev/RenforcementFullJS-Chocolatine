import {UserService} from "./user.service";
import {User} from "./user";
import * as fs from "fs";

export class UserJsonService implements UserService {
    private users: User[] = [];
    private readonly filePath: string = "src/user/user.json";

    constructor() {
        this.loadUsersFromFile();
    }

    private saveUsersToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 2));
    }

    private loadUsersFromFile() {
        try {
            const data = fs.readFileSync(this.filePath, "utf-8");
            this.users = JSON.parse(data);
        } catch (error) {
            console.log("Error while loading users from file", error);
        }
    }
    add(username: string): User {
        const newUser: User = {
            id: this.users.length + 1,
            username: username,
        };

        this.users.push(newUser);
        this.saveUsersToFile();

        return newUser;
    }

    getById(id: number): User | null {
        const user = this.users.find((u) => u.id === id);
        return user || null;
    }
}