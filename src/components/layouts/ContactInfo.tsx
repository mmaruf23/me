import React from 'react';

const ContactInfo = () => {
  return (
    <div className="md:block hidden">
      {/* KIRI */}
      <div className="absolute bottom-0 left-20 flex flex-col items-center gap-4 h-80 w-10 text-white pt-2">
        <div>
          <div>FB</div>
          <div>IG</div>
          <div>GH</div>
        </div>
        <div className="grow outline-1"></div>
      </div>

      {/* KANAN */}
      <div className="absolute bottom-0 right-20 flex items-center gap-4 w-80 h-10 -translate-x-10 rotate-90 origin-bottom-right  text-white pl-2">
        <div>email@email.com</div>
        <div className="grow outline-1"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
