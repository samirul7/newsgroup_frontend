import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation'

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default AppLayout
