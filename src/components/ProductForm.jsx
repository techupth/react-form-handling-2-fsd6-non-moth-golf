import { useState } from "react";

function ProductForm() {
  const [inputName, getNameText] = useState("");
  const [inputImage, getImage] = useState("");
  const [inputPrice, getPrice] = useState("");
  const [inputDescription, getDescription] = useState("");

  const handleSubmit = () => {
    const data = {
      name: inputName,
      price: inputPrice,
      image: inputImage,
      description: inputDescription,
    };
    alert(JSON.stringify(data));
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={inputName}
            onChange={(event) => {
              getNameText(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={inputImage}
            onChange={(event) => {
              getImage(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={inputPrice}
            onChange={(event) => {
              getPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={inputDescription}
            onChange={(event) => {
              getDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
