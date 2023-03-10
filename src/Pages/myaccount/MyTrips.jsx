import React, { useState } from 'react'
import Trips from './Trips';
import Header from '../../components/Header/index2';
import Footer from '../../components/footer/index';
import { Link } from 'react-router-dom';
import PastTrips from './PastTrips';

const MyTrips = () => {
  const [pastshown, setPastShown]= useState(false);
  const handlePastButton = () => {
    setPastShown(true);
  };
  const handleCurrentButton = ()=>{
    setPastShown(false);
  }
  return (
    <div>
        <Header/>
        <div className='container mx-auto my-10 min-h-[450px] mx-md:my-16 '>
          <div className=' flex lg:flex-row flex-col lg:mx-20'>
            <div className='lg:w-1/3 w-full px-4 lg:pr-0 lg:pl-24'>
                <div className='grid grid-cols-1 gap-y-0'>
               <Link to='/profile/myaccount?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Account</Link>

                <Link to='/profile/mytickets?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer active:border-b-8  active:border-endeavour  border-b-8 border-endeavour'>
                My Tickets</Link>
                
                <Link to='/profile/mypaymentmethods?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Payment Methods</Link>

                <Link to='/profile/myalerts?partner_code=CUSA' 
               className='font-bold text-2xl text-endeavour pb-3 pt-4 uppercase cursor-pointer  border-b border-mystic'>
                My Alerts</Link>
                </div>
            </div>
            <div className='lg:w-2/3 w-full px-4 lg:pl-8 lg:pr-24 mt-8 '>
              {pastshown === false ? <Trips handlePastButton={handlePastButton}/>:<PastTrips handleCurrentButton={handleCurrentButton}/>}
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MyTrips