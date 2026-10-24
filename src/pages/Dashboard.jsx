import { Link } from "react-router-dom"

import {
  GraduationCap,
  Brain,
  Clock3,
  Flame,
} from "lucide-react"

import Sidebar from "../components/Sidebar"
import StatsCard from "../components/StatsCard"

function Dashboard() {
  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 min-w-0 px-5 pt-8 pb-28 md:px-14 md:py-12">

        {/* Hero */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Student Workspace
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Academic Overview
          </h2>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Track attendance, assignments, GPA, and productivity
            in one organized dashboard.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          <StatsCard
            icon={<GraduationCap size={28} />}
            title="Attendance"
            value="84%"
            subtitle="Safe attendance range"
            color="text-cyan-400"
          />

          <StatsCard
            icon={<Brain size={28} />}
            title="Current CGPA"
            value="8.7"
            subtitle="Current semester performance"
            color="text-pink-400"
          />

          <StatsCard
            icon={<Clock3 size={28} />}
            title="Pending Assignments"
            value="5"
            subtitle="2 due this week"
            color="text-purple-400"
          />

          <StatsCard
            icon={<Flame size={28} />}
            title="Study Streak"
            value="12 Days"
            subtitle="Consistent this month"
            color="text-orange-400"
          />

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">

          {/* Focus Session */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Productivity
              </p>

              <h3 className="text-4xl font-bold mt-5">
                Focus Session
              </h3>

              <p className="text-zinc-400 mt-6 text-lg leading-relaxed max-w-md">
                Start a distraction-free study session
                with built-in focus tools and timers.
              </p>

            </div>

            <Link
              to="/focus"
              className="mt-10 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl py-5 font-semibold text-center"
            >
              Start Session
            </Link>

          </div>

          {/* Right Side Stack */}
          <div className="flex flex-col gap-8">

            {/* Quick Notes */}
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">

              <h3 className="text-2xl font-semibold mb-6">
                Quick Notes
              </h3>

              <div className="space-y-4">

                <div className="bg-white/5 rounded-2xl p-4">
                  Complete DBMS diagrams tonight.
                </div>

                <div className="bg-white/5 rounded-2xl p-4">
                  Submit Physics record before Friday.
                </div>

                <div className="bg-white/5 rounded-2xl p-4">
                  Revise UI/UX presentation slides.
                </div>

              </div>

            </div>

            {/* AI Chatbot */}
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6">

              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                UniAssist AI
              </p>

              <h3 className="text-2xl font-semibold mt-4">
                Academic Assistant
              </h3>

              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                Ask questions about schedules,
                assignments, productivity, or coursework.
              </p>

              {/* Chat Bubble */}
              <div className="mt-6 bg-white/5 rounded-2xl p-4">

                <span className="text-cyan-400 text-sm">
                  UniAssist
                </span>

                <p className="mt-2 text-zinc-300 text-sm">
                  Your Physics Record is due in 2 days.
                </p>

              </div>

              {/* Input */}
              <div className="flex gap-3 mt-6">

                <input
                  type="text"
                  placeholder="Ask UniAssist..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none text-sm"
                />

                <button className="bg-cyan-400 text-black px-5 rounded-2xl font-medium">
                  Send
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Dashboard