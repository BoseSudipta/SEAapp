import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';

import EditIcon from '@mui/icons-material/Edit';

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
 const classes = useStyles();
 const [students, setStudents] = useState([]);

 useEffect(() => {
  async function getAllStudent() {
   try {
    const students = await axios.get("http://localhost:3000/students")
    // console.log(students.data);
    setStudents(students.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllStudent();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3000/students/${id}`);
  var newstudent = students.filter((item) => {
   return item.id !== id;
  })
  setStudents(newstudent);
 }
const handleClick = async id =>{
  
}

 return (
   <>
  <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
    <Typography variant="h2">React CRUD with API Call</Typography>
   </Box>

<div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Marks</th>
      <th scope="col">DOB</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
       students.map((student, i) => {
        return (
            <tr>
      <th scope="row">{i + 1}</th>
      <td><Link onClick={handleClick}>{student.stuname}</Link></td>
      <td>{student.email}</td>
      <td>{student.phnNumber}</td>
      <td>{student.marks}</td>
      <td>{student.dob}</td>
      <td><Link to={`/edit/${student.id}`}>Edit</Link></td>
    
    </tr>
        )
       })
    }
  </tbody>
     
    </table>
    
  </div>
  </>
 )
}

export default List






