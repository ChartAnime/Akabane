import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import express, { Express } from 'express';
import { mergeDefault } from '@klasa/utils';
import http from 'http';

export class AkabaneServer extends ApolloServer {

	public readonly app!: Express;
	public readonly aConfig!: ApolloServerExpressConfig;
	protected httpServer?: http.Server;

	public constructor(config: ApolloServerExpressConfig) {
		super(config);

		this.aConfig = config;
		this.app = express();
	}

	public recreate(config?: ApolloServerExpressConfig): AkabaneServer {
		return new AkabaneServer(mergeDefault(
			this.aConfig as unknown as Record<string | number | symbol, unknown>,
			config as unknown as Record<string | number | symbol, unknown>
		));
	}

	public async listen(...opts: Array<any>): Promise<void> {
		const { app } = this;

		app.disable('x-powered-by');
		super.applyMiddleware({
			app,
			path: '/',
			cors: true
		});

		const httpServer = http.createServer(app);
		this.httpServer = httpServer;

		await new Promise(resolve => {
			httpServer.once('listening', resolve);
			httpServer.listen(...(opts.length ? opts : [{ port: 4000 }]));
		});
	}

}
