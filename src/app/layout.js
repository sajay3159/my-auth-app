import Link from "next/link";
import { isLoggedIn } from "./lib/auth";

export default async function RootLayout({ children }) {
  const loggedIn = await isLoggedIn();

  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#f0f0f0" }}>
          <h1> Product Store</h1>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            {loggedIn ? (
              <form action="/api/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            padding: "1rem",
            background: "#f0f0f0",
            textAlign: "center",
          }}
        >
          <p>© 2025 My Product Store — All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
