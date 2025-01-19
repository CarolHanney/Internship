
const Media = {
    slug: 'media', 
    upload: true, 
    access: {
      read: () => true, 
    },
    fields: [
      {
        name: 'alt',
        type: 'text',
        required: true,
        label: 'Alt Text',
        admin: {
          description: 'image alt',
        },
      },
    ],
  };
  
  export default Media;