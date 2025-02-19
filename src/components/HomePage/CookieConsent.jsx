import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Slide } from 'react-reveal';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookie= localStorage.getItem("cookieConsent")
    if(cookie == "accepted"){
      setIsVisible(false)
    }

  }, [])
  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', 'accepted');
  };

  const handleReject = () => {
    setIsVisible(false);
    localStorage.setItem('cookieConsent', 'rejected');
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Slide bottom duration={3000}>
        <div
          className="fixed bottom-0 left-0 w-full bg-prime bg-opacity-90 text-white py-4 pt-10 px-8 shadow-lg"

        >
          <div className='flex justify-end items-end '>
            <AiOutlineCloseCircle
              className="absolute top-6 right-10 text-3xl text-white cursor-pointer"
              onClick={handleCancel}
            />
          </div>
          <div className="relative flex items-center justify-between mt-10">

            <div className="flex items-center space-x-4">
              <p className="text-lg">
                We use cookies to enhance your experience on our website. Cookies help us
                improve site functionality, analyze traffic, and ensure a personalized experience.
                By accepting, you consent to our use of cookies for these purposes. You can manage
                your preferences or withdraw your consent at any time through our settings.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAccept}
                className="bg-white  px-4 py-2 rounded-lg text-prime border-2 border-prime  hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="bg-white  px-4 py-2 rounded-lg text-prime border-2 border-prime  hover:bg-red-600"
              >
                Reject
              </button>
              {/* <button
                onClick={handleCancel}
                className="bg-white  px-4 py-2 rounded-lg text-prime border-2 border-prime  hover:bg-gray-500"
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </Slide>
    )
  );
};

export default CookieConsent;
