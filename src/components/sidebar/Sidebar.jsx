import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Yinger</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreMallDirectoryOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
