import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [studentId, setStudentId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {

    // Demo Credentials
    if (
      studentId === "2025CS101" &&
      password === "unitrack"
    ) {

      localStorage.setItem("isLoggedIn", "true")

      navigate("/")

    } else {

      setError("Invalid Student ID or Password")

    }

  }

  return (
    <main className="min-h-screen bg-[#070014] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-10 backdrop-blur-xl">

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          UniTrack Access
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-5">
          Student Login
        </h1>

        <p className="text-zinc-400 mt-5 leading-relaxed">
          Sign in using your university credentials.
        </p>

        {/* Inputs */}
        <div className="space-y-5 mt-10">

          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 mt-5 text-sm">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl py-4 font-semibold text-black"
        >
          Login
        </button>

        <button
          onClick={() => {
            localStorage.setItem("isLoggedIn", "true")
            navigate("/")
          }}
          className="w-full mt-3 border border-white/15 hover:bg-white/5 rounded-2xl py-4 font-semibold transition"
        >
          Try the demo
        </button>

        {/* Demo Credentials */}
        <div className="mt-8 bg-white/5 rounded-2xl p-5 text-sm text-zinc-400">

          <p>
            Demo Student ID: 2025CS101
          </p>

          <p className="mt-2">
            Password: unitrack
          </p>

        </div>

      </div>

    </main>
  )
}

export default Login