import pants from "@/data/pants";
// it will only work in production build
// export function generateStaticParams() {
//   return pants.map((pant) => ({
//     id: pant.id,
//   }));
// }

const SinglePage = ({ params }) => {
  const { id } = params;
  const displayPant = pants.find((item) => item.id === Number(id)); 
  return (
    <div>
      Pants
      <h2>{displayPant?.title}</h2>
      <p>{displayPant?.description}</p>
    </div>
  );
};

export default SinglePage;
