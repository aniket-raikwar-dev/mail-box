import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchResult } from '../../redux/actions'
import MailIcon from "../../images/mail.svg";
import SearchBar from "../../images/search.svg"

const Navbar = ({mailData, setSearchResult}) => {

  const [searchInput, setInputSearch] = useState("");
  const { mail } = mailData;

  useEffect(() => {
    let searchResult = mail.filter((item) =>
    item.subject.includes(searchInput)
  );
  setSearchResult(searchResult);
  }, [searchInput])



  return (
    <div className=" h-[75px] flex bg-[#166E47]">
      <div className="ml-20 w-40 h-full flex items-center">
         <img className="w-[24px] cursor-pointer" src={MailIcon} alt="mail-icon" />
         <h3 className="text-white text-xl ml-4 cursor-pointer">Mail Box</h3>
      </div>
      <div className="ml-48 w-[700px] h-full flex justify-center items-center">
         <div className="w-4/5 h-9 rounded-md bg-[#135236] flex items-center">
            <img className="w-[18px] ml-4" src={SearchBar} alt="search" />
            <input 
               className="input-box" 
               type="text" 
               placeholder="Search the mails by name, tags" 
               value={searchInput}
               onChange={e => setInputSearch(e.target.value)}
            />
         </div>
      </div>
      <div className="h-full ml-64 flex justify-center items-center">
        <div className="w-11 h-11 cursor-pointer flex justify-center items-center rounded-full 
        bg-[#135236]">
          <p className="text-white">AR</p>
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

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);