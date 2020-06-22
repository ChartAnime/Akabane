import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import express, { Express } from 'express';
import { mergeDefault } from '@klasa/utils';
import http from 'http';

export class AkabaneServer extends ApolloServer {

	public app!: Express;
	public httpServer!: http.Server;
	private readonly aConfig!: ApolloServerExpressConfig;

	public constructor(config: ApolloServerExpressConfig, app?: Express, httpServer?: http.Server) {
		super(config);

		this.aConfig = config;
		if (httpServer) this.httpServer = httpServer;
		this.app = app || express();
	}

	/**
	 * Recrates the current server instance with the current and passed config options combined
	 * @param config New config additions
	 */
	public recreate(config: ApolloServerExpressConfig): AkabaneServer {
		return new AkabaneServer(mergeDefault(
			this.aConfig as Record<string | number | symbol, unknown>,
			config as Record<string | number | symbol, unknown>
		), this.app, this.httpServer);
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

	public get getAConfig(): ApolloServerExpressConfig {
		return this.aConfig;
	}

}
