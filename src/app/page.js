export const metadata = {
  title: "This is Homepage",
  description: "Welcome to the homepage of our awesome blog.",
};

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Product Store</h1>
      <p>This page has static metadata defined using Next.js App Router.</p>
      <p>
        <a href="/login">Login</a> to view products.
      </p>
    </div>
  );
}
