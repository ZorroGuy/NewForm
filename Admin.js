import React, { useEffect, useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const formNumbers = Object.keys(localStorage)
      .filter((key) => key.startsWith("formData"))
      .map((key) => parseInt(key.replace("formData", ""), 10));

    const storedData = formNumbers.map((formNumber) => {
      const data = JSON.parse(localStorage.getItem(`formData${formNumber}`));
      if (data) {
        return { formNumber, data };
      }
      return null;
    });

    setFormData(storedData.filter((entry) => entry !== null));
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {formData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Form Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Gender</th>
              <th>Material</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((entry) => (
              <tr key={entry.formNumber}>
                <td>{entry.formNumber}</td>
                <td>{entry.data.firstname}</td>
                <td>{entry.data.lastname}</td>
                <td>{entry.data.email}</td>
                <td>{entry.data.city}</td>
                <td>{entry.data.gender}</td>
                <td>{entry.data.material}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No form data available in local storage.</p>
      )}
    </div>
  );
}
