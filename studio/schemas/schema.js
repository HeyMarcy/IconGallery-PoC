// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity
import icon from './icon';
import artist from './artist';
import photographer from './photographer';
import bioPortableText from './bioPortableText';
import mainImage from './mainImage';
// import person from './person';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    icon,
    artist,
    photographer,
    bioPortableText,
    mainImage,
    // person,
  ]),
});
