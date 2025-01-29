import { Outlet } from 'react-router-dom'
import AdminHeader from './Header'
import AdminSideBar from './SideBar'

export default function AdminLayout() {
  return (
    <div className='flex w-full min-h-screen'>
      // admin sidebar
      <AdminSideBar/>
      <div className='flex flex-col flex-1'>
        <AdminHeader/>
        <main className='flex flex-1 p-4 bg-muted/40 md:p-6'>
          <Outlet/>
        </main>
        
      </div>
    </div>
  )
}
