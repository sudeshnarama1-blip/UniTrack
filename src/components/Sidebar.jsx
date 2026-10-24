import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  CalendarCheck,
  GraduationCap,
  ClipboardList,
  Timer,
  User,
} from "lucide-react"

const links = [
  { to: "/", label: "Dashboard", short: "Home", icon: LayoutDashboard },
  { to: "/attendance", label: "Attendance", short: "Attend", icon: CalendarCheck },
  { to: "/cgpa", label: "CGPA", short: "CGPA", icon: GraduationCap },
  { to: "/assignments", label: "Assignments", short: "Tasks", icon: ClipboardList },
  { to: "/focus", label: "Focus Mode", short: "Focus", icon: Timer },
  { to: "/profile", label: "Profile", short: "Profile", icon: User },
]

function Sidebar() {
  return (
    <>
      {/* Desktop: sidebar on the left */}
      <aside className="hidden md:flex w-72 shrink-0 min-h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl p-8 flex-col">

        <h1 className="text-4xl font-bold">
          UniTrack
        </h1>

        <p className="text-zinc-500 mt-3 text-sm">
          Academic productivity dashboard
        </p>

        <nav className="mt-14 flex flex-col gap-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                  : "hover:bg-white/5 border border-transparent rounded-2xl px-5 py-4 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </aside>

      {/* Phone: tab bar at the bottom, like a mobile app */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-[#070014]/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-6">
          {links.map(({ to, short, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                "flex flex-col items-center gap-1 py-3 text-[11px] transition " +
                (isActive ? "text-white" : "text-zinc-500")
              }
            >
              <Icon size={20} />
              {short}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
