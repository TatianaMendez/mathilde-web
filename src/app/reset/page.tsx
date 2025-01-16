"use client"
import React from 'react';
import VisualStart from '../components/organisms/visualStart';
import '../styles/styleAtoms.css';

const ResetPass: React.FC = () => {


  return (
    <div className="min-h-screen flex w-full">
      <div className='w-2/4 border-container'>
        <VisualStart />
      </div>
      <div className="w-2/4">
        <form className="w-9/12 px-10 bg-white mt-28 mx-auto rounded-lg">
          <p className="text-2xl text-center mb-6">Hemos enviado un código OTP al correo electrónico registrado para activar tu cuenta.</p>
          
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
