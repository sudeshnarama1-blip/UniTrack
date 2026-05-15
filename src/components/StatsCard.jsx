function StatsCard({
  icon,
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[28px] p-8">

      <div className={`${color} mb-5`}>
        {icon}
      </div>

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-4xl font-bold mt-4">
        {value}
      </h3>

      <p className={`${color} mt-4 text-sm`}>
        {subtitle}
      </p>

    </div>
  )
}

export default StatsCard