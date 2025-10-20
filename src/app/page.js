export const metadata = {
  title: "Products Store - Home",
  description: "Welcome to the Products Store homepage.",
};

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Product Store</h1>
      <p>
        <a href="/login">Login</a> to view products.
      </p>
    </div>
  );
}
