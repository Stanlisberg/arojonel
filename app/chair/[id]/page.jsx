import { GiChariot } from "react-icons/gi";

const getDetails = async (id) => {
    //-----imitate delay
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  
    const res = await fetch("http://localhost:3003/chair/" + id, {
      next: {
        revalidate: 60,
      },
    });
  
  
    return res.json();
  };
  
  async function ChairDetails({ params }) {
    const chair = await getDetails(params.id);
  
    return (
      <main className='mt-20'>
       <div  className='flex justify-center items-center'>
        <div className="card">
          <h3>{chair.desc}</h3>
          <h4>{chair.id}</h4>
        </div>
        </div>
      </main>
    );
  }
  
  export default ChairDetails;
  