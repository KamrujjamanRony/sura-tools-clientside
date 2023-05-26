import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    const testimonial = {
        name: data.name,
        image: data.image,
        email: user.email,
        review: data.review,
        ratting: data.ratting,
    }
    // send to database 
    fetch('https://sura-tools-serverside-kamrujjamanrony.vercel.app/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(testimonial)
    })
    .then(res =>res.json())
    .then(inserted =>{
        if(inserted.insertedId){
            toast.success('Review added successfully')
            reset();
        }
        else{
            toast.error('Failed to add the Review');
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
            placeholder="Enter Your Name"
            {...register("name")}
          />
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
            <span className="label-text">Review</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Enter Review"
            {...register("review")}
          >
          </textarea>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ratting</span>
          </label>
          <input
            type="text"
            placeholder="Enter ratting 1-5"
            className="input input-bordered w-full max-w-xs"
            {...register("ratting", {
              required: {
                value: true,
                message: "Ratting is Required",
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
          value="Add A Review"
        />
      </form>
    </div>
  );
};

export default AddReview;