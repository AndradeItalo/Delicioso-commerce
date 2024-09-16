import { Card } from "@/components/ui/card";
import { productType } from "@/types/productType";
import Product from "@/components/product";

async function getProducts(){
  const data = await fetch(' https://fakestoreapi.com/products')

  if(!data.ok){
    throw new Error('Failed to fetch products')
  }

  return data.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-4xl mx-auto pt-8 px-24 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-x-28">
        {products.map((product: productType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
