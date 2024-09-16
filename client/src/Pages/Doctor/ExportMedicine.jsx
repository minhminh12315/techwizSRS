import React, { useEffect } from "react";

const ExportMedicine = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/exportMedicine")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Có lỗi xảy ra:", error));
  }, []);

  return (
    <>
      <h1>Export Medicine</h1>
      
    </>
  );
};

export default ExportMedicine;
