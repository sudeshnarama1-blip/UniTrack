import Sidebar from "../components/Sidebar"

function CGPA() {

  const semesters = [
    {
      semester: "Semester 1",
      sgpa: "8.4",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },

    {
      semester: "Semester 2",
      sgpa: "8.7",
      color: "text-pink-400",
      bgColor: "bg-pink-400",
    },

    {
      semester: "Semester 3",
      sgpa: "9.1",
      color: "text-purple-400",
      bgColor: "bg-purple-400",
    },

    {
      semester: "Semester 4",
      sgpa: "8.5",
      color: "text-orange-400",
      bgColor: "bg-orange-400",
    },
  ]

  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 min-w-0 px-5 pt-8 pb-28 md:px-14 md:py-12">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-pink-400">
            CGPA Tracker
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            Academic Performance
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Monitor semester performance,
            SGPA progression, and overall CGPA.
          </p>

        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* Current CGPA */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Current CGPA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-cyan-400">
              8.7
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Overall academic performance
            </p>

          </div>

          {/* Best Semester */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Best Semester
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pink-400">
              9.1
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Highest SGPA achieved
            </p>

          </div>

          {/* Credits Earned */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Credits Earned
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-purple-400">
              96
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Total completed credits
            </p>

          </div>

        </div>

        {/* Semester Breakdown */}
        <div className="mt-16">

          <h2 className="text-3xl font-semibold mb-8">
            Semester Performance
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {semesters.map((semester, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {semester.semester}
                    </h3>

                    <p className="text-zinc-500 mt-2">
                      SGPA Performance Overview
                    </p>

                  </div>

                  <h2 className={`text-4xl md:text-5xl font-bold ${semester.color}`}>
                    {semester.sgpa}
                  </h2>

                </div>

                {/* Progress */}
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mt-8">

                  <div
                    className={`h-full rounded-full ${semester.bgColor}`}
                    style={{
                      width: `${Number(semester.sgpa) * 10}%`,
                    }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-16">

          {/* GPA Goals */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              GPA Goals
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Target CGPA
                </span>

                <span className="text-cyan-400">
                  9.0
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Current Standing
                </span>

                <span className="text-pink-400">
                  Excellent
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Improvement Needed
                </span>

                <span className="text-orange-400">
                  +0.3
                </span>
              </div>

            </div>

          </div>

          {/* Grade Distribution */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Grade Distribution
            </h2>

            <div className="space-y-4">

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  O Grade Subjects
                </span>

                <span className="text-cyan-400">
                  6
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  A Grade Subjects
                </span>

                <span className="text-pink-400">
                  12
                </span>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 flex justify-between">
                <span>
                  B Grade Subjects
                </span>

                <span className="text-orange-400">
                  3
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default CGPA