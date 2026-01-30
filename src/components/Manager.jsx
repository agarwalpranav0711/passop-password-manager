import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setpasswordarray] = useState([])
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordarray(JSON.parse(passwords));
    }
  }, []);




  const handleAdd = () => {
    alert("Password Added");
  };
  const Showpassword = () => {
    passwordRef.current.type = "text"

    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png"
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "icons/eyecross.png"

    }

  }
  const editPassword = (index) => {
    setForm(passwordarray[index]);
    setEditIndex(index);
  };

  const deletePassword = (index) => {
    const updatedPasswords = passwordarray.filter((_, i) => i !== index);
    setpasswordarray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    toast.success("Password deleted", {
      autoClose: 2000,
      transition: Bounce,
    });
  };

  const copyText = async (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    await navigator.clipboard.writeText(text);
  };
  const savePassword = () => {
    if(form.site.length > 3 && form.site.username > 3 && form.site.password > 3){
      
    }
    let updatedPasswords;

    if (editIndex !== null) {
      // UPDATE
      updatedPasswords = passwordarray.map((item, index) =>
        index === editIndex ? form : item
      );
      toast.success("Password updated", { autoClose: 2000 });
    } else {
      // ADD NEW
      updatedPasswords = [...passwordarray, form];
      toast.success("Password added", { autoClose: 2000 });
    }

    setpasswordarray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    setForm({ site: "", username: "", password: "" });
    setEditIndex(null);
  };

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (


    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className='relative '> {/* ✅ add min-h-screen */}

        {/* background stays same */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white 
                bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
                linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
                bg-[size:14px_24px]">

          <div className="absolute left-0 right-0 top-0 -z-10 m-auto 
                  h-[310px] w-[310px] rounded-full bg-slate-700 
                  opacity-20 blur-[100px]"></div>
        </div>

        {/* 👇 CARD */}
        <div className="mx-auto bg-gray-100 w-full sm:w-[90%] md:w-[75%] lg:w-[65%] 
                mt-6 sm:mt-10 p-4 sm:p-6 md:p-10 rounded-xl"> {/* ✅ add padding, rounded, shadow, margin-top */}

          <h1 className='text-4xl font-bold text-center'>
            <span className='text-green-700'>&lt;</span>
            Pass <span className='text-green-700'>OP/&gt;</span>
          </h1>

          {/* ✅ center + spacing */}
          <p className="text-center text-gray-600 mt-2 mb-6">
            Your own password manager
          </p>

          {/* FORM AREA */}
          <div className="flex flex-col gap-4">

            {/* ✅ styled input */}
            <input
              value={form.site}
              name='site'
              onChange={handlechange}
              type="text"
              placeholder="Enter website"
              className="p-2 rounded border border-gray-300"
            />

            <div className="flex gap-4">
              <input
                value={form.username}
                onChange={handlechange}
                name='username'
                type="text"
                placeholder="Username"
                className="p-2 rounded border border-gray-300 w-full"
              />
              <div className="relative">


                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handlechange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded border border-gray-300 w-full"

                />
                <span className='absolute right-0 items-center top-[1px] cursor-pointer' onClick={Showpassword}>
                  <img ref={ref} className='p-2' width={40} src="icons/eye.png" alt="eye" />
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                handleAdd();
                savePassword();
              }}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition font-medium mx-auto"
            >
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
                style={{ width: "22px", height: "22px", pointerEvents: "none" }}
              ></lord-icon>

              Add Password
            </button>
          </div>

        </div>
        <div className="passwords w-[80%] mx-auto mt-8">
          <h2 className='font-bold text-2xl p-1'>Your Passwords</h2>
          {passwordarray.length === 0 && <div> No passwords to show </div>}
          {passwordarray.length != 0 &&
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className='bg-green-700 text-white'>
                <tr>
                  <th className='w-[35%] py-2'>Site</th>
                  <th className='w-[25%] py-2'>Username</th>
                  <th className='w-[25%] py-2'>Password</th>
                  <th className='w-[15%] py-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-green-100 rounded-4xl'>
                {passwordarray.map((item, index) => {


                  return <tr>
                    <td className='py-2  text-center w-32  items-center justify-center'><a href={item.site} target='_blank'>{item.site}'</a><i className="fa-solid fa-copy cursor-pointer gap-1.5" onClick={() => copyText(item.site)}></i></td>
                    <td className='text-center w-32 items-center justify-center'>{item.username} <i className="fa-solid fa-copy cursor-pointer gap-1.5" onClick={() => copyText(item.username)}></i></td>
                    <td className='py-2  text-center w-32  items-center justify-center'> {item.password} <i className="fa-solid fa-copy cursor-pointer gap-1.5" onClick={() => copyText(item.password)}></i></td>
                    <td className="py-2">
                      <div className="flex items-center justify-center gap-4">

                        {/* EDIT */}
                        <i
                          className="fa-solid fa-pen cursor-pointer "
                          onClick={() => editPassword(index)}
                          title="Edit"
                        ></i>

                        {/* DELETE */}
                        <i
                          className="fa-solid fa-trash cursor-pointer "
                          onClick={() => deletePassword(index)}
                          title="Delete"
                        ></i>

                      </div>
                    </td>


                  </tr>
                })}
              </tbody>
            </table>}
        </div>
      </div>
    </>
  )
}

export default Manager