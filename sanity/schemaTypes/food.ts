export default {
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly version of the food name',
      options: {
        source: 'name', // This will automatically generate the slug based on the food name
        maxLength: 96,  // Optional: Limit the slug length to 96 characters
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Current Price',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount (if any)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Average rating of the food item (0-5)',
      options: {
        list: [0, 1, 2, 3, 3.5, 4, 4.5, 5],
      },
    },
    {
      name: 'reviews',
      type: 'number',
      title: 'Reviews',
      description: 'Number of reviews for the food item',
      readOnly: false,  // Make it read-only so it cannot be edited manually
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the food item',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Availability status of the food item',
    },
  ],
};
