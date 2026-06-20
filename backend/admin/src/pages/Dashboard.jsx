import { useEffect, useState } from "react"
import api from "../services/api"
import StatCard from "../components/StatCard"

export default function Dashboard() {

  const [stats, setStats] =
    useState({
      users:0,
      orders:0,
      revenue:0
    })

  useEffect(() => {

    api.get("/admin/stats")
      .then(res => {
        setStats(res.data)
      })

  }, [])

  return (
    <div>

      <h1>Dashboard</h1>

      <StatCard
        title="Users"
        value={stats.users}
      />

      <StatCard
        title="Orders"
        value={stats.orders}
      />

      <StatCard
        title="Revenue"
        value={`$${stats.revenue}`}
      />

    </div>
  )
}
