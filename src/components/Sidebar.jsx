import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl p-8 flex flex-col">

      <h1 className="text-4xl font-bold">
        UniTrack
      </h1>

      <p className="text-zinc-500 mt-3 text-sm">
        Academic productivity dashboard
      </p>

      <nav className="mt-14 flex flex-col gap-3">

        <Link
          to="/"
          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
        >
          Dashboard
        </Link>

        <Link
          to="/attendance"
          className="hover:bg-white/5 rounded-2xl px-5 py-4 transition"
        >
          Attendance
        </Link>

        <Link
          to="/cgpa"
          className="hover:bg-white/5 rounded-2xl px-5 py-4 transition"
        >
          CGPA
        </Link>

        <Link
          to="/assignments"
          className="hover:bg-white/5 rounded-2xl px-5 py-4 transition"
        >
          Assignments
        </Link>

        <Link
          to="/focus"
          className="hover:bg-white/5 rounded-2xl px-5 py-4 transition"
        >
          Focus Mode
        </Link>

        <Link
          to="/profile"
          className="hover:bg-white/5 rounded-2xl px-5 py-4 transition"
        >
          Profile
        </Link>

      </nav>

    </aside>
  )
}

export default Sidebar