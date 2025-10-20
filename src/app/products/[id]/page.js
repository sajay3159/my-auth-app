import { isLoggedIn } from "../../lib/auth";

import { redirect } from "next/navigation";

export const revalidate = 60;

export default async function ProductDetail({ params }) {
  const loggedIn = await isLoggedIn();
  if (!loggedIn) {
    redirect("/login");
  }

  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width={200} />
    </div>
  );
}
