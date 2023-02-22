// First, we must import the schema creator
// import { createSchema } from 'sanity'

// Then import schema types from any plugins that might expose them
// import { SchemaTypes } from 'sanity'

// We import object and document schemas
import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import featured from './featured'

// Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//     name: "default",
//     types: schemaTypes.concat([
//         restaurant, category, dish, featured
//     ])
// })

export const schemaTypes = [restaurant, dish, category, featured]
