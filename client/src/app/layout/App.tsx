import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "Product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        quantityInStock: 100,
        description: "test",
        pictureUrl: "https://picsum.photos/200",
        type: "test",
        brand: "test",
      },
    ]);
  };

  return (
    <div>
      <h1>Re-store</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
