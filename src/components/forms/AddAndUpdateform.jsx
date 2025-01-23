import React, { useContext, useState } from "react";
import MyContext from "../../Context/data/MyContext";

function AddAndUpdateForm(props) {
  const context = useContext(MyContext);
  const { products, setProducts } = context;
  const [imagePreview, setImagePreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProducts({ ...products, imageUrl: reader.result });
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <h1 className="text-center text-white text-xl mb-4 font-bold">
          {props.type}
        </h1>
        <div>
          <input
            type="text"
            onChange={(e) => setProducts({ ...products, title: e.target.value })}
            name="title"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product title"
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            onChange={(e) => setProducts({ ...products, price: e.target.value })}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product price"
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover mx-auto rounded-lg"
            />
          </div>
        )}
        <div>
          <input
            type="text"
            name="category"
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product category"
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            name="description"
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product description"
          ></textarea>
        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={props.functiontype}
            className="bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAndUpdateForm;

