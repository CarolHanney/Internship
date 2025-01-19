const Users = {
    slug: 'users',
    auth: true, 
    fields: [
      {
        name: 'fullName',
        type: 'text',
        required: true,
        unique: true,
      },
    ],
  };
  
  export default Users;
  