import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export interface Config {
	database: PostgresConnectionOptions
}
