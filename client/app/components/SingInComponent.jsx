'use client'
import { useState } from "react";
import ActiveLink from "@/app/components/ActiveLink";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "@/app/redux/user/userSlice";

const TIMEOUT_DURATION = 10000;

export default function signIn() {
  const [formData, setFormData] = useState({});
  const {loading, error } = useSelector((state) => state.user);
  const router = useRouter()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      clearTimeout(timeoutId);

      const data = await res.json();
      console.log(data);
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      router.push('/', { scroll: false })
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    
  };
     

    return( 
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">
      Sign In
    </h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
      <input type="email" placeholder="email"
      className="border p-3 rounded-lg" id="email" 
      onChange={handleChange}
      />
      <input type="password" placeholder="password"
      className="border p-3 rounded-lg" id="password"
      onChange={handleChange}
       />
      <button 
      disabled={loading}
      className="bg-slate-700
       text-white
        p-3 rounded-lg
         uppercase
          hover:opacity-95
          disabled:opacity-80
          "
          >
           {loading ? 'loading...' : 'Sign In'}
      </button>
    </form>
    <div className="flex gap-2 mt-5">
      <p> Crie uma Conta!</p>
      <ActiveLink href="/users/SignUp">
        <span className="text-blue-700">Sign up</span>
      </ActiveLink>
    </div>
    {error && <p className="text-red-500 mt-5">{error}</p>}
  </div>
  )
}