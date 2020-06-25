import type { Connection } from 'typeorm';
import { connect } from '@orm/Instance';

import { LanguagedNames } from '@entities/LanguagedNames';
import { Anime } from '@entities/Anime';

export class DbSet {

	private readonly connection: Connection;
	private constructor(connection: Connection) {
		this.connection = connection;
	}

	public get languagedNames() {
		return this.connection.getRepository(LanguagedNames);
	}

	public get animes() {
		return this.connection.getRepository(Anime);
	}

	public static async connect() {
		return new DbSet(await connect());
	}

}
