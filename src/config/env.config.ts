import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 9032,
    dbUrl: process.env.DB_URL || "",
    jwtSecret: process.env.JWT_SECRET || "defaultsecret",
};
