import { stack } from '@mui/material'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {Box} from '@mui/material'
import { display, flexbox } from '@mui/system'
// import SearchBar from './SearchBar';
// import {logo} from '../utils/constants';

const rightnav={
  color: "#FA7225",
  backgroundColor: "#191717",
  padding: "10px",
  fontFamily: "Arial",
  margin:"0 40px",
  fontSize:"20px"
}
const atag={
  // display:"flex",
  // margin:"0 20px",
  // justifyContent:"space-between"
  margin:"0 0 0 50px"
}
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#191717',
      top: 0,
      justifyContent: 'space-between',
      color: '#FA7225',
    }}
  >
    <div className="logo" >ME</div>
    <div style={rightnav}className="rightnav">
      <a style={atag}>Home</a>
      <a style={atag}>Services</a>
      <a style={atag}>Courses</a>
      <a style={atag}>About</a>
      <Link style={atag} to="/Contact">Contact</Link>
    </div>
  </Stack>
)

export default Navbar
