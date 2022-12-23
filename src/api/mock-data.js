import s5 from '../components/images/cervelo-s5-black.webp';
import Coledonia from '../components/images/cervelo-coledonia-5.webp';
import soloist from '../components/images/soloist.webp'
import P5 from '../components/images/P5-black.webp'
import aspero5 from '../components/images/Aspero5-gold.webp'

const FIETSEN_DATA = [{
    id: 1,
    name: 'S5',
    price: 12999,
    color: '#000000',
    sort: 'road',
    picture: s5,
  },
  {
    id: 2,
    name: 'Coledonia-5',
    price: 10999,
    color: '#000000',
    sort: 'road',
    picture: Coledonia,
  },
  {
    id: 3,
    name: 'soloist',
    price: 7899,
    color: '#FFD700',
    sort: 'road',
    picture: soloist,
  },
  {
    id: 4,
    name: 'P5',
    price: 13199,
    color: '#000000',
    sort: 'time trial',
    picture: P5,
  },
  {
    id: 5,
    name: 'àspero-5',
    price: 7999,
    color: '#FFD700',
    sort: 'off road',
    picture: aspero5,
  },
];



export {
  FIETSEN_DATA,
};