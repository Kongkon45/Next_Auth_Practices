export const products = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `This is the description for product ${i + 1}`,
  }));
  