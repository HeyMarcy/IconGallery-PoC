export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Book Title',
      type: 'string',
    },
    {
      name: 'photographer',
      title: 'Photographer',
      type: 'reference',
      to: [{ type: 'photographer' }],
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
    {
      name: 'weight',
      title: 'Weight',
      type: 'number',
    },

    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
    },
  ],
};
