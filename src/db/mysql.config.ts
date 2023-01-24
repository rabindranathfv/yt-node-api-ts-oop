import { DataSource } from "typeorm";
import { DB_NAME, DB_PORT } from "../config/config";
import { AppDataSource } from "../config/data.source";
import { logger } from "../utils/logger";

// TODO: Eliminar ya que no lo estamos usando
export const mySqlConnection = async (): Promise<DataSource> => {
  try {
    logger.info(`=================================`);
    logger.info(`======= URL: ${DB_PORT} =======`);
    logger.info(`======= URL: ${DB_NAME} =======`);
    logger.info(`=================================`);
    return await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
    throw new Error(`Error trying to connect with MYSQL`);
  }
};
