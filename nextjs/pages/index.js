import Link from "next/link";
import Blog from "./blog";

const index = () => {
  return (
    <div>
      <Blog />
      <Link href="/blogs">I am blog website</Link>
    </div>
  );
};

export default index;
