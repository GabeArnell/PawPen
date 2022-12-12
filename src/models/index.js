// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dogs } = initSchema(schema);

export {
  Dogs
};