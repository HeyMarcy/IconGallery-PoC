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
      title: 'Photograph',
      name: 'photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
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
