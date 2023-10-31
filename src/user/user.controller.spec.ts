import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {User} from "./user";

describe('UserController', () => {
    let userService: UserServiceSpy
    let sut: UserController;

    beforeEach(() => {
        userService = new UserServiceSpy();
        sut = new UserController(userService);
    });

    describe('add', () => {
        // * test cases
        // * -> should throw an error when given username is empty
        // * -> shoudl call add on UserService when given username is valid
        it('should throw an error when given username is empty', () => {
            const invalidUsernames: string[] = [
                '',
                ' ',
                '     ',
            ];

            for (const invalidUsername of invalidUsernames) {
                expect(() => sut.add(invalidUsername)).toThrow();
            }
        });

        it('should call add on UserService when given username is valid', () => {
            const validUsername = 'valid_username';

            sut.add(validUsername);

            expect(userService.callsToAdd).toBe(1);
        });
    });

    describe('getById', () => {
        // * test cases
        // * -> should throw an error when given id is negative
        const invalidIds: number[] = [
            -1,
            -2,
            -3,
        ]

        for (const invalidId of invalidIds) {
            it('should throw an error when given id is negative', () => {
                expect(() => sut.getById(invalidId)).toThrow();
            });
        }
    });
});

class UserServiceSpy implements UserService {
    callsToAdd = 0;
    callsToGetById = 1;
    add(username: string): User {
        this.callsToAdd++;
        return new User(0, '');
    }

    getById(id: number): User | null {
        this.callsToGetById++;
        return null;
    }
}