import Link from "next/link";
import { redirect } from "next/navigation";
import { isLoggedIn } from "../lib/auth";

export const revalidate = 60;

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse our full catalog of amazing products.",
};

export default async function ProductsPage() {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    redirect("/login");
  }

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
