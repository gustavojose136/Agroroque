"use client"; 

import Swal from 'sweetalert2';
import React from 'react';

const SuccessAlert = () => {
  const showAlert = (title: string, msg: string) => {
    Swal.fire({
      title: title,
      text: msg,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4f46e5',
    });
  };

  return {showAlert};
};

export default SuccessAlert;
