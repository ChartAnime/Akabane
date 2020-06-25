import { EntitySchema } from 'typeorm';

import { LanguagedNames } from '@entities/LanguagedNames';
import { Anime } from '@entities/Anime';

// eslint-disable-next-line @typescript-eslint/ban-types
export const EntitiesList: ((Function | string | EntitySchema<any>))[] = [
	LanguagedNames,
	Anime
];
