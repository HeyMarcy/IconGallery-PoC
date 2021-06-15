export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'name',
      title: 'Artist or Ensemble Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
