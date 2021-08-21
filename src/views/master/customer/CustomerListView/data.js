import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    city: "Bandung",
    gender: "P",
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
  },
  {
    id: uuid(),
    address: {
      country: 'Indonesia',
      state: 'Jakarta',
      city: 'Condet',
      street: 'Jl. Condet Yang Tidak Pernah Ada No 404'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    city: "Bandung",
    gender: "P",
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
  }
];
