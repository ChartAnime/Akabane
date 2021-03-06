import 'reflect-metadata';
import 'module-alias/register';

import { Akabane } from '@lib/Akabane';
import { LanguagedNames } from '@entities/LanguagedNames';
import { Anime } from '@orm/entities/Anime';

const akabane = new Akabane({});

akabane.start()
	.then(async () => {
		const test = new LanguagedNames();
		test.English = '1';
		test.EnglishAmerican = '2';
		test.JapaneseNative = '3';
		test.JapaneseRomaji = '4';

		const anim = new Anime();
		anim.name = test;

		await akabane.dbSet.animes.insert(anim);

		console.log('Started');
	});
