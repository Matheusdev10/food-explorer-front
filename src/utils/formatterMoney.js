const formatterMoney = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
export default formatterMoney.format;
