import saladRavanello from '../assets/img/saladRavanello.png';
import spaguettiGambe from '../assets/img/spaguettiGambe.png';
import parma from '../assets/img/parma.png';
import saladMolla from '../assets/img/saladMolla.png';
import prugnaPie from '../assets/img/prugnaPie.png';
import peachyPastrie from '../assets/img/peachyPastrie.png';
import macarons from '../assets/img/macarons.png';
import cakeDamascus from '../assets/img/cakeDamascus.png';
import espresso from '../assets/img/espresso.png';
import juice from '../assets/img/juice.png';
import cinnamonTea from '../assets/img/cinnamonTea.png';
import drinkCinnamon from '../assets/img/drinkCinnamon.png';

export const products = [
  {
    id: '1',
    type: 'mainDishes',
    img: saladRavanello,
    disheName: 'Salada Ravanello',
    description:
      'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
    price: 49.97,
  },
  {
    id: '2',
    type: 'mainDishes',
    img: spaguettiGambe,
    disheName: 'Spaguetti Gambe',
    description: 'Deliciosa massa fresca com camarões e pesto',
    price: 79.97,
  },
  {
    id: '3',
    type: 'mainDishes',
    img: parma,
    disheName: 'Torradas de Parma',
    description: 'Presunto de parma e rúcula em um pão com fermentação natural',
    price: 25.97,
  },
  {
    id: '4',
    type: 'mainDishes',
    img: saladMolla,
    disheName: 'Salada Molla',
    description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados',
    price: 19.97,
  },
  {
    id: '5',
    type: 'dessert',
    img: prugnaPie,
    dessertName: 'Prugna Pie',
    description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar ',
    price: 49.97,
  },
  {
    id: '6',
    type: 'dessert',
    img: peachyPastrie,
    dessertName: 'Peachy pastrie',
    description: 'Delicioso folheado de pêssego com folhas de hortelã ',
    price: 32.97,
  },
  {
    id: '7',
    type: 'dessert',
    img: macarons,
    dessertName: 'Macarons',
    description: 'Farinha de amêndoas, manteiga, claras e açúcar',
    price: 79.97,
  },
  {
    id: '8',
    type: 'dessert',
    img: cakeDamascus,
    dessertName: 'Bolo de damasco',
    description: 'Damascos frescos em uma massa sem glúten',
    price: 19.97,
  },

  {
    id: '9',
    type: 'drinks',
    img: espresso,
    drinksName: 'Espresso',
    description: 'Café cremoso feito na temperatura e pressões perfeitas',
    price: 49.97,
  },
  {
    id: '10',
    type: 'drinks',
    img: juice,
    drinksName: 'Suco de maracujá',
    description: 'Suco de maracúja gelado, cremoso, docinho',
    price: 32.97,
  },

  {
    id: '11',
    type: 'drinks',
    img: cinnamonTea,
    drinksName: "Tè d'autunno",
    description: 'Chá de anis, canela e limão. Sinta o outuno italiano',
    price: 19.97,
  },
  {
    id: '12',
    type: 'drinks',
    img: drinkCinnamon,
    drinksName: 'Pomo bourbon',
    description: 'Maça, whisky, canela. On the rocks',
    price: 79.97,
  },
];
