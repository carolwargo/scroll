// src/data/graphics/newsletterData.jsx
// Newsletter Images
import Business1 from '../assets/images/Newsletters/BUSINESS/Business1.png';
import Business2 from '../assets/images/Newsletters/BUSINESS/Business2.png';
import Business3 from '../assets/images/Newsletters/BUSINESS/Business3.png';
import Business4 from '../assets/images/Newsletters/BUSINESS/Business4.png';
import Business5 from '../assets/images/Newsletters/BUSINESS/Business5.png';
import Business6 from '../assets/images/Newsletters/BUSINESS/Business6.png';
import Business7 from '../assets/images/Newsletters/BUSINESS/Business7.png';
import BusinessStart from '../assets/images/Newsletters/BUSINESS/BusinessStart.png';
import Fitness2 from '../assets/images/Newsletters/FITNESS/Fitness2.png';
import Fitness3 from '../assets/images/Newsletters/FITNESS/Fitness3.png';
import Fitness4 from '../assets/images/Newsletters/FITNESS/Fitness4.png';
import Furniture1 from '../assets/images/Newsletters/FURNITURE/Furniture1.png';
import Furniture2 from '../assets/images/Newsletters/FURNITURE/Furniture2.png';
import Furniture3 from '../assets/images/Newsletters/FURNITURE/Furniture3.png';



export const newsletterData = [
  {
    id: 'newsletter-samples',
    title: 'Newsletter Campaign Samples',
    description: 'Engaging newsletters designed to inform and captivate your audience with captivating subject lines, clear headers, and compelling calls to action.',
    categories: [
      {
        name: 'Business',
        images: [BusinessStart, Business1, Business2, Business3, Business4, Business5, Business6, Business7].map((src, index) => ({
          src,
          alt: `Business Newsletter ${index + 1}`,
        })),
      },
      {
        name: 'Fitness',
        images: [Fitness2, Fitness3, Fitness4].map((src, index) => ({
          src,
          alt: `Fitness Newsletter ${index + 1}`,
        })),
      },
      {
        name: 'Furniture',
        images: [Furniture1, Furniture2, Furniture3].map((src, index) => ({
          src,
          alt: `Furniture Newsletter ${index + 1}`,
        })),
      },
    ],
  },
];