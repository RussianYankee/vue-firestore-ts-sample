import User from "./models/User.ts";
import {addNewDoc, deleteDocument} from "./firebase-app.ts";

function addNewUser(usr: User) {
    addNewDoc<User>("users", usr)
}

function deleteUser(userId: string) {
    deleteDocument("users", userId)
}

export {addNewUser, deleteUser}
