import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"

function FocusMode() {

  const [minutes, setMinutes] = useState(45)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const [tasks, setTasks] = useState([
    {
      text: "Finish DSA practice questions",
      completed: false,
    },

    {
      text: "Revise Operating Systems notes",
      completed: false,
    },

    {
      text: "Complete DBMS assignment",
      completed: false,
    },

    {
      text: "Prepare CN lab record",
      completed: false,
    },
  ])

  useEffect(() => {

    let interval = null

    if (isActive) {

      interval = setInterval(() => {

        if (seconds > 0) {
          setSeconds(seconds - 1)
        }

        if (seconds === 0) {

          if (minutes === 0) {
            clearInterval(interval)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }

        }

      }, 1000)

    }

    return () => clearInterval(interval)

  }, [isActive, seconds, minutes])

  const startTimer = () => {
    setIsActive(true)
  }

  const pauseTimer = () => {
    setIsActive(false)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(45)
    setSeconds(0)
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 min-w-0 px-5 pt-8 pb-28 md:px-14 md:py-12">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Focus Mode
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            Deep Work Session
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Eliminate distractions, manage study sessions,
            and improve productivity.
          </p>

        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* Session Timer */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Current Session
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-cyan-400">
              {formatTime(minutes)}:{formatTime(seconds)}
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Focus timer remaining
            </p>

          </div>

          {/* Study Time */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Today's Study Time
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pink-400">
              3.5h
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Total focused hours today
            </p>

          </div>

          {/* Focus Score */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Focus Score
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-purple-400">
              89
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Productivity consistency rating
            </p>

          </div>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">

          {/* Timer */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 md:p-10 flex flex-col items-center justify-center">

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Active Session
            </p>

            <h1 className="text-6xl md:text-8xl font-bold mt-8">
              {formatTime(minutes)}:{formatTime(seconds)}
            </h1>

            <p className="text-zinc-500 mt-6">
              Pomodoro Focus Timer
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button
                onClick={startTimer}
                className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
              >
                Start
              </button>

              <button
                onClick={pauseTimer}
                className="bg-white/10 px-8 py-4 rounded-2xl"
              >
                Pause
              </button>

              <button
                onClick={resetTimer}
                className="bg-white/10 px-8 py-4 rounded-2xl"
              >
                Reset
              </button>

            </div>

          </div>

          {/* Tasks */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-3xl font-semibold">
              Focus Tasks
            </h2>

            <p className="text-zinc-500 mt-3">
              Current tasks for this session
            </p>

            <div className="space-y-5 mt-10">

              {tasks.map((task, index) => (

                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    {/* Clickable Circle */}
                    <button
                      onClick={() => {

                        const updatedTasks = [...tasks]

                        updatedTasks[index].completed =
                          !updatedTasks[index].completed

                        setTasks(updatedTasks)

                      }}
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                        task.completed
                          ? "bg-cyan-400 border-cyan-400"
                          : "border-cyan-400"
                      }`}
                    >

                      {task.completed && (
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                      )}

                    </button>

                    {/* Task Text */}
                    <span
                      className={`transition ${
                        task.completed
                          ? "line-through text-zinc-500"
                          : ""
                      }`}
                    >
                      {task.text}
                    </span>

                  </div>

                  {/* Status */}
                  <span
                    className={`text-sm ${
                      task.completed
                        ? "text-cyan-400"
                        : "text-orange-400"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">

          {/* Study Environment */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Study Environment
            </h2>

            <div className="space-y-4">

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Lo-fi Playlist
                </span>

                <span className="text-cyan-400">
                  Active
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Notifications
                </span>

                <span className="text-red-400">
                  Muted
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Ambient Sounds
                </span>

                <span className="text-pink-400">
                  Rain Mode
                </span>
              </div>

            </div>

          </div>

          {/* Productivity Tips */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Productivity Tips
            </h2>

            <div className="space-y-4">

              <div className="bg-white/5 rounded-2xl p-5">
                Take a 5 minute break after every session.
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                Keep your phone away during focus time.
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                Use short goals to maintain consistency.
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default FocusMode