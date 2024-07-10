import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-2xl">
            
            Welcome to all of you 
            <span className="text-pink-500"> for great learning!!</span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            exercitationem maiores, itaque tempora modi doloribus, perspiciatis
            natus aperiam deserunt iure nihil blanditiis earum iste illum
            praesentium recusandae, corporis inventore nobis unde at pariatur?
            Quam, illo sapiente inventore hic impedit fuga voluptate laboriosam
            perferendis sit iste.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-black mt-5">Back</button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 ">
          {
            list.map((item) =>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
