import React from 'react';
import { fetchMailApi } from '../../redux/actions';
import { connect } from 'react-redux';


const OpenMail = ({ mailData, fetchMails }) => {

  const { currentMail } = mailData;

  return (
    <div className="ml-8 py-8 px-8 w-4/6 h-full overflow-y-auto cursor-pointer">
      <div className="flex">
        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-black ">
          <p className="text-white text-2xl tracking-wider uppercase">{currentMail.subject.substring(0, 2)}</p>
        </div>
        <div className="ml-8 w-[550px]">
          <p className="text-xl">{currentMail.subject}</p>
          <div className="tag-line-2 mt-3">spam</div>
        </div>
        <div className="mt-1 ml-[180px]">
          <p className="time-text-2">03:17 PM</p>
        </div>
      </div>
      <div className="mt-12 ml-2">
        <p className="mail-text">{currentMail.body}</p>
      </div>
      <div className="mt-12 ml-2 flex w-[350px]">
        <p className="mail-text">Mail ID: {currentMail.id}</p>
        <p className="mail-text">User ID: {currentMail.userId}</p>
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
     fetchMails: () => dispatch(fetchMailApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (OpenMail)