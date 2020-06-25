import 'reflect-metadata';
import 'module-alias/register';

import { Config } from './config';
import { Akabane } from '@lib/Akabane';
import { LanguagedNames } from '@entities/LanguagedNames';

const akabane = new Akabane({
	database: Config.database
});

akabane.connectDatabase()
	.then(async () => {
		const test = new LanguagedNames();
		test.English = '1';
		test.EnglishAmerican = '2';
		test.JapaneseNative = '3';
		test.JapaneseRomaji = '4';

		await akabane.db.getRepository(LanguagedNames).create(test);

		console.log('Started');
	});
