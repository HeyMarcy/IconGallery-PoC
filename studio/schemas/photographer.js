import {
  FaCameraRetro as icon,
  FaUserSlash as notActive,
} from 'react-icons/fa';

export default {
  title: 'Photographer',
  name: 'photographer',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
    },
    {
      title: 'First Name',
      name: 'fistName',
      type: 'string',
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Event image',
      description: 'The highest resolution',
    },
    {
      title: 'Biography',
      name: 'biography',
      type: 'text',
    },
    {
      title: 'No longer with us?',
      name: 'notActive',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      name: 'lastName',
      notActive: 'notActive',
    },
    prepare: ({ lastName }) => ({
      title: `${lastName} ${notActive ? '⌛' : ''}`,
    }),
  },
};
