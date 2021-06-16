export default {
  name: 'icon',
  title: 'Icon',
  type: 'document',
  fields: [
    {
      title: 'Photo Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Year',
      name: 'year',
      type: 'number',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Photographer',
      name: 'photographer',
      type: 'reference',
      to: [{ type: 'photographer' }],
    },
    {
      title: 'Artists',
      name: 'artists',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artist' }] }],
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'sessionType',
      type: 'string',
      title: 'Session type',
      options: {
        list: [
          { value: 'keynote', title: 'Keynote' },
          { value: 'talk', title: 'Talk' },
          { value: 'break', title: 'Break' },
          { value: 'firesideChat', title: 'Fireside Chat' },
          { value: 'panel', title: 'Panel' },
        ],
      },
    },
    {
      title: 'Aspect ratio is tall?',
      name: 'isTall',
      type: 'boolean',
    },
    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
    },
  ],
};
