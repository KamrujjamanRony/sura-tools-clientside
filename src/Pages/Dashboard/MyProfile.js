import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from "../Shared/Loading";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {
      data: users,
      isLoading,
    } = useQuery("users", () =>
      fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }
    const updateUserInfo = (event) =>{
      event.preventDefault();
      const username = event.target.username.value;
      const email = event.target.email.value;
      const address = event.target.address.value;
      const phone = event.target.phone.value;
      const education = event.target.education.value;
      const linkedin = event.target.linkedin.value;
      const currentUser = users.find(user => user.email === email);
      const updatedUser = {
        'username': username,
        'email': email,
        'address': address,
        'phone': phone,
        'education': education,
        'linkedin': linkedin,
      }
      //send data to the server
      const url = `http://localhost:5000/users/${currentUser.email}`;
      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedUser)
      })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            toast('Your Profile Update Successfully!!!');
          })
    }
    return (
        <div className='w-1/3 mx-auto'>
            <form onSubmit={updateUserInfo} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                value={user.displayName}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={user.email}
                disabled
              />
            </div>
          </div>
          

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone or Telephone Number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                name="address"
                type="text"
                placeholder="Enter you address"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="education"
              >
                Education
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="education"
                name="education"
                type="text"
                placeholder="Enter you education"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="linkdin"
              >
                Linkedin Profile
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="linkedin"
                name="linkedin"
                type="text"
                placeholder="Enter your Linkedin Profile"
              />
            </div>
          </div>

          <div className="w-full">
            <input
              type="submit"
              value="Update"
              className="btn btn-primary my-5 w-full"
            />
          </div>
        </form>
        </div>
    );
    
};

export default MyProfile;