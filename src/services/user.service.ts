import { User } from "../models/user.model";
const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
]
export const UserService = {
    getAllUsers: (): User[] => {
        return users;
    }
}