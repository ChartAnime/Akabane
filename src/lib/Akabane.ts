import { AkabaneServer } from '@lib/AkabaneServer';
import { GraphQLSchema } from 'graphql';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import { DbSet } from '@orm/DbSet';
import { connect } from '@orm/Instance';
import * as TypeORM from 'typeorm';

export interface AkabaneConfig {
	gqlServer?: ApolloServerExpressConfig;
	database: TypeORM.ConnectionOptions;
}

export class Akabane {

	public server!: AkabaneServer;

	public dbSet!: DbSet;
	public connection!: TypeORM.Connection;

	private config!: Partial<AkabaneConfig>;

	public constructor(config: Partial<AkabaneConfig>) {
		this.config = config;

		// this.server = new AkabaneServer(this.config.gqlServer!);
	}

	public addSchema(schema: GraphQLSchema) {
		this.server = this.server.recreate({
			schema
		});
		this.config.gqlServer = this.server.getAConfig;
	}

	public async start() {
		this.dbSet = await DbSet.connect();
		this.connection = await connect();
	}

}
