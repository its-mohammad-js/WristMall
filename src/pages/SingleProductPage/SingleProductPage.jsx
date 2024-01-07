import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();

  console.log(id);

  return <div className="h-screen bg-red-50">SingleProductPage</div>;
}

export default SingleProductPage;
