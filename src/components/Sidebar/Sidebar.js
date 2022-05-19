import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Inbox from '../../images/inbox.svg';
import Draft from '../../images/draft.svg';
import Spam from '../../images/spam.svg';
import Trash from '../../images/trash.svg';
import Sent from '../../images/send.svg';
import { setSearchResult } from "../../redux/actions"
import { connect } from 'react-redux';

const Sidebar = ( { setSearchResult } ) => {

  const location = useLocation();


  return (
    <div className="w-[450px] h-full flex justify-center items-start bg-[#135236]">
       <div className="w-[300px] mt-20 shadow-md py-6 rounded-lg bg-[#166E47]">
         <Link to="/inbox" onClick={() => setSearchResult([])} className={`w-full h-14 flex justify-start items-center cursor-pointer bg-[#166e465d] hover:bg-[#0a5c38d3] ease-out duration-300 ${location.pathname === "/inbox" && 'bg-[#0a5c38d3]'}`}>
           <img className="w-5 ml-12" src={Inbox} alt="inbox" />
           <p className="text-white ml-8 tracking-wide">Inbox</p>
         </Link>
         <Link to="/draft" onClick={() => setSearchResult([])} className={`w-full h-14 mt-5 flex justify-start items-center cursor-pointer 
         bg-[#166E47] hover:bg-[#0a5c38d3] ease-out duration-300 ${location.pathname === "/draft" && 'bg-[#0a5c38d3]'}`}>
           <img className="w-5 ml-12" src={Draft} alt="draft" />
           <p className="text-white ml-8 tracking-wide">Draft</p>
         </Link>
         <Link to="/spam" onClick={() => setSearchResult([])} className={`w-full h-14 mt-5 flex justify-start items-center cursor-pointer 
         bg-[#166E47] hover:bg-[#0a5c38d3] ease-out duration-300 ${location.pathname === "/spam" && 'bg-[#0a5c38d3]'}`}>
           <img className="w-5 ml-12" src={Spam} alt="spam" />
           <p className="text-white ml-8 tracking-wide">Spam</p>
         </Link>
         <Link to="/trash" onClick={() => setSearchResult([])} className={`w-full h-14 mt-5 flex justify-start items-center cursor-pointer 
         bg-[#166E47] hover:bg-[#0a5c38d3] ease-out duration-300 ${location.pathname === "/trash" && 'bg-[#0a5c38d3]'}`}>
           <img className="w-5 ml-12" src={Trash} alt="trash" />
           <p className="text-white ml-8 tracking-wide">Trash</p>
         </Link>
         <div className="w-full h-14 mt-5 flex justify-start items-center cursor-pointer 
         bg-[#166E47] hover:bg-[#0a5c38d3] ease-out duration-300">
           <img className="w-5 ml-12" src={Sent} alt="sent" />
           <p className="text-white ml-8 tracking-wide">Sent</p>
         </div>
         
       </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
     mailData: state.mail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: (result) => dispatch(setSearchResult(result)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);