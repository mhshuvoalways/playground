import { useRouter } from "next/router";

const Params = () => {
  const router = useRouter();
  console.log(router.query);
  const { params = []} = router.query;
  if (params.length === 1) {
    return <h1>Logic for 1</h1>;
  } else if (params.length === 2) {
    return <h1>Logic for 2</h1>;
  }
  return <h1>logic for other</h1>; //3000/docs
};

export default Params;


// catch-all routes