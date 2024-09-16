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
    <>
      <h1>Export Medicine</h1>
      <table className="table table-bordered">
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
                <input
                  type="number"
                  value={exportedMedicineQuantity[index] || 0}
                  onChange={(e) => {
                    const newQuantity = [...exportedMedicineQuantity];
                    newQuantity[index] = e.target.value;
                    setExportedMedicineQuantity(newQuantity);
                  }}
                />
              </td>
              <td>
                <button onClick={() => handleExport(medicine, index)}>
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Exported Medicines</h2>
      {exportedMedicine.length > 0 ? (
        <table className="table table-bordered">
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
                  <button onClick={() => handleDecreaseQuantity(index)}>
                    -
                  </button>
                  {medicine.quantity}
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </td>
                <td>
                  <button onClick={() => handleRemoveMedicine(index)}>
                    Remove
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
      >
        Export
      </button>
    </>
  );
};

export default ExportMedicine;
