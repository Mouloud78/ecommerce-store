import { Product } from "../../app/models/products";

type Props = {
  products: Product[];
  addProduct: () => void;
};

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </>
  );
}
