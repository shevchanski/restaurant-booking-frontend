import { IRestaurant } from '@/types/restaurant.type';

export const restaurants: IRestaurant[] = [
  {
    imageUrl: '/img/example-resPhoto.jpg',
    title: 'Restaurant A',
    rating: 4.5,
    cuisine: 'Italian',
    description:
      'Ut adipisicing irure proident eiusmod non tempor minim officia nisi nostrud.',
    _res_id: 0,
  },
  {
    imageUrl: '/img/example-rePhoto.jpg',
    title: 'Restaurant B',
    rating: 4.0,
    cuisine: 'Chinese',
    description:
      'Voluptate voluptate enim ad laboris minim ipsum veniam. Veniam ad qui cillum id quis velit velit in duis. Minim laborum in quis non elit. Dolor ullamco ut pariatur occaecat laborum labore ex duis duis esse in proident. Excepteur consectetur proident voluptate labore velit minim aliqua. Officia excepteur laborum laborum duis velit proident eu non quis ea enim aliquip sunt ut.',
    _res_id: 0,
  },
  {
    imageUrl: '/img/example-resPhoto.jpg',
    title: 'Restaurant C',
    rating: 4.8,
    cuisine: 'Mexican',
    description: 'A vibrant place offering delicious Mexican dishes.',
    _res_id: 0,
  },
];
