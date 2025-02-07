
export default {
  name : 'order',
  type : 'document',
  title : 'Order',
  fields : [
      {
          name : 'firstName',
          title : 'First Name',
          type :'string'
      },
      {
          name : 'lastName',
          title : 'Last Name',
          type :'string'
      },
      {
          name : 'address',
          title : 'Address',
          type :'string'
      },
      {
          name : 'city',
          title : 'City',
          type :'string'
      },
      {
          name : 'zipCode',
          title : 'Zip Code',
          type :'string'
      },
      {
          name : 'phone',
          title : 'Phone',
          type :'string'
      },
      {
          name : 'email',
          title : 'Email',
          type :'string'
      },
      
      {
        name: 'orderItems',
        type: 'array',
        title: 'Order Items',
        of: [
          {
            type: 'reference',
            to: [{ type: 'food' }]  // Reference to the 'food' schema
          }
        ],
        description: 'Items ordered by the customer',
        validation: (Rule:any) => Rule.required().min(1),  // Ensures at least one item is in the order
      },
      
      
      
      {
          name : 'total',
          title : 'Total',
          type : 'number'
      },
      {
          name : 'status',
          title : 'Order Status',
          type :'string',
          options : {
              list : [
                  { title : 'Pending', value : 'pending' },
                  { title : 'Success', value :'success' },
                  { title : 'Dispatch', value : 'dispatch' },
              ],
              layout : 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
          },
          initialValue : 'pending' // Default value
      }
  ]
}