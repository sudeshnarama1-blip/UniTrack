import Sidebar from "../components/Sidebar"

function Profile() {

  const student = {
    name: "Sana Anthony",
    studentId: "2025CS101",
    section: "CSE-AIML-A",
    semester: "Semester 2",
    email: "sana@unitrack.edu",
  }

  return (
    <main className="min-h-screen bg-[#070014] text-white flex">

      <Sidebar />

      <section className="flex-1 px-14 py-12">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Student Profile
          </p>

          <h1 className="text-5xl font-bold mt-5">
            Profile Overview
          </h1>

          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            Manage student information and account settings.
          </p>

        </div>

        {/* Profile Card */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-[32px] p-10 max-w-5xl">

          <div className="flex flex-col xl:flex-row gap-10 items-start">

            {/* Profile Photo */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-5xl font-bold">

              S

            </div>

            {/* Info */}
            <div className="flex-1">

              <h2 className="text-4xl font-bold">
                {student.name}
              </h2>

              <p className="text-zinc-400 mt-3">
                Student ID: {student.studentId}
              </p>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                <div className="bg-white/5 rounded-2xl p-6">

                  <p className="text-zinc-500 text-sm">
                    Section
                  </p>

                  <h3 className="text-2xl font-semibold mt-3 text-cyan-400">
                    {student.section}
                  </h3>

                </div>

                <div className="bg-white/5 rounded-2xl p-6">

                  <p className="text-zinc-500 text-sm">
                    Semester
                  </p>

                  <h3 className="text-2xl font-semibold mt-3 text-pink-400">
                    {student.semester}
                  </h3>

                </div>

                <div className="bg-white/5 rounded-2xl p-6 md:col-span-2">

                  <p className="text-zinc-500 text-sm">
                    Email Address
                  </p>

                  <h3 className="text-2xl font-semibold mt-3 text-purple-400">
                    {student.email}
                  </h3>

                </div>

              </div>

              {/* Logout Button */}
              <button
                onClick={() => {

                  localStorage.removeItem("isLoggedIn")

                  window.location.href = "/login"

                }}
                className="mt-10 bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-semibold"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Profile