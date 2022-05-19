import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMailApi, setCurrentMail } from '../../redux/actions';
import Star from '../../images/star.svg';
import { Link, useLocation } from 'react-router-dom';

const MailBox = ( { mailData, fetchMails, setCurrentMail } ) => {
 
  const location = useLocation();
  const { searchResult } = mailData;

  useEffect(() => {
    fetchMails();
  }, [])

  return (
    <>
      <div className="ml-8 py-2 w-4/6 h-full overflow-y-auto cursor-pointer">
      {
        mailData.loading ? (<h2>Loading...</h2>) 
        : 
        (mailData.error ? (<h2>{mailData.error}</h2>) : 
        (<>
        <div>
          {
           searchResult && searchResult?.length !== 0 ? 
           searchResult?.map(mail => (
            <div onClick={() => setCurrentMail(mail)} key={mail.id}>
               <Link to={`/mail/${mail.id}`} >
                 <div className="px-5 h-24 flex py-2  border-b-2">
                  <div className="w-[54px] flex justify-center items-center text-white mt-1 h-[54px] rounded-full bg-[#166E47]">
                    {mail.subject.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="ml-8 w-[650px] mt-1">
                    <h3>{mail.subject}</h3>
                    <p className="bold">{mail.body.substring(0, 50)}</p>
                    <p className="mail-para">{mail.body.substring(0, 80)}...</p>
                  </div>
                  <div className="tag-line mt-2">{mail.tag}</div>
                  <div className="ml-24">
                    <p className="time-text mt-2">3:17 PM</p>
                    <img 
                      className="w-5 ml-7 cursor-pointer text-right mt-5" src={Star} alt="starred" 
                    />
                  </div>
                 </div>
                </Link>
            </div>
            )) :
           mailData?.mail?.map(mail => location.pathname.slice(1) === mail.tag && (
            <div onClick={() => setCurrentMail(mail)} key={mail.id}>
               <Link to={`/mail/${mail.id}`} >
                 <div className="px-5 h-24 flex py-2  border-b-2">
                  <div className="w-[54px] flex justify-center items-center text-white mt-1 h-[54px] rounded-full bg-[#166E47]">
                    {mail.subject.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="ml-8 w-[650px] mt-1">
                    <h3>{mail.subject}</h3>
                    <p className="bold">{mail.body.substring(0, 50)}</p>
                    <p className="mail-para">{mail.body.substring(0, 80)}...</p>
                  </div>
                  <div className="tag-line mt-2">{mail.tag}</div>
                  <div className="ml-24">
                    <p className="time-text mt-2">3:17 PM</p>
                    <img 
                      className="w-5 ml-7 cursor-pointer text-right mt-5" src={Star} alt="starred" 
                    />
                  </div>
                 </div>
                </Link>
            </div>
            ))
          }
        </div>
        </>))
      }
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
     mailData: state.mail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchMails: () => dispatch(fetchMailApi()),
     setCurrentMail: (mail) => dispatch(setCurrentMail(mail)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MailBox);
// export default MailBox;