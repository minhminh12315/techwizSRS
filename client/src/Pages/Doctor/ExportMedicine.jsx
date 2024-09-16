import React, { useEffect, useState } from "react";
import axios from "axios";

const ExportMedicine = () => {
  const [medicineList, setMedicineList] = useState([]); // Danh sách thuốc từ API
  const [exportedMedicine, setExportedMedicine] = useState([]); // Danh sách thuốc được export
  const [exportedMedicineQuantity, setExportedMedicineQuantity] = useState([]); // Số lượng thuốc

  // Fetch danh sách thuốc từ API
  useEffect(() => {
    fetch("http://localhost:8000/api/medicines")
      .then((response) => response.json())
      .then((data) => {
        console.log("thuoc:", data);
        setMedicineList(data.data);
      })
      .catch((error) => console.error("Có lỗi xảy ra:", error));
  }, []);

  // Xử lý thêm thuốc vào danh sách xuất
  const handleExport = (medicine, index) => {
    const quantity = exportedMedicineQuantity[index] || 0;

    if (quantity > 0) {
      const existingMedicineIndex = exportedMedicine.findIndex(
        (item) => item.id === medicine.id
      );

      if (existingMedicineIndex !== -1) {
        // Thuốc đã có trong danh sách, tăng số lượng
        const updatedMedicines = [...exportedMedicine];
        updatedMedicines[existingMedicineIndex].quantity += parseInt(
          quantity,
          10
        );
        setExportedMedicine(updatedMedicines);
        console.log(
          "Updated medicine quantity:",
          updatedMedicines[existingMedicineIndex]
        );
      } else {
        // Thuốc chưa có trong danh sách, thêm vào
        const newMedicine = {
          ...medicine,
          quantity: parseInt(quantity, 10),
        };
        setExportedMedicine([...exportedMedicine, newMedicine]);
        console.log("Added new medicine to export list:", newMedicine);
      }
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  const handleIncreaseQuantity = (index) => {
    const updatedMedicines = [...exportedMedicine];
    updatedMedicines[index].quantity += 1;
    setExportedMedicine(updatedMedicines);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedMedicines = [...exportedMedicine];
    if (updatedMedicines[index].quantity > 1) {
      updatedMedicines[index].quantity -= 1;
      setExportedMedicine(updatedMedicines);
    }
  };

  const handleRemoveMedicine = (index) => {
    const updatedMedicines = exportedMedicine.filter((_, i) => i !== index);
    setExportedMedicine(updatedMedicines);
  };

  const handleSubmitExport = () => {
    if (exportedMedicine.length === 0) {
      alert("No medicines to export.");
      return;
    }

    axios.post("http://localhost:8000/api/export-medicine", {
      medicines: exportedMedicine,
    })
      .then((response) => {
        console.log("Export successful:", response.data);
        alert("Medicines exported successfully!");
        setExportedMedicine([]);
      })
      .catch((error) => console.error("Error exporting medicines:", error));
  };

  return (
    <div className="container mt-5 mb-5">
      <h1>Export Medicine</h1>
      <div className="table-responsive">
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicineList.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.name}</td>
                <td>
                  <div className="quantity_container">
                    <button
                      className="btn_minus"
                      onClick={() => {
                        const newQuantity = [...exportedMedicineQuantity];
                        // Nếu chưa có số lượng cho index hiện tại, đặt mặc định là 0
                        newQuantity[index] = (newQuantity[index] || 0) - 1;
                        newQuantity[index] = Math.max(0, newQuantity[index]); // Không cho phép số lượng < 0
                        setExportedMedicineQuantity(newQuantity);
                      }}
                    >
                      -
                    </button>
                    {exportedMedicineQuantity[index] || 0} {/* Hiển thị số lượng hiện tại hoặc 0 nếu chưa có */}
                    <button
                      className="btn_plus"
                      onClick={() => {
                        const newQuantity = [...exportedMedicineQuantity];
                        newQuantity[index] = (newQuantity[index] || 0) + 1;
                        setExportedMedicineQuantity(newQuantity);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td>
                  <button onClick={() => handleExport(medicine, index)} className="btn_secondary_custom">
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1>Exported Medicines</h1>
      {exportedMedicine.length > 0 ? (
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exportedMedicine.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.name}</td>
                <td className="d-flex justify-content-between">
                  <div className="quantity_container">
                    <button className="btn_minus" onClick={() => handleDecreaseQuantity(index)}>
                      -
                    </button>
                    {medicine.quantity}
                    <button className="btn_plus" onClick={() => handleIncreaseQuantity(index)}>
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button className="btn_delete" onClick={() => handleRemoveMedicine(index)}>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No medicines added yet.</p>
      )}

      {/* Nút Export */}
      <button
        onClick={() => {
          console.log("Exporting Medicines:", exportedMedicine);
          // Gửi dữ liệu tới API hoặc xử lý lưu trữ tại đây
        }}
        className="btn_primary_custom"
      >
        Export
      </button>
    </div>
  );
};

export default ExportMedicine;
