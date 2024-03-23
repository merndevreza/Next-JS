"use client";

import { useSearchParams } from "next/navigation";

const SortProducts = () => {
  const searchParams = useSearchParams(); 
  const handleSorting=(sortOrder)=>{
   const params=new URLSearchParams(searchParams.toString())
   params.set("sort",sortOrder)
   window.history.pushState(null,"",`?${params.toString()}`)
  }
  return (
    <div>
      <button onClick={()=>handleSorting("asc")}>Sort Ascending</button>
      <button onClick={()=>handleSorting("dsc")}>Sort Descending</button>
    </div>
  );
};

export default SortProducts;
