import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
  migrations: {
    path: path.join(__dirname, '/migrations'),
    pattern: /^[\w-]+\d+\.[tj]$/,
  },
  entities: [Post],
  dbName: 'lireddit',
  type: 'postgresql',
  user: 'tylerfarris',
  password: ' ',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
