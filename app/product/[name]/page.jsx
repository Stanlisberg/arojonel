import Image from "next/image";

const getDetails = async (name) => {
  //-----imitate delay
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://localhost:3002/product/" + name, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

async function ProductDetails({ params }) {
  const product = await getDetails(params.name);

  return (
    <main className="border border-black pt-20 px-28 flex justify-center items-center">
      <div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5 w-full h-full">
            <Image
              alt="search"
              height="20"
              src={product.path}
              className="w-[100%] object-contain h-full cursor-pointer"
              width="500"
            />
          </div>
          <div className="card col-span-7 grid gap-4 font-[500]">
            <p className="text-2xl font-bold">{product.name}</p>
            <p className="">
              Prize:{" "}
              <span className="font-normal text-sm text-[#6A6A6A]">
                {product.price}
              </span>
            </p>
            <p className="">
              Dimension:{" "}
              <span className="font-normal text-sm text-[#6A6A6A]">
                {product.dimension}
              </span>
            </p>
            <p className="">
              Delivery Timeline:{" "}
              <span className="font-normal text-sm text-[#6A6A6A]">
                {product.delivery}
              </span>
            </p>
            <p className="">
              Quantity:{" "}
              <span className="font-normal text-sm text-[#6A6A6A]">
                {product.quantity}
              </span>
            </p>
          </div>
        </div>
        <div className="font-bold mt-10 text-md">
          Description:{" "}
          <span className="font-normal text-sm text-[#6A6A6A]">
            {product.desc}
          </span>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
