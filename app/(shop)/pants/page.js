import pants from "@/data/pants";
import Link from "next/link";
import React from "react";

const PantsPage = () => {
  return (
    <div>
      {pants.map((item) => (
        <Link key={item.id} href={`/pants/${item.id}`}>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default PantsPage;
