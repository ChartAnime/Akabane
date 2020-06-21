import { join } from 'path';

export const isProduction = (): boolean => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const pkg: { isProduction?: boolean } = require(join(process.cwd(), 'package.json'));
	return pkg.isProduction as boolean;
};
