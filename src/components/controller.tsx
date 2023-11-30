/*
*/

"use server"

import { db } from "@/db"
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const saltRounds = 10;

export interface IDecodedUser {
    id: number
};

export async function createUser(formData: FormData) {
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    if (await db.user.findUnique({ where: { username: username } })) {
        return
    }
    else {
        const encrypted = await bcrypt.hash(password, saltRounds)
        await db.user.create({ data: { username: username, password: encrypted } })
        redirect("/users/login")
    }
}

export async function validateUser(incomingData: any) {
    const username = incomingData.username
    const password = incomingData.password
    const user = await db.user.findUnique({ where: { username: username } })
    if (!user) return { result: { user: null, token: null } }
    bcrypt.compare(password, user?.password || "", function (err, result) {
        if (result === true) {
            const token = jwt.sign({ id: user?.id }, "secret", { expiresIn: "2days" });
            return { result: { user, token } }
        }
        else {
            return { result: { user: null, token: null } };
        }
    })
}
export async function decryptToken() {
    try {
        const authHeader = " " //req.headers.authorization;
        if (!authHeader) {
            return { result: { user: null, token: null } } //"Header does not exist";
        }
        const token = authHeader.split(" ")[1];
        const decodedUser = jwt.verify(token, "secret");
        const user = searchUserById((decodedUser as IDecodedUser).id);
        return { result: { user, token } };
    }
    catch (err) {
        return { err };
    }
}

export async function searchUserById(id: number) {
    const user = await db.user.findUnique({ where: { id: id } })
    if (!user) return "User not found";
    return user;
}