import { Link } from 'react-router-dom'
import illustration from '../Assets/3d-business-man-studying-online.png'

const Register = () => {
  return (
    <div className='bg-[#3e75db] flex justify-between items-center w-full min-h-screen'>
            <form action="submit" className='w-[50%] h-screen bg-white flex flex-col items-start drop-shadow-lg px-12 py-6'>
                <h1 className='text-center text-3xl font-bold'>Welcome</h1>
                <input type="text" placeholder='Full Name' className='bg-person bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 outline-none mt-12 focus:bg-none' />
                <input type="text" placeholder='Email' className='bg-email bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 outline-none mt-12' />
                <input type="text" placeholder='Username' className='bg-person bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 outline-none mt-12' />
                <input type="text" placeholder='Password' className='bg-padlock bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 outline-none mt-12' />
                <input type="text" placeholder='Re-enter your password' className='bg-padlock bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 outline-none mt-12' />
                <div className='flex justify-start items-center gap-4 mt-4'> 
                    <input type="checkbox" />
                    <p>I agree to the <span className='font-semibold'>Terms of Service</span></p>
                </div>

                {/* redirects to home page */}
                <Link to="/">
                    <button className='px-12 py-2 rounded-full text-white text-md font-semibold bg-[#3e75db]  mt-[40px]'>Register</button>
                </Link>
                
            </form>
        <div className='w-[50%] h-screen flex justify-center items-center'>
            <img src={illustration} alt="" />
        </div>
    </div>
  )
}

export default Register