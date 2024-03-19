export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface TWUEvent {
  id:string,
  address: Address;
  title: string;
  description: string;
  categories: string[];
  startDate: Date;
  endDate: Date;
  imageUrl: string;
}

export const mockEvent: TWUEvent = {
  id:'a0dd2c3a-0eab-4ab1-82b0-a8ebecc257d8',
  address: {
    street: '123 University Drive',
    city: 'Langley',
    province: 'BC',
    postalCode: '12345',
    country: 'Canada',
  },
  title: 'Grand Charity Concert',
  description: 'Join us for a night of music and fundraising to support a great cause!',
  categories: ['Music', 'Charity'],
  startDate: new Date(2024, 4, 10, 19, 0), // May 10th, 2024, 7:00 PM
  endDate: new Date(2024, 4, 10, 22, 0), // May 10th, 2024, 10:00 PM
  imageUrl: 'https://picsum.photos/200',
};

export const EVENTS_MOCK: TWUEvent[] = [
 
  // A Midsummer Night's Dream play
  {
    id:'a0dd2c3a-0eab-4ab1-82b0-a8ebecc257d8',
    address: {
      street: 'Robert N. Thompson Centre',
      city: 'Langley',
      province: '', // Assuming it's in the same province as Langley
      postalCode: '', // Postal code might not be available
      country: 'Canada',
    },
    title: "A Midsummer Night's Dream by William Shakespeare",
    description:
      'Directed by Kate Muchmore Woo Athens, the not-so-distant future. The climate has changed, and humanity has learned to survive in a harsh world with sparse resources. In the spirit realm, an enduring…',
    categories: ['Theater', 'Play'],
    startDate: new Date(2024, 2, 12), // March 12th, 2024 (month 0-indexed)
    endDate: new Date(2024, 2, 23), // March 23rd, 2024
    imageUrl: 'https://picsum.photos/200', // Replace with actual image URL
  },

  // Chapel Service (Mon, Mar 18)
  {
    id:'ff9a055f-ba71-4448-bca8-67b3e79fb748',
    address: {
      street: 'David E. Enarson Gymnasium',
      city: 'Langley',
      province: '',
      postalCode: '',
      country: 'Canada',
    },
    title: 'Chapel Service',
    description: 'Sung worship and a message brought by a visiting speaker. Speaker: Dr. Bruce Waltke',
    categories: ['Religious', 'Chapel'],
    startDate: new Date(2024, 2, 18), // March 18th, 2024
    endDate: new Date(2024, 2, 18), // Same day event
    imageUrl: 'https://picsum.photos/200', // Replace with actual image URL
  },

  // Film Premiere (Mon, Mar 18)
  {
    id:'46b21379-500f-4329-b8ea-3b12feacc31f',
    address: {
      street: 'DeVries Centre',
      city: 'Langley',
      province: '',
      postalCode: '',
      country: 'Canada',
    },
    title: 'Film Premiere: Garry Oak Ecocultural Landscape',
    description:
      'See the premiere of the documentary, Blessed is the Spot: The Wounding and Healing of the Garry Oak Ecocultural Landscape',
    categories: ['Film', 'Documentary', 'Environmental'],
    startDate: new Date(2024, 2, 18), // March 18th, 2024
    endDate: new Date(2024, 2, 18), // Same day event
    imageUrl: 'https://picsum.photos/200', // Replace with actual image URL
  },

  // Devotion Chapel (Tue, Mar 19) & (Thu, Mar 21)
  {
    id:'5507e9ab-5ed3-4ea3-a140-1ffb3d1c116b',
    address: {
      street: 'David E. Enarson Gymnasium',
      city: 'Langley',
      province: '',
      postalCode: '',
      country: 'Canada',
    },
    title: 'Devotion Chapel',
    description: 'On Tuesdays and Thursdays, we gather to pray, engage in spiritual practices, and share together.',
    categories: ['Religious', 'Chapel'],
    startDate: new Date(2024, 2, 19), // March 19th, 2024 (recurring event)
    endDate: new Date(2024, 2, 21), // March 21st, 2024 (recurring event)
    imageUrl: 'https://picsum.photos/200', // Replace with actual image URL
  },

  // Chapel Service (Wed, Mar 20)
  {
    id:'c63ab3e2-1dc0-4710-bed2-15e8df354706',
    address: {
      street: 'David E. Enarson Gymnasium',
      city: 'Langley',
      province: '',
      postalCode: '',
      country: 'Canada',
    },
    title: 'Chapel Service',
    description: 'Sung worship and a message brought by a visiting speaker. Speaker: Dr. Bruce Waltke',
    categories: ['Religious', 'Chapel'],
    startDate: new Date(2024, 2, 20), // March 20th, 2024
    endDate: new Date(2024, 2, 20),
    imageUrl: 'https://picsum.photos/200', // Replace with actual image URL
  },
];
