import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Samazone" : "Samazone"}</title>
        <meta name="description" content="Ecommerce Website" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold hover:text-blue-500">
              samazone
            </Link>

            <div>
              <Link href="/" className="p-2 text-blue-500">
                Panier
              </Link>
              <Link href="/" className="p-2 text-blue-500">
                Se connecter
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright &copy; 2024 Samazone</p>
        </footer>
      </div>
    </>
  );
}
