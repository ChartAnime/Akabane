import { AkabaneServer } from '@lib/AkabaneServer';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import TypeORM from 'typeorm';

export interface AkabaneConfig {
	gqlServer: ApolloServerExpressConfig;
	database: TypeORM.ConnectionOptions;
}

export class Akabane {

	public server!: AkabaneServer;
	public db!: TypeORM.Connection;

}
