import { mongooseAdapter } from '@payloadcms/db-mongodb';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

import Media from './collections/Media.js';
import Posts from './collections/Posts.js';
import Authors from './collections/Authors.js';
import Users from './collections/Users.js';

export default buildConfig({
  
  admin: {
    user: 'users',
  },
  collections: [
    Media,
    Posts,
    Authors,
    Users,
  ],
  cors: ['http://localhost:3001'], 
  
 
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',

 
});
