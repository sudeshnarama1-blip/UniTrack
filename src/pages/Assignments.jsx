import Sidebar from "../components/Sidebar"

function Assignments() {

  const assignments = [
    {
      subject: "Programming",
      task: "Build Portfolio Website",
      due: "Tomorrow",
      status: "Pending",
      color: "text-red-400",
      bgColor: "bg-red-400",
    },

    {
      subject: "DSA",
      task: "Binary Trees Worksheet",
      due: "Friday",
      status: "In Progress",
      color: "text-pink-400",
      bgColor: "bg-pink-400",
    },

    {
      subject: "Databases",
      task: "SQL Queries Assignment",
      due: "Next Week",
      status: "Completed",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },

    {
      subject: "Computer Networks",
      task: "OSI Model Report",
      due: "Monday",
      status: "Pending",
      color: "text-orange-400",
      bgColor: "bg-orange-400",
    },

    {
      subject: "Operating Systems",
      task: "Process Scheduling Notes",
      due: "Wednesday",
      status: "In Progress",
      color: "text-purple-400",
      bgColor: "bg-purple-400",
    },
  ]

  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 px-14 py-12">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            Assignment Tracker
          </p>

          <h1 className="text-5xl font-bold mt-5">
            Assignments Overview
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Track pending assignments,
            deadlines, and completion status.
          </p>

        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* Pending */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Pending Tasks
            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-400">
              4
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Assignments awaiting completion
            </p>

          </div>

          {/* Completed */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Completed Tasks
            </p>

            <h2 className="text-5xl font-bold mt-4 text-cyan-400">
              12
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Successfully submitted work
            </p>

          </div>

          {/* Upcoming */}
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-400">
              Upcoming Deadlines
            </p>

            <h2 className="text-5xl font-bold mt-4 text-pink-400">
              3
            </h2>

            <p className="text-zinc-500 mt-4 text-sm">
              Due within this week
            </p>

          </div>

        </div>

        {/* Assignments List */}
        <div className="mt-16">

          <h2 className="text-3xl font-semibold mb-8">
            Current Assignments
          </h2>

          <div className="space-y-6">

            {assignments.map((assignment, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8"
              >

                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                  <div>

                    <p className={`text-sm ${assignment.color}`}>
                      {assignment.subject}
                    </p>

                    <h3 className="text-2xl font-semibold mt-2">
                      {assignment.task}
                    </h3>

                  </div>

                  <div className="flex gap-8">

                    <div>

                      <p className="text-zinc-500 text-sm">
                        Due Date
                      </p>

                      <p className="mt-2 text-lg">
                        {assignment.due}
                      </p>

                    </div>

                    <div>

                      <p className="text-zinc-500 text-sm">
                        Status
                      </p>

                      <p className={`mt-2 text-lg ${assignment.color}`}>
                        {assignment.status}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Progress */}
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mt-8">

                  <div
                    className={`h-full rounded-full ${assignment.bgColor}`}
                    style={{
                      width:
                        assignment.status === "Completed"
                          ? "100%"
                          : assignment.status === "In Progress"
                          ? "65%"
                          : "25%",
                    }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Assignments