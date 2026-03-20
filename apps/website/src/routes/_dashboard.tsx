import { DashboardLayout } from '@/components/layouts/dashboard-layout'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard')({
  component: () => (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ),
})
