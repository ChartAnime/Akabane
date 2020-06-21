import 'reflect-metadata';
import 'module-alias/register';
import * as dotenv from 'dotenv';
import { isProduction } from '@utils/production';
import { join } from 'path';
import { ApolloServer } from 'apollo-server';

dotenv.config({ path: join(process.cwd(), `.${isProduction() ? 'PRODUCTION' : 'DEVELOPMENT'}.env`) });

const server = new ApolloServer({
	introspection: true,
	engine: {
		reportSchema: true,
		graphVariant: 'current'
	},
	playground: {
		endpoint: '/api',
		settings: {
			'editor.theme': 'dark',
			'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
			'editor.reuseHeaders': true
		}
	}
});

void server
	.listen()
	.then(({ url }) => console.log(`🚀  Server ready at ${url}`));
