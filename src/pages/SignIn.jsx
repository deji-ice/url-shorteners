import { Link } from 'react-router-dom'
import google from '../Assets/google.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'

const SignIn = () => {
  return (
    <div className='bg-[#3e75db] flex justify-center items-center px-12 py-6 w-full min-h-screen'>
        <form action="submit" className='w-[25rem] h-auto bg-white flex flex-col justify-around items-center drop-shadow-lg rounded-2xl px-12 py-6'>
            <h1 className='text-center text-3xl font-bold'>Welcome</h1>
            <input type="text" placeholder='Username' className='bg-person bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 mt-12' />
            <div className='w-full'>
            <input type="text" placeholder='Password' className='bg-padlock bg-bottom-left bg-no-repeat placeholder:pl-8 text-md w-full border-b border-gray-500 mt-12' />
            <p className='flex justify-end mt-2'>Forgot password?</p>
            </div>

            {/* redirects to home page */}
            <Link to="/">
              <button className='px-12 py-2 rounded-full text-white text-md font-semibold bg-[#3e75db]  mt-[40px]'>Login</button>
            </Link>

            <p className='font-semibold mt-6'>or sign in using</p>
            <div className="flex justify-center items-center gap-4 mt-2">
                <img className='bg-white drop-shadow-lg p-2 rounded-full' src={google} alt="" />
                <img className='bg-[#236b8e] drop-shadow-lg p-2 rounded-full' src={facebook} alt="" />
                <img className='bg-[#42c0fb] drop-shadow-lg p-2 rounded-full' src={twitter} alt="" />
            </div>

            {/* redirects to the registration page */}
            <Link to="/registration">
                <button className='w-full px-12 py-2 rounded-3xl text-white text-md font-semibold bg-[#3e75db] mt-16'>Register</button>
            </Link>
        </form>
    </div>
  )
}

export default SignIn
