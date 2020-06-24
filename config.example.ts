import { Config as ConfigType } from './src/lib/types/Config';
import { DatabaseConfig } from './src/lib/util/ConfigEnums';

export const Config: ConfigType = {
	database: {
		type: 'postgres',
		host: process.env[DatabaseConfig.Host] || 'localhost',
		name: process.env[DatabaseConfig.Name] || 'akabane',
		username: process.env[DatabaseConfig.Username] || 'akabane',
		password: process.env[DatabaseConfig.Password] || '',
		database: process.env[DatabaseConfig.Database] || 'akabane'
	}
}
