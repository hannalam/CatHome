//I wrote this code

// An array of cat types, each representing a different cat breed.
export const catType = [
  {
    id: 1,
    name: 'Bengal',
    photo_url:
    'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2ODQ5ODc1OTE1MTIyMzA2/bengalleopardcat.png'
  },
  {
    id: 2,
    name: 'Ragdoll',
    photo_url: 'https://www.pumpkin.care/wp-content/uploads/2021/01/Ragdoll-Hero.jpg'
  },
  {
    id: 3,
    name: 'American Shorthair',
    photo_url:
    'https://www.zooplus.fr/magazine/wp-content/uploads/2018/12/american-shorthair-768x512.jpg'
  },
  {
    id: 4,
    name: 'Abyssinian',
    photo_url:
      'https://petsure.com.au/wp-content/uploads/2021/11/Abyssinian.png'
  },
];

// An array of cat information, each representing a specific cat profile.
export const catInfo = [
  {
    catId: 0,
    catTypeId: 1,
    title: 'Tofu',
    photo_url: 'https://static.wixstatic.com/media/cba985_70bc217b6aa3497dae1c12e0d3069f2c~mv2.jpg/v1/crop/x_890,y_1437,w_1895,h_2198/fill/w_392,h_455,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/IMGL3630.jpg',
      photosArray: [
        'https://static.wixstatic.com/media/cba985_70bc217b6aa3497dae1c12e0d3069f2c~mv2.jpg/v1/crop/x_890,y_1437,w_1895,h_2198/fill/w_392,h_455,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/IMGL3630.jpg',
        "https://static.wixstatic.com/media/cba985_89bab947f2464680b9efed13808fdef2~mv2.jpg/v1/crop/x_87,y_141,w_722,h_1325/fill/w_297,h_549,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/b54def7a-e99b-441a-a1c7-049c0de5232c_JPG.jpg",
        'https://static.wixstatic.com/media/cba985_edc2fc09c9d14865b5b08c5e3470dcf5~mv2.jpeg/v1/crop/x_0,y_103,w_1086,h_1258/fill/w_536,h_621,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-17%20at%2011_19_42.jpeg',
      ],
    interests: [
      [0, 'Sometime'], 
      [1, 'Always'], 
      [2, '1/week'], 
      [3,'14 hours/day'], 
      [4, '160g/day'], 
      [5, 'Sometime'], 
      [6, 'Always'], 
      [8 , '1 hour'], 
      [10, 'A lots']
    ],
    birth_year: '2023',
    gender: 'male',
    vaccinated: 'Yes',
    adoption:'unavailable',
    description:
      'Tofu is friendly and social. He enjoy being around people and can form strong bonds with his owners.\n\n  He may be vocal at times and are often described as confident and assertive.'
  },
  {
    catId: 1,
    catTypeId: 1,
    title: 'Cookie',
    photo_url:
        'https://static.wixstatic.com/media/cba985_5ffcafe374374c798728c80e66dc7dd4~mv2.jpg/v1/crop/x_1165,y_983,w_2132,h_2476/fill/w_392,h_455,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/IMGL4178%202.jpg',
      photosArray: [
        'https://static.wixstatic.com/media/cba985_5ffcafe374374c798728c80e66dc7dd4~mv2.jpg/v1/crop/x_1165,y_983,w_2132,h_2476/fill/w_392,h_455,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/IMGL4178%202.jpg',
        'https://static.wixstatic.com/media/cba985_2ee7d2ce5346463f95c2ef09303de9aa~mv2.jpeg/v1/fill/w_725,h_563,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/WhatsApp%20Image%202023-06-23%20at%2019_28_24%20(3).jpeg',
        'https://static.wixstatic.com/media/cba985_01e92fa682ad47b6a6a6399377e5343a~mv2.jpeg/v1/fill/w_725,h_563,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-28%20at%2013_42_17%20(1).jpeg',
        'https://static.wixstatic.com/media/cba985_1c3f7dfac52c40e298af331c429b4f9c~mv2.jpeg/v1/fill/w_689,h_563,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-06%20at%2009_13_33%20(1).jpeg'
      ],
    interests: [
      [0, 'Always'], 
      [1, 'Always'], 
      [2, '1/week'], 
      [3,'15 hours/day'], 
      [4, '150g/day'], 
      [5, 'Sometime'], 
      [6, 'Always'], 
      [8 , '1 hour'],
      [9, 'In the sea'],
      [10, 'A lots']
    ],
    birth_year: '2023',
    gender: 'male',
    vaccinated: 'Yes',
    adoption:'available',
    description: 'He is highly energetic and enjoy interactive play with people. He is intelligent and can be trained to do tricks and even walk on a leash. \n\n Bengal cats are also known for their curiosity and may explore their surroundings with great enthusiasm.'
  },
  {
    catId: 2,
    catTypeId: 2,
    title: 'Dark Chocolate',
    photo_url: 'https://www.thehappycatsite.com/wp-content/uploads/2023/03/How-To-Identify-A-Ragdoll-Cat-HC-long.jpg',
      photosArray: [
        'https://www.thehappycatsite.com/wp-content/uploads/2023/03/How-To-Identify-A-Ragdoll-Cat-HC-long.jpg',
        'https://i.pinimg.com/originals/b9/32/1b/b9321b13b800b382c4229e38f6e1c5da.jpg',
        'https://ragdollcare.com/wp-content/uploads/2022/05/Webp.net-compress-image-49.jpg?ezimgfmt=rs:352x198/rscb1/ngcb1/notWebP',
      ],
    interests: [
      [0, 'Sometime'], 
      [3,'16 hours/day'], 
      [4, '200g/day'], 
      [6, 'Always'], 
      [7, 'Always'], 
      [8 , '15 minutes'], 
    ],
    birth_year: '2020',
    gender: 'male',
    vaccinated: 'No',
    adoption:'unavailable',
    description:
      'These cats are highly social and enjoy interacting with people. He is not typically aloof or independent like some other cat breeds. He often want to be where the action is and can get along well with children and other pets.'
  },
  {
    catId: 3,
    catTypeId: 2,
    title: 'White Chocolate',
    photo_url:
        'https://ik.imagekit.io/yynn3ntzglc/cms/ragdoll_contenu2_b033c24d7e_nWZeC1idB.jpg',
      photosArray: [
        'https://ik.imagekit.io/yynn3ntzglc/cms/ragdoll_contenu2_b033c24d7e_nWZeC1idB.jpg',
        'https://jardinage.lemonde.fr/images/dossiers/2017-06/ragdoll-1-113603.jpg',
        'https://www.animal-assur.fr/wp-content/uploads/2022/06/Ragdoll-chat.jpg',
      ],
    interests: [
      [0, 'Always'], 
      [3,'16 hours/day'], 
      [4, '190g/day'], 
      [6, 'Always'], 
      [7, 'Always'], 
      [8 , '10 minutes'], 
    ],
    birth_year: '2021',
    gender: 'female',
    vaccinated: 'Yes',
    adoption:'available',
    description:
      'She is a gentle giants. She has a calm and laid-back demeanor, and she tend to go limp when you pick her up. \n\n She is known for her tendency to follow owners around the house and enjoy being cuddled and held. She often seek out attention and will purr contentedly when she is with you.'
  },
  {
    catId: 4,
    catTypeId: 3,
    title: 'Orange Juice',
    photo_url: 'https://png.pngtree.com/background/20230422/original/pngtree-an-orange-cat-in-the-dirt-is-sitting-in-the-background-picture-image_2453064.jpg',
    photosArray: [
      'https://png.pngtree.com/background/20230422/original/pngtree-an-orange-cat-in-the-dirt-is-sitting-in-the-background-picture-image_2453064.jpg',
      'https://www.dailypaws.com/thmb/JxLf5Pz9bD5vo5130yoo0ebox9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/american-shorthair-licking-paw-806771214-2000-ff12884aba2646a6bda688dff6e9893d.jpg',
      'https://i.pinimg.com/1200x/4f/47/a1/4f47a1149e238318689266c5f00a65bb.jpg'
    ],
    interests: [
      [0, 'Always'], 
      [1, 'Always'], 
      [3,'15 hours/day'], 
      [4, '180g/day'], 
      [5, 'Always'], 
      [6, 'Always'], 
      [7, 'A bit'],
      [8 , '40 minutes'], 
      [10, 'A bit']
    ],
    birth_year: '2022',
    gender: 'female',
    vaccinated: 'Yes',
    adoption:'unavailable',
    description:
      'She is a easygoing cats. Her laid-back nature and tend to be low-maintenance in terms of their temperament.\n\n  She can adapt well to different living environments and are often described as "good-natured."'
  },
  {
    catId: 5,
    catTypeId: 3,
    title: 'Mocha',
    photo_url: 'https://animalcorner.org/wp-content/uploads/2022/04/American-Shorthair-Cat-2837123.png',
    photosArray: [
      'https://animalcorner.org/wp-content/uploads/2022/04/American-Shorthair-Cat-2837123.png',
      'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/09-24/American+Shorthair+kitten+ready+to+pounce-min.jpg',
      'https://cdn-images.vetstreet.com/56/92a390a27c11e087a80050568d634f/file/American-Shorthair-2-645mk062211.jpg',
      'https://cdn-images.vetstreet.com/e7/72/0e9bf32843e4a3fef50b9339cea5/American-Shorthair-AP-1RPWID-645sm3614.jpg'
    ],
    interests: [
      [0, 'Always'], 
      [1, 'Always'], 
      [3,'15 hours/day'], 
      [4, '180g/day'], 
      [5, 'Always'], 
      [6, 'Always'], 
      [7, 'A lots'],
      [8 , '50 minutes'], 
      [10, 'A bit']
    ],
    birth_year: '2021',
    gender: 'male',
    vaccinated: 'Yes',
    adoption:'available',
    description:
      'He is quite affectionate with human. He enjoys being petted and cuddled, but not typically overly demanding of attention.\n\n  He tend to be independent and can entertain himself when needed. '
  },
  {
    catId: 6,
    catTypeId: 4,
    title: 'Brownie',
    photo_url:
        'https://www.dailypaws.com/thmb/9CN7eBr9VlWgmUqTOJCIQrY4ecg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abyssinian-standing-wooden-floor-332009705-2000-e52e511e30e64042a45b7a6e6f36464d.jpeg',
      photosArray: [
        'https://www.dailypaws.com/thmb/9CN7eBr9VlWgmUqTOJCIQrY4ecg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/abyssinian-standing-wooden-floor-332009705-2000-e52e511e30e64042a45b7a6e6f36464d.jpeg',
        'https://assets-global.website-files.com/604bd0b0571e783e6dedca7f/62b602abc3d53f2af7f12719_Abyssinian%20-%20cat%20breed%20profile_Hero%20(1).jpg',
        'https://www.catipilla.com/wp-content/uploads/2023/01/Abyssinian-Cat-scaled.jpg',
        'https://animalcorner.org/wp-content/uploads/2022/04/The-Abyssinian-3809713.png'
      ],
    interests: [
      [0, 'Always'], 
      [1, 'Always'], 
      [2, '1/week'], 
      [3,'14 hours/day'], 
      [4, '200g/day'], 
      [5, 'A lots'], 
      [6, 'Always'], 
      [8 , '1 hour'], 
      [9, 'In the sea'],
      [10, 'A lots']
    ],
    birth_year: '2023',
    gender: 'female',
    vaccinated: 'No',
    adoption:'unavailable',
    description:
      'She retains her playful nature well into adulthood. She do not tend to mellow out as much as some other breeds. These cats are known for their agility and athleticism. \n\n She can jump to impressive heights and often enjoy climbing and perching in high places.'
  },
];

