export const handleFilter = (category, name, filterText, products) => {
  const result = products
    .filter((product) => product.category === category)
    .filter((product) =>
      product[name].toLowerCase().includes(filterText.toLowerCase())
    );
  return result;
};
