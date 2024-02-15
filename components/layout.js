import Head from "next/head";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import DropDownLink from "./dropdown";
import Cookies from "js-cookie";

function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title + " - App E-Commerce" : "App E-Commerce"}</title>
        <meta name="description" content="Application Web E-Commerce" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              samazone
            </Link>
            <div className="flex items-center z-10">
              <Link href="/cart" className="p-2 text-blue-500">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-500">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg">
                    <Menu.Item>
                      <DropDownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropDownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropDownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropDownLink>
                      </Menu.Item>
                    )}

                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-2 text-blue-500">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright &copy; 2024</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
