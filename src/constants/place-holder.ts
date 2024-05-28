import { IRestaurant } from '@/types/restaurant.type';

export const restaurants: IRestaurant[] = [
  {
    //  imageUrl: '/img/example-resPhoto.jpg',
    title: 'Restaurant A',
    rating: 4.5,
    cuisine: ['Italian'],
    description:
      'Ut adipisicing irure proident eiusmod non tempor minim officia nisi nostrud.',
    _id: '0',
    phoneNumber: '9999-9999--999',
    website: 'host://domain-name.url.com/',
    address: {
      city: 'Kyiv',
      country: 'Ukraine',
      post_code: '2000',
      street_address: 'Main street. 401',
    },
    createdAt: Date.now().toString(),
  },
  {
    //  imageUrl: '/img/example-rePhoto.jpg',
    title: 'Restaurant B',
    rating: 4.0,
    cuisine: ['Chinese'],
    description:
      'Voluptate voluptate enim ad laboris minim ipsum veniam. Veniam ad qui cillum id quis velit velit in duis. Minim laborum in quis non elit. Dolor ullamco ut pariatur occaecat laborum labore ex duis duis esse in proident. Excepteur consectetur proident voluptate labore velit minim aliqua. Officia excepteur laborum laborum duis velit proident eu non quis ea enim aliquip sunt ut.',
    _id: '0',
    phoneNumber: '9999-9999--999',
    website: 'host://domain-name.url.com/',
    address: {
      city: 'Kyiv',
      country: 'Ukraine',
      post_code: '2000',
      street_address: 'Main street. 401',
    },
    createdAt: Date.now().toString(),
  },
  {
    //  imageUrl: '/img/example-resPhoto.jpg',
    title: 'Restaurant C',
    rating: 4.8,
    cuisine: ['Mexican'],
    description: 'A vibrant place offering delicious Mexican dishes.',
    _id: '0',
    phoneNumber: '9999-9999--999',
    website: 'host://domain-name.url.com/',
    address: {
      city: 'Kyiv',
      country: 'Ukraine',
      post_code: '2000',
      street_address: 'Main street. 401',
    },
    createdAt: Date.now().toString(),
  },
];
