
const Posts = {
    slug: 'posts', 
    access: {
        read: () => true, 
      },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true, 
      },
      {
        name: 'body',
        type: 'text', 
        required: true,
       
        
      },
      {
        name: 'coverImage',
        type: 'upload', 
        relationTo: 'media', 
      },
      {
        name: 'publishDate',
        type: 'date',
        required: true,
      },
      {
        name: 'author',
        type: 'relationship', 
        relationTo: 'authors',
        required: true,
      },
    ],
  };
  
  export default Posts;
  