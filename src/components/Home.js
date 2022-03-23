import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';
import List from "../students/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: deepPurple[400],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },
})

const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 const [status, setStatus] = useState();

 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3000/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
 return (
  <>
   <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography variant="h2">React CRUD with API Call</Typography>
   </Box>
   
     <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
      <Typography variant="h4">Add Student</Typography>
     </Box>
     <form>
  <div className="row">
    <div className="small-6 small-centered columns">
      <div className="row">
        <div className="small-6 columns">
           <input type="text" placeholder="Student Name" autocomplete="stuname" onChange={e => onTextFieldChange(e)} id="stuname" required/>
        </div>
        <div className="small-6 columns">
           <input type="text" placeholder="Father Name" autocomplete="fatherName" id="fatherName" onChange={e => onTextFieldChange(e)} required/>
        </div>
      </div>

      <div className="row">
        <div className="small-6 columns">
          <input type="text" placeholder="Email" autoComplete="email" name="email"  onChange={e => onTextFieldChange(e)} required/>
        </div>
        <div className="small-6 columns">
          <input type="text" placeholder="Phone" name="phnNumber" autocomplete="phnNumber" onChange={e => onTextFieldChange(e)} required/>
        </div>
      </div>
      <div className="row">
        <div className="small-8 columns">
          <input type="text" placeholder="Address" name="address" onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
        <div className="small-4 columns">
          <input type="text" placeholder="State" name="state"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
        <div className="small-4 columns">
          <input type="text" placeholder="City" name="city"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
        <div className="small-4 columns">
          <input type="text" placeholder="Pin" name="pin"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
      </div>
      <div className="row">
      <div className="small-4 columns">
            <input type="text" placeholder="Class" name="class"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
        <div className="small-4 columns">
            <input type="text" placeholder="Marks" name="marks"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
        <div className="small-4 columns">
            <input type="text" placeholder="Date" name="date"  onChange={e => onTextFieldChange(e)} autocomplete="off" required/>
        </div>
      </div>
      
      <div className="row">
        <div className="small-4 columns">
          
          <button className="btn btn-primary" onClick={e => onFormSubmit(e)}>Add</button>
        </div>
      </div>
    </div>
  </div>
</form>
    

   
  </>
 )
}

export default Home
