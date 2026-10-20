export const plantCategories = [
  'Air-Purifying Plants',
  'Low-Maintenance Plants',
  'Succulents and Decorative Plants'
];

export const plants = [
  // --- Category 1: Air-Purifying Plants (7 plants) ---
  {
    id: 1,
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    category: 'Air-Purifying Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
    description: 'Renowned for nocturnal oxygen production and filtering household toxins such as formaldehyde and xylene.',
    light: 'Low to bright indirect',
    water: 'Every 2-3 weeks'
  },
  {
    id: 2,
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    category: 'Air-Purifying Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
    description: 'Fast-growing, non-toxic, and 100% pet-friendly plant that efficiently cleanses indoor carbon monoxide.',
    light: 'Bright indirect light',
    water: 'Weekly watering'
  },
  {
    id: 3,
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    category: 'Air-Purifying Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
    description: 'Displays serene white blooms while neutralizing airborne chemicals and regulating indoor humidity.',
    light: 'Low to medium light',
    water: 'Keep soil moist'
  },
  {
    id: 4,
    name: 'Boston Fern',
    scientificName: 'Nephrolepis exaltata',
    category: 'Air-Purifying Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1628172901192-f04505f63004?auto=format&fit=crop&w=600&q=80',
    description: 'Lush arching fronds that naturally humidify dry air and filter common VOC contaminants from home spaces.',
    light: 'Filtered shade to medium',
    water: 'Consistent moisture'
  },
  {
    id: 5,
    name: 'Rubber Plant',
    scientificName: 'Ficus elastica',
    category: 'Air-Purifying Plants',
    price: 649,
    image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=600&q=80',
    description: 'Glossy, broad burgundy leaves that trap floating airborne dust and cleanse room toxins effortlessly.',
    light: 'Bright indirect light',
    water: 'When top soil dries'
  },
  {
    id: 6,
    name: 'English Ivy',
    scientificName: 'Hedera helix',
    category: 'Air-Purifying Plants',
    price: 349,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
    description: 'Top-tier climbing evergreen vine clinically tested by NASA for eliminating airborne mold particles.',
    light: 'Medium to bright light',
    water: 'Allow top soil to dry'
  },
  {
    id: 7,
    name: 'Areca Palm',
    scientificName: 'Dypsis lutescens',
    category: 'Air-Purifying Plants',
    price: 799,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
    description: 'Tropical feathery fronds act as an organic humidifying powerhouse and eliminate benzene and acetone.',
    light: 'Bright filtered sunlight',
    water: 'Keep lightly moist'
  },

  // --- Category 2: Low-Maintenance Plants (7 plants) ---
  {
    id: 8,
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    category: 'Low-Maintenance Plants',
    price: 549,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
    description: 'Indestructible waxy leaves that thrive in dim lighting and endure weeks without water thanks to rhizome roots.',
    light: 'Low to fluorescent light',
    water: 'Every 3-4 weeks'
  },
  {
    id: 9,
    name: 'Golden Pothos',
    scientificName: 'Epipremnum aureum',
    category: 'Low-Maintenance Plants',
    price: 279,
    image: 'https://images.unsplash.com/photo-1596724803513-46747209930f?auto=format&fit=crop&w=600&q=80',
    description: 'Cascading golden-speckled vines that flourish in virtually any room corner with minimal attention.',
    light: 'Low to medium light',
    water: 'Every 7-10 days'
  },
  {
    id: 10,
    name: 'Cast Iron Plant',
    scientificName: 'Aspidistra elatior',
    category: 'Low-Maintenance Plants',
    price: 699,
    image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80',
    description: 'True to its name, this resilient foliage plant tolerates deep shade, fluctuating temperatures, and neglect.',
    light: 'Deep shade to low light',
    water: 'Sparse watering'
  },
  {
    id: 11,
    name: 'Jade Plant',
    scientificName: 'Crassula ovata',
    category: 'Low-Maintenance Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b313a4890?auto=format&fit=crop&w=600&q=80',
    description: 'Symbolic money and good-fortune succulent with thick woody stems and plump oval leaves.',
    light: 'Direct or bright sunlight',
    water: 'Once every 2-3 weeks'
  },
  {
    id: 12,
    name: 'Chinese Evergreen',
    scientificName: 'Aglaonema commutatum',
    category: 'Low-Maintenance Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80',
    description: 'Variegated silver-green foliage designed to flourish in modern apartments with low natural lighting.',
    light: 'Low to indirect light',
    water: 'When half soil dries'
  },
  {
    id: 13,
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    category: 'Low-Maintenance Plants',
    price: 249,
    image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80',
    description: 'Multipurpose medicinal succulent with soothing gel inside thick serrated spears. Loves sunny sills.',
    light: 'Bright direct light',
    water: 'Every 2-3 weeks'
  },
  {
    id: 14,
    name: 'Heartleaf Philodendron',
    scientificName: 'Philodendron hederaceum',
    category: 'Low-Maintenance Plants',
    price: 329,
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80',
    description: 'Charming sweetheart foliage that drapes gracefully over bookshelves and recovers instantly if forgotten.',
    light: 'Moderate to bright indirect',
    water: 'When top inch dries'
  },

  // --- Category 3: Succulents and Decorative Plants (7 plants) ---
  {
    id: 15,
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    category: 'Succulents and Decorative Plants',
    price: 899,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    description: 'The iconic Swiss Cheese plant featuring magnificent split leaves that make an unforgettable design statement.',
    light: 'Medium to bright indirect',
    water: 'Weekly watering'
  },
  {
    id: 16,
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    category: 'Succulents and Decorative Plants',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    description: 'Architectural showstopper boasting gigantic violin-shaped leathery leaves that elevate contemporary decor.',
    light: 'Bright filtered sunlight',
    water: 'When top 2 inches dry'
  },
  {
    id: 17,
    name: 'String of Pearls',
    scientificName: 'Senecio rowleyanus',
    category: 'Succulents and Decorative Plants',
    price: 429,
    image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80',
    description: 'Whimsical trailing succulent with spherical emerald beads resembling a necklace. Spectacular in hanging pots.',
    light: 'Bright indirect to direct',
    water: 'Every 2 weeks'
  },
  {
    id: 18,
    name: 'Zebra Haworthia',
    scientificName: 'Haworthiopsis attenuata',
    category: 'Succulents and Decorative Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    description: 'Charming compact desk succulent with thick pointed rosettes and pearly white horizontal ribs.',
    light: 'Bright indirect light',
    water: 'Every 3 weeks'
  },
  {
    id: 19,
    name: 'Calathea Peacock',
    scientificName: 'Goeppertia makoyana',
    category: 'Succulents and Decorative Plants',
    price: 649,
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80',
    description: 'Artistic leaves patterned like peacock plumage with deep plum undersides that dance and fold at sundown.',
    light: 'Dappled medium light',
    water: 'Consistent gentle moisture'
  },
  {
    id: 20,
    name: 'Bird of Paradise',
    scientificName: 'Strelitzia nicolai',
    category: 'Succulents and Decorative Plants',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
    description: 'Majestic tropical plant featuring colossal paddle leaves that evoke the splendor of a luxury island resort.',
    light: 'Bright indirect to sunny',
    water: 'Deep weekly watering'
  },
  {
    id: 21,
    name: 'Echeveria Elegans',
    scientificName: 'Echeveria elegans',
    category: 'Succulents and Decorative Plants',
    price: 259,
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80',
    description: 'Delicate rosette succulent with alabaster-blue spoon leaves resembling a sculpted crystal rose.',
    light: 'Full morning sun',
    water: 'Every 2-3 weeks'
  }
];

export default plants;
