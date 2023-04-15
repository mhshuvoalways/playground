import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="/">NextAuth</Link>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </li>
        {session ? (
          <li>
            <button onClick={() => signOut()}>Sign out</button>
          </li>
        ) : (
          <li>
            <button onClick={() => signIn("github")}>Sign in</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
