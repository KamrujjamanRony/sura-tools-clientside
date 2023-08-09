import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const product = {
        username: user.displayName,
        email: user.email,
        name: data.name,
        image: data.image,
        description: data.description,
        min_quantity: data.min_quantity,
        available_quantity: data.available_quantity,
        price: data.price,
    }
    // send to database 
    fetch('https://sura-tools-serverside.vercel.app/tool', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(product)
    })
    .then(res =>res.json())
    .then(inserted =>{
        if(inserted.insertedId){
            toast.success('Product added successfully')
            reset();
        }
        else{
            toast.error('Failed to add the Product');
        }
    })
  };

  return (
    <div className="w-1/4 mx-auto mb-5">
      <h2 className="text-2xl">Add a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={user.displayName}
            disabled
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            value={user.email}
            disabled
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            {...register("description")}
          >
          </textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Product image"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Product Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("min_quantity", {
              required: {
                value: true,
                message: "Minimum Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("available_quantity", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Unit Price</span>
          </label>
          <input
            type="text"
            placeholder="Unit Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Unit Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-primary w-full max-w-xs text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;