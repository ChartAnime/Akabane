import { Column, Entity, BaseEntity } from 'typeorm';

@Entity('languaged_names', { schema: 'public' })
export class LanguagedNames extends BaseEntity {

	@Column('character varying', { primary: true, name: 'id', generated: 'uuid' })
	public id?: string;

	@Column('varchar', { name: 'english' })
	public English?: string;

	@Column('varchar', { name: 'english_american' })
	public EnglishAmerican?: string;

	@Column('varchar', { name: 'japanese_native' })
	public JapaneseNative?: string;

	@Column('varchar', { name: 'japanese_romaji' })
	public JapaneseRomaji?: string;

}
