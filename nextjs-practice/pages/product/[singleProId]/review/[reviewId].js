import { useRouter } from "next/router";

const ReviewId = () => {
  const router = useRouter();
  const { singleProId, reviewId } = router.query;
  return <h1>{`${singleProId} for ${reviewId}`}</h1>;
};

export default ReviewId;

// dynamic routes