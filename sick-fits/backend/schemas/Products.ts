import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  // TODO
  // access:
  fields: {
    name: text({ isRequired: true }),
  },
});
