import { useEffect, useState } from "react";
import "../global.css";

function CMS() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState(null);

  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://mywoods-api.onrender.com/api/woods",
        {
          method: "GET",
        },
      );

      const result = await response.json();

      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const callPOSTAPI = async () => {
    try {
      if (!name.trim() || !description.trim()) {
        alert("Please enter both a name and description.");
        return;
      }

      const raw = {
        name: name.trim(),
        type: "hardwood",
        origin: "USA",
        color: "Light Red",
        density: 770,
        pricePerUnit: 45.5,
        description: description.trim(),
        available: true,
      };

      const response = await fetch(
        "https://mywoods-api.onrender.com/api/woods",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(raw),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error!Status:${response.status}`);
      }

      const result = await response.json();

      console.log(result);

      setName("");
      setDescription("");
      await callAPI();
      handleClose();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div className="cms-page">
        <div className="cms-card">
          <div className="cms-toolbar">
            <div>
              <p className="cms-eyebrow">Content Management</p>
              <h1>CMS</h1>
              <p className="cms-subtitle">
                Manage your wood listings and details.
              </p>
            </div>
            <button className="refresh-btn" onClick={handleShow}>
              Add Woods
            </button>
          </div>

          <div className="table-container">
            <table className="custom-table" border="1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Color</th>
                  <th style={{ textAlign: "center" }}>Density</th>
                  <th>Origin</th>
                  <th>PricePerUnit</th>

                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <span className="color-badge">{item.color}</span>
                    </td>

                    <td>{item.density}</td>

                    <td>{item.origin}</td>
                    <td>{item.pricePerUnit}</td>

                    {/* <td>
                                <div className="color-cell">
                                    <span className="color-dot" style={{backgroundColor:item?.data?.color||"#ccc"}}>
                                        
                                    </span>
                                    {
                                        item?.data?.color||"N/A"
                                    }
                                </div>
                            </td> */}
                    <td className="action-buttons">
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {show ? (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Woods Details</h3>
              <button className="modal-close" onClick={handleClose}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <label>Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />

              <label>Description</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button className="delete-btn" onClick={handleClose}>
                Close
              </button>
              <button className="refresh-btn" onClick={callPOSTAPI}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CMS;
