import shirt from "@/data/shirts";

const SinglePage = ({ params }) => {
  const { id } = params;
  const displayShirt = shirt.find((item) => item.id === Number(id));
  return (
    <div>
      <h2>{displayShirt.title}</h2>
      <p>{displayShirt.description}</p>
    </div>
  );
};

export default SinglePage;
