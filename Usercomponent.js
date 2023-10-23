import Form from "./components/Form";

export default function Usercomponent() {
  // values given to the inputfield
  const fields = [
    { name: "firstname", label: "First name", type: "text" },
    { name: "lastname", label: "Last name", type: "text" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "city", label: "City", type: "text" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
      ],
    },
    {
      name: "material",
      label: "Material",
      type: "select",
      options: [
        { value: "unmarried", label: "Unmarried" },
        { value: "married", label: "Married" },
      ],
    },
  ];

  // .........STATIC DATAS GIVEN TO THE FORM
  const initialFormValues = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    gender: "male",
    material: "married",
  };

  // ..........Console the data
  const handleSubmit = (data, formNumber) => {
    console.log(`Form data${formNumber}:`, data);

    // Convert the data to a JSON string
    const dataString = JSON.stringify(data);

    // Store the data in local storage with a key that includes the formNumber
    localStorage.setItem(`formData${formNumber}`, dataString);
  };

  return (
    <>
      <div>
        <h1>THE MAIN PAGE </h1>
        <Form
          fields={fields}
          onSubmit={(data) => handleSubmit(data, 1)}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={(data) => handleSubmit(data, 2)}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={(data) => handleSubmit(data, 3)}
          initialFormValues={initialFormValues}
        />
        <Form
          fields={fields}
          onSubmit={(data) => handleSubmit(data, 4)}
          initialFormValues={initialFormValues}
        />
      </div>
    </>
  );
}
