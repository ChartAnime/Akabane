import { Config } from '@root/config';
import { EntitiesList } from '@orm/EntitiesList';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Connection, createConnection, getConnection } from 'typeorm';

export const config: PostgresConnectionOptions = {
	type: Config.database.type,
	name: Config.database.name,
	host: Config.database.host,
	username: Config.database.username,
	password: Config.database.password,
	database: Config.database.database,
	entities: [
		...EntitiesList
	],
	logging: true
};

export const connect = (): Promise<Connection> => {
	try {
		return Promise.resolve(getConnection(Config.database.name));
	} catch (error) {
		return createConnection(config);
	}
};
