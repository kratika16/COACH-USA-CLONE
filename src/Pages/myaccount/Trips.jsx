import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from 'lodash'

const Trips = ({handlePastButton}) => {
  const navigate = useNavigate();
  
    const { current } = useSelector((state) => state.current);
    console.log("current tickets", current);
  
  return (
    <div>
      <div className="grid grid-cols-2 mt-2">
        <button className="disabled:cursor-default bg-endeavour text-white text-sm md:font-bold cursor-pointer md:rounded-tl-3xl uppercase px-2 py-4 text-center">
          Current Tickets
        </button>
        <button
          className="disabled:cursor-default bg-linkwater text-endeavour text-sm md:font-bold cursor-pointer md:rounded-tr-3xl uppercase px-2 py-4 text-center"
          onClick={handlePastButton}
        >
          Past Tickets
        </button>
      </div>
      <div className="border-4 border-endeavour border-t-0">
        {_.map(current, (row, i) => {
          return( <div key={i}>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 border-b-2 border-linkwater'>
                    <div>
                        <span>{row.name}</span>
                        <div className='flex flex-col'>
                            <span className='text-red'>{row.tripsrem}</span>
                             <button className='disabled:cursor-default mt-2 text-base text-white max-w-max uppercase border rounded-full border-dodger-blue bg-dodger-blue px-4 py-0.5'>
                                VIEW TICKET
                             </button>
                         </div>   
                    </div>
                    <div className='flex md:text-right mx-md:space-y-2 space-y-1 flex-col'>
                       <span>{row.valid}</span>
                       <Link className='text-dodger-blue cursor-pointer mx-md:underline max-w-max md:self-end' href='#'>View Receipt</Link>
                       <button className='disabled:cursor-default text-dodger-blue mx-md:underline max-w-max md:self-end'>Buy Again</button>
                    </div>
                    </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Trips;
