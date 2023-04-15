import Image from "next/image";
import Img from "../../public/1.jpg";
// but problem is that placeholder="blur" is not working with dynamic
//   image. we have to use in static
function PetsPage() {
  return (
    <div>
      <Image
        src={Img}
        placeholder="blur"
        blurDataURL=""
        alt="pet"
        width="280"
        height="420"
      />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
