import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import chefs from './chefs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chefs],
}