// An array of cat interests, each representing a different cat hobby.
export const interests = [
  {
    interestId: 0,
    name: 'Talk',
    photo_url: 'https://store-images.s-microsoft.com/image/apps.49745.9007199266437737.188b2a07-b170-4fe0-a52a-63f919ad6d32.47320de6-0cfc-4757-a926-0cfcd81b9d65'
  },
  {
    interestId: 1,
    name: 'Jump',
    photo_url:
      'https://cdn.images.express.co.uk/img/dynamic/78/590x/Cat-jumping-1436277.jpg?r=1621004890603'
  },
  {
    interestId: 2,
    name: 'Hang out',
    photo_url: 'https://images.snapwi.re/0565/5d396859691acf5fbfed1853.w800.jpg'
  },
  {
    interestId: 3,
    name: 'Sleep',
    photo_url:
      'https://static.toiimg.com/thumb/msid-77105342,width-1280,resizemode-4/77105342.jpg'
  },
  {
    interestId: 4,
    name: 'Eat',
    photo_url: 'https://cdn.shopify.com/s/files/1/0453/0058/0515/files/15.png?v=1613161886'
  },
  {
    interestId: 5,
    name: 'Climb',
    photo_url: 'https://www.greenacrespetresort.com/wp-content/uploads/2023/04/why-do-cats-climb-scaled.jpg'
  },
  {
    interestId: 6,
    name: 'Relax',
    photo_url:
      'https://c8.alamy.com/comp/DYAWD3/cat-on-beach-and-blue-sky-DYAWD3.jpg'
  },
  {
    interestId: 7,
    name: 'Cuddle',
    photo_url:
      'https://cdn-images.vetstreet.com/44/1a/de599e0749caa8ec402e1f3bfb34/forcing-cat-to-snuggle-thinkstockphotos-508216486.jpg'
  },
  {
    interestId: 8,
    name: 'Play trick',
    photo_url:
      'https://media.istockphoto.com/id/685958232/photo/cruising-cat.jpg?s=612x612&w=0&k=20&c=fTp9RNE63j0iokfPOWdLGM57PsqnWL_eaeh6Wyr7fag='
  },
  {
    interestId: 9,
    name: 'Swim',
    photo_url: 'https://excitedcats.com/wp-content/uploads/2021/01/Scottish-straight-eared-long-haired-cat-swimming_Shutterstock_Irina-Kovynyova.jpg'
  },
  {
    interestId: 10,
    name: 'Run',
    photo_url: 'https://www.animalfoodplanet.com/wp-content/uploads/2022/03/How-Fast-Can-Cats-Run.jpg'
  },
];

//end of code I wrote