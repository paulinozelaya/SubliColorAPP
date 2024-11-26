// src/components/ToastComponent.js
import React, { forwardRef } from "react";
import { Toast } from "primereact/toast";

const ToastComponent = forwardRef((props, ref) => {
  return <Toast ref={ref} />;
});

export default ToastComponent;
