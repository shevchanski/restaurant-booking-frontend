import { z } from 'zod';

const SearchSchema = z.object({
  search_param: z.string().optional().default(''),
});

export default SearchSchema;
