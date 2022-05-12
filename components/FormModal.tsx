import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react';
import { send } from 'emailjs-com';

interface IFormInput {
    from_name: string;
    to_name: "rojb.jc@gmail.com";
    email: string;
    message: string;
}

interface Props {
    setModalOn: (on: boolean) => void;
    setChoice: (choice: boolean) => void
}

function FormModal({setModalOn, setChoice}: Props) {

    const [submitted, setSubmitted] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const { register, handleSubmit, formState: { errors },} = useForm<IFormInput>();


    const onClick = () => {
        setChoice(false)
        setModalOn(false)
        setEmailError(true)
    }

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        setDisabled(true) 
        try {
            await send(
                process.env.EMAILJS_SERVICE_ID!,
                process.env.EMAILJS_TEMPLATE_ID!,
                data,
                process.env.EMAILJS_PUBLIC_KEY!
            ).then(() => {
                console.log(data);
                setSubmitted(true);
            }).catch((err) => {
                console.log(err);
                setDisabled(false)
                setSubmitted(false);
            })
        } catch(e) {
            console.log(e);
            setDisabled(false)
            setEmailError(true)
            setSubmitted(true)
        }
        
    };

  return (
    <div className='fixed overflow-scroll inset-0 z-50'>
        <div className='relative w-screen h-screen'>
            
            <div className='flex relative pt-6 justify-center h-screen items-center'>
                <div className='absolute top-0 left-0 h-screen -z-10 w-screen opacity-80 bg-slate-400'/>

                {submitted ? (
                    emailError ? (
                        <div className='flex flex-col absolute pt-6 z-50 bg-slate-700 justify-center h-40 w-64 border-2 border-red-500 rounded-xl items-center'>
                            <p className='text-xs font-bold text-white text-center max-w-[160px] pb-6'>
                                There was an error :( Please try again!
                            </p>
                            <button onClick={onClick} className='bg-slate-400 text-sm font-bold border rounded-lg py-1 px-2 mb-3 text-yblack hover:bg-slate-800 hover:text-white'>Dismiss</button>
                        </div> 
                    ):
                    <div className='flex flex-col absolute pt-6 z-50 bg-slate-700 justify-center h-40 w-64 border-2 border-primary rounded-xl items-center'>
                        <p className='text-xs font-bold text-white text-center max-w-[160px] pb-6'>
                            Thank for your message! I'll get back to you as soon as possible. :)
                        </p>
                        <button onClick={onClick} className='bg-primary text-sm font-bold border rounded-lg py-1 px-2 mb-3 text-white hover:bg-secondary'>Dismiss</button>
                    </div> 
                ): 
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 max-w-2xl bg-white mx-auto mb-10 border-primary rounded-xl' >
                    <h3 className='text-sm text-secondary' >Have some comments or just want to say hi?</h3>
                    <h4 className='text-3xl font-bold' >Leave your message bellow!</h4>
                    <hr className='py-2 mt-2' />

                    <label className='block mb-5'>
                        <span className='text-slate-700 font-bold' >Name</span>
                        <input 
                            {...register("from_name", { required: true })}
                            className='shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none focus:ring ring-primary' placeholder='Your name' type="text" />
                    </label>
                    <label className='block mb-5'>
                        <span className='text-slate-700 font-bold' >Email</span>
                        <input 
                            {...register("email", { required: true })}
                            className='shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none focus:ring ring-primary' placeholder='your@email.com' type="email" />
                    </label>
                    <label className='block mb-1'>
                        <span className='text-slate-700 font-bold' >Message</span>
                        <textarea 
                            {...register("message", { required: true })}
                            className='shadow border rounded py-1 px-3 form-textarea mt-1 block w-full focus:outline-none focus:ring ring-primary' placeholder='Message' rows={8}/>
                    </label>

                    {/* Errors */}

                    <div className='flex flex-col p-5'>
                        {errors.from_name && (
                            <span className='text-red-500'>- The Name field is required.</span>
                        )}
                        {errors.email && (
                            <span className='text-red-500'>- The Name field is required.</span>
                        )}
                        {errors.message && (
                            <span className='text-red-500'>- The Name field is required.</span>
                        )}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <input disabled={disabled} type="submit" className='bg-primary hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer' />
                        <input disabled={disabled} type="button" value="Cancel" onClick={onClick} className='bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer' />
                    </div>
            
                 </form>
                }
                
                
            </div>
        </div>
        
        
    </div>
  )
}

export default FormModal