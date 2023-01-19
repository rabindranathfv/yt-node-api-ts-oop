import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { NODE_ENV, PORT, LOG_DIR, LOG_FORMAT, API_VERSION } = process.env;
