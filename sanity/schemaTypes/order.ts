const orderSchema = {
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
                    type: 'reference', // Reference to 'food' schema
                    to: [{ type: 'food' }]
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
            initialValue: 'pending'
        },
        {
            name: 'orderDate',
            type: 'datetime',
            title: 'Order Date',
            description: 'Date when the order was placed'
        },
        {
            name: 'paymentStatus',
            type: 'string',
            title: 'Payment Status',
            options: {
                list: [
                    { title: 'Paid', value: 'paid' },
                    { title: 'Unpaid', value: 'unpaid' },
                    { title: 'Pending', value: 'pending' }
                ],
                layout: 'radio'
            },
            initialValue: 'unpaid'
        },
        {
            name: 'orderNotes',
            type: 'text',
            title: 'Order Notes',
            description: 'Any special instructions for the order'
        }
    ]
};

export default orderSchema;
