// bioPortableText.js

export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Biography',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
  ],
};
