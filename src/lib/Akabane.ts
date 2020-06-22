import { AkabaneServer } from '@lib/AkabaneServer';
import { GraphQLSchema } from 'graphql';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import TypeORM from 'typeorm';

export interface AkabaneConfig {
	gqlServer: ApolloServerExpressConfig;
	database: TypeORM.ConnectionOptions;
}

export class Akabane {

	public server!: AkabaneServer;
	public db!: TypeORM.Connection;

	private config!: AkabaneConfig;

	public constructor(config: AkabaneConfig) {
		this.config = config;

		this.server = new AkabaneServer(this.config.gqlServer);
	}

	public addSchema(schema: GraphQLSchema) {
		this.server = this.server.recreate({
			schema
		});
		this.config.gqlServer = this.server.getAConfig;
	}

}