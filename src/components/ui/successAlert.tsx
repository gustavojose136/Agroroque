"use client";

import Swal from "sweetalert2";
import React from "react";

export const showSuccessAlert = (title: string, msg: string) => {
  Swal.fire({
    title: title,
    html: msg,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#4f46e5",
  });
};

export const showErrorAlert = (title: string, msg: string) => {
  Swal.fire({
    title: title,
    html: msg,
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "#ef4444",
  });
};
