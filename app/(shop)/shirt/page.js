import shirt from "@/data/shirts";
import Link from "next/link";

const page = () => {
  return (
    <div>
      Shorts...
      {shirt.map((item) => (
        <Link href={`/shirt/${item.id}`} key={item.id}>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default page;
