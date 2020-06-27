import { Entity, BaseEntity, OneToOne, JoinColumn, Index, PrimaryGeneratedColumn } from 'typeorm';

import { LanguagedNames } from '@entities/LanguagedNames';

@Index('anime_pkey', ['id'], { unique: true })
@Entity('anime', { schema: 'public' })
export class Anime extends BaseEntity {

	// @Column('bigint', { primary: true, name: 'id', generated: 'increment' })
	@PrimaryGeneratedColumn()
	public id?: string;

	@OneToOne(() => LanguagedNames)
	@JoinColumn({ name: 'name' })
	public name?: LanguagedNames;

}
