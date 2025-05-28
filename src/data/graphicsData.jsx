// src/data/g.js
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

// Email Images (subset of Newsletter images)
import Agency1 from '../assets/images/Newsletters/AGENCY/Agency1.png';
import Agency2 from '../assets/images/Newsletters/AGENCY/Agency2.png';
import Agency3 from '../assets/images/Newsletters/AGENCY/Agency3.png';
import Design1 from '../assets/images/Newsletters/DESIGN/Design1.png';
import Design2 from '../assets/images/Newsletters/DESIGN/Design2.png';
import Water1 from '../assets/images/Newsletters/ISLAND/Water1.png';
import Water2 from '../assets/images/Newsletters/ISLAND/Water2.png';
import Photo1 from '../assets/images/Newsletters/PHOTO/Photo1.png';
import Photo2 from '../assets/images/Newsletters/PHOTO/Photo2.png';

// Social Media Images
import Food1 from '../assets/images/SocialMedia/Food/Food1.png';
import Food3 from '../assets/images/SocialMedia/Food/Food3.png';
import Food4 from '../assets/images/SocialMedia/Food/Food4.png';
import Food5 from '../assets/images/SocialMedia/Food/Food5.png';
import Food6 from '../assets/images/SocialMedia/Food/Food6.png';
import GreenFood1 from '../assets/images/SocialMedia/Food/GreenFood1.png';
import GreenFood2 from '../assets/images/SocialMedia/Food/GreenFood2.png';
import Fruits1 from '../assets/images/SocialMedia/Fruit/Fruits1.png';
import Fruits2 from '../assets/images/SocialMedia/Fruit/Fruits2.png';
import Fruits3 from '../assets/images/SocialMedia/Fruit/Fruits3.png';
import Fruits4 from '../assets/images/SocialMedia/Fruit/Fruits4.png';
import Open1 from '../assets/images/SocialMedia/Open/Open1.png';
import Open2 from '../assets/images/SocialMedia/Open/Open2.png';
import Open3 from '../assets/images/SocialMedia/Open/Open3.png';
import Open4 from '../assets/images/SocialMedia/Open/Open4.png';
import Travel1 from '../assets/images/SocialMedia/Travel/Travel1.png';
import Travel2 from '../assets/images/SocialMedia/Travel/Travel2.png';
import Travel3 from '../assets/images/SocialMedia/Travel/Travel3.png';
import Travel4 from '../assets/images/SocialMedia/Travel/Travel4.png';
import YogaSet from '../assets/images/YogaStory/YogaSet.png';

// Infographic Images
import Typo1 from '../assets/images/Typo/Typo1.png';
import Typo2 from '../assets/images/Typo/Typo2.png';
import Typo3 from '../assets/images/Typo/Typo3.png';
import Typo4 from '../assets/images/Typo/Typo4.png';
import Info2 from '../assets/images/Infographics/Info2.png';
import Info3 from '../assets/images/Infographics/Info3.png';
import Info4 from '../assets/images/Infographics/Info4.png';
import Info5 from '../assets/images/Infographics/Info5.png';
import Info6 from '../assets/images/Infographics/Info6.png';
import Info7 from '../assets/images/Infographics/Info7.png';
import Info8 from '../assets/images/Infographics/Info8.png';
import Info9 from '../assets/images/Infographics/Info9.png';
import Info10 from '../assets/images/Infographics/Info10.png';
import Info11 from '../assets/images/Infographics/Info11.png';
import Info12 from '../assets/images/Infographics/Info12.png';

// Sports Images
import Catching from '../assets/images/Graphics/Catching.png';
import Canceled from '../assets/images/Graphics/Canceled.png';
import CuttersFlyers from '../assets/images/Graphics/CuttersFlyers.png';
import S1 from '../assets/images/Sports/S1.png';
import S2 from '../assets/images/Sports/S2.png';
import S4 from '../assets/images/Sports/S4.png';
import CCU1 from '../assets/images/Graphics/CCU1.png';
import CCU2 from '../assets/images/Graphics/CCU2.png';
import Duke1 from '../assets/images/WallPaper/Duke1.png';
import Duke2 from '../assets/images/WallPaper/Duke2.png';
import Duke3 from '../assets/images/WallPaper/Duke3.png';

export const graphicsData = [
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
  {
    id: 'email-samples',
    title: 'Email Campaign Samples',
    description: 'Unified graphics for multi-platform email marketing, ensuring consistent and captivating visuals.',
    categories: [
      {
        name: 'Agency',
        images: [Agency1, Agency2, Agency3].map((src, index) => ({
          src,
          alt: `Agency Email ${index + 1}`,
        })),
      },
      {
        name: 'Design',
        images: [Design1, Design2].map((src, index) => ({
          src,
          alt: `Design Email ${index + 1}`,
        })),
      },
      {
        name: 'Island',
        images: [Water1, Water2].map((src, index) => ({
          src,
          alt: `Island Email ${index + 1}`,
        })),
      },
      {
        name: 'Photo',
        images: [Photo2, Photo1].map((src, index) => ({
          src,
          alt: `Photo Email ${index + 1}`,
        })),
      },
    ],
  },
  {
    id: 'social-samples',
    title: 'Social Media Campaign Samples',
    description: 'Vibrant graphics to enhance your social media presence across platforms.',
    heroImage: { src: YogaSet, alt: 'Yoga Set Social Media' },
    categories: [
      {
        name: 'Food',
        images: [Food1, Food3, Food4, Food5, Food6, GreenFood1, GreenFood2].map((src, index) => ({
          src,
          alt: `Food Social ${index + 1}`,
        })),
      },
      {
        name: 'Fruit',
        images: [Fruits1, Fruits2, Fruits3, Fruits4].map((src, index) => ({
          src,
          alt: `Fruit Social ${index + 1}`,
        })),
      },
      {
        name: 'Open',
        images: [Open1, Open2, Open3, Open4].map((src, index) => ({
          src,
          alt: `Open Social ${index + 1}`,
        })),
      },
      {
        name: 'Travel',
        images: [Travel1, Travel2, Travel3, Travel4].map((src, index) => ({
          src,
          alt: `Travel Social ${index + 1}`,
        })),
      },
    ],
  },
  {
    id: 'sport-samples',
    title: 'Sports Graphics',
    description: 'Dynamic visuals for sports-related campaigns.',
    categories: [
      {
        name: 'General Sports',
        images: [Catching, Canceled, CuttersFlyers, S1, S2, S4].map((src, index) => ({
          src,
          alt: `Sports Graphic ${index + 1}`,
        })),
      },
      {
        name: 'CCU',
        images: [CCU1, CCU2].map((src, index) => ({
          src,
          alt: `CCU Graphic ${index + 1}`,
        })),
      },
      {
        name: 'Duke',
        images: [Duke1, Duke2, Duke3].map((src, index) => ({
          src,
          alt: `Duke Graphic ${index + 1}`,
        })),
      },
    ],
  },
  {
    id: 'info-samples',
    title: 'Infographics',
    description: 'Informative and visually appealing infographics that transform complex data into compelling narratives.',
    images: [
      Typo1, Typo2, Typo3, Typo4, Info2, Info3, Info4, Info5, Info6, Info7, Info8, Info9, Info10, Info11, Info12,
    ].map((src, index) => ({
      src,
      alt: `Infographic ${index + 1}`,
    })),
  },
];