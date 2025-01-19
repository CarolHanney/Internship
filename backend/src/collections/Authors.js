const Authors = {
    slug: 'authors', 
    access: {
        read: () => true, 
      },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true, 
      },
      {
        name: 'bio',
        type: 'textarea', 
        required: true,
      },
      {
        name: 'profilePicture',
        type: 'upload', 
        relationTo: 'media', 
      },
    ],
  };
  
  export default Authors;
  