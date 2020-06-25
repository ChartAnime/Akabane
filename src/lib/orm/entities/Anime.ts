import { Column, Entity, BaseEntity, OneToOne, JoinColumn } from 'typeorm';

import { LanguagedNames } from '@entities/LanguagedNames';

@Entity('anime', { schema: 'public' })
export class Anime extends BaseEntity {

	@Column('bigint', { primary: true, name: 'id', generated: 'increment' })
	public id?: BigInt;

	@OneToOne(type => LanguagedNames)
	@JoinColumn()
	public names?: LanguagedNames;
}
