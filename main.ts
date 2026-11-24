import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'The ConsentSock: a sock that files a formal complaint with your washing machine every time you pair it with a sandal.';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), line + '\n');
