import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(30)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLInputElement).focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const enteredOtp = otp.join('')
    // Replace this with your actual OTP verification logic
    if (enteredOtp === '123456') {
      setSuccess(true)
      setError('')
      // Redirect to the blog homepage or dashboard after successful verification
      setTimeout(() => router('/blog'), 2000)
    } else {
      setError('Invalid OTP. Please try again.')
    }
  }

  const resendOTP = () => {
    // Implement your OTP resend logic here
    setTimer(30)
    setError('')
    console.log('Resending OTP...')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verify Your OTP</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter the 6-digit code sent to your email
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && (
            <p className="text-green-500 text-center">OTP verified successfully! Redirecting...</p>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Verify OTP
            </button>
          </div>
        </form>
        <div className="text-center">
          {timer > 0 ? (
            <p className="text-sm text-gray-600">Resend OTP in {timer} seconds</p>
          ) : (
            <button
              onClick={resendOTP}
              className="text-sm text-black hover:underline focus:outline-none"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

