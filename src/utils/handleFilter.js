export const handleFilter = (type, propName, filterText, products) => {
  const result = products
    .filter((product) => product.type === type)
    .filter((product) =>
      product[propName].toLowerCase().includes(filterText.toLowerCase())
    );
  return result;
};
