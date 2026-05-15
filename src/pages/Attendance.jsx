import Sidebar from "../components/Sidebar"

function Attendance() {

  const subjects = [
    {
      name: "Programming",
      attendance: "92%",
      attended: 46,
      total: 50,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },

    {
      name: "Data Structures & Algorithms",
      attendance: "81%",
      attended: 41,
      total: 50,
      color: "text-pink-400",
      bgColor: "bg-pink-400",
    },

    {
      name: "Databases",
      attendance: "76%",
      attended: 38,
      total: 50,
      color: "text-purple-400",
      bgColor: "bg-purple-400",
    },

    {
      name: "Computer Networks",
      attendance: "69%",
      attended: 35,
      total: 50,
      color: "text-red-400",
      bgColor: "bg-red-400",
    },

    {
      name: "Operating Systems",
      attendance: "88%",
      attended: 44,
      total: 50,
      color: "text-orange-400",
      bgColor: "bg-orange-400",
    },
  ]

  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 px-14 py-12">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Attendance Tracker
          </p>

          <h1 className="text-5xl font-bold mt-5">
            Attendance Overview
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Monitor subject-wise attendance,
            monthly performance, and absence trends.
          </p>

        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* Overall Attendance */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Overall Attendance
            </p>

            <h2 className="text-5xl font-bold mt-4 text-cyan-400">
              81%
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Across all registered subjects
            </p>

          </div>

          {/* Monthly Attendance */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Monthly Attendance
            </p>

            <h2 className="text-5xl font-bold mt-4 text-pink-400">
              87%
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Current month performance
            </p>

          </div>

          {/* Absence Log */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Absence Log
            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-400">
              9
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Total missed classes
            </p>

          </div>

        </div>

        {/* Subject Attendance */}
        <div className="mt-16">

          <h2 className="text-3xl font-semibold mb-8">
            Subject Attendance
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {subject.name}
                    </h3>

                    <p className="text-zinc-500 mt-2">
                      {subject.attended} attended out of {subject.total}
                    </p>

                  </div>

                  <h2 className={`text-4xl font-bold ${subject.color}`}>
                    {subject.attendance}
                  </h2>

                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mt-8">

                  <div
                    className={`h-full rounded-full ${subject.bgColor}`}
                    style={{
                      width: subject.attendance,
                    }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">

          {/* Monthly Logs */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Monthly Log
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  January
                </span>

                <span className="text-cyan-400">
                  84%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  February
                </span>

                <span className="text-pink-400">
                  88%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  March
                </span>

                <span className="text-purple-400">
                  81%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  April
                </span>

                <span className="text-orange-400">
                  79%
                </span>
              </div>

            </div>

          </div>

          {/* Recent Absences */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Recent Absences
            </h2>

            <div className="space-y-4">

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Computer Networks
                </span>

                <span className="text-red-400">
                  2 Days Ago
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Databases
                </span>

                <span className="text-red-400">
                  Last Week
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  Programming
                </span>

                <span className="text-red-400">
                  Last Month
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Attendance