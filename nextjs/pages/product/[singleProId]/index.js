import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const productId = router.query.singleProId;
  
  const placeHandler = () => {
    router.push("/");
  };

  return (
    <>
      <h1>{productId}</h1>
      <button onClick={placeHandler}>Order</button>
    </>
  );
};

export default ProductId;

// dynamic routes
