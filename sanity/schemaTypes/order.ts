export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name',
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone Number',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'zipcode',
            type: 'string',
            title: 'Zip Code',
        },
        {
            name: 'orderItems',
            type: 'array',
            title: 'Order Items',
            of: [
                {
                    type: 'reference', // This defines the reference type
                    to: [{ type: 'food' }] // Ensure this matches the name of your 'product' schema
                }
            ],
            description: 'Items ordered by the customer'
        },
        {
            name: 'total',
            type: 'number',
            title: 'Total',
            description: 'Total cost of the order'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Processing', value: 'processing' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' }
                ],
                layout: 'radio'
            },
            initialValue: 'pending' // Corrected typo here
        }
    ]
};
