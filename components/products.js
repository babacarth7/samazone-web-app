import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const addToCarHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    toast.success("Product added to the cart");
    router.push("/cart");
  };

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
           src={`/images/${product.image}`}
          alt={product.name}
          className="rounded shadow object-cover h-64 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={addToCarHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
