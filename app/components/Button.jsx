"use client";
import { useRouter } from "next/navigation";

const Button = ({ children, path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };
  return (
    <button className="bg-red-500 m-4 px-3 py-1 rounded" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
