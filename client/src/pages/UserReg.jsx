import React, { useState } from 'react';
import './UserReg.scss'
import { Checkbox, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ToggleOffSharpIcon from '@mui/icons-material/ToggleOffSharp';
import ToggleOnSharpIcon from '@mui/icons-material/ToggleOnSharp';


const UserReg = () => {
    const [UserArray, setUserArray] = useState([]);

    const [passwordType, setPasswordType] = useState("password");
    const [Status, setStatus] = useState("inactive");

    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Password, setPasword] = useState("");
    const [Email, setEmail] = useState("");


    const addObject = () => {
        const newObj = {
            firstname: FName,
            lastname: LName,
            mail: Email,
            pass: Password,
            stat: Status
        };
        setUserArray(prevArray => [...prevArray, newObj]);
    };

    const handleTogglePasswordVisibility = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };
    const handleTogglestatus = () => {
        setStatus(Status === 'active' ? 'inactive' : 'active')
    };

    return (
        <div className='Home'>
            <div className="top">
                <div className="left">
                    <h1 className="title">Add account</h1>
                    <p className='description'>Already have an account?<span><a href='#0' className="link">Login</a></span></p>
                </div>
                <div className="right">
                    <div className="toggle">
                        <IconButton onClick={handleTogglestatus}>
                            {Status === 'active' ? <ToggleOnSharpIcon className='status_active' /> : <ToggleOffSharpIcon className='status_inactive' />}
                            <span><a href='#0' className='active'>{Status === 'active' ? <p>Active</p> : <p>Inactive</p>}</a></span>
                        </IconButton>

                    </div>

                </div>
            </div>
            <div className="middle">
                <div className="inputContainer">
                    <div className="inputs">
                        <TextField id="fname" variant="outlined" autoComplete='off' placeholder='FIRST NAME' onChange={(event) => setFName(event.target.value)} className='inputN' />
                        <TextField id="lname" variant="outlined" autoComplete='off' placeholder='LAST NAME' onChange={(event) => setLName(event.target.value)} className='inputN' />
                    </div>
                    <br />
                    <div className="inputs">
                        <TextField id="mail" variant="outlined" autoComplete="off" placeholder='EMAIL' onChange={(event) => setEmail(event.target.value)} className='input' />
                    </div>
                    <br />
                    <div className="inputs">
                        <TextField
                            id="pass"
                            type={passwordType}
                            variant="outlined"
                            autoComplete='off'
                            placeholder='PASSWORD'
                            onChange={(event) => setPasword(event.target.value)}
                            className='input'
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleTogglePasswordVisibility}>
                                        {passwordType === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                ),
                            }}
                        />

                    </div>
                </div>
                <div className="disclaimer">
                    <Checkbox className='checkbox' required />
                    <span className='disclaimer-text'>i agree to DopeSass <a href="#0" className='link'>Terms of service</a>and <a href="#0" className='link' >Privacy policy</a></span>
                </div>
                <div className="submit">
                    <button className='submit-button' onClick={addObject} >Add your Details</button>
                </div>
            </div>
            <div className="bottom">
                <div className="table">
                    <TableContainer component={Paper} className='TableContainer'>
                        <Table sx={{ minWidth: 650 }} aria-label="user-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>FIRST NAME</TableCell>
                                    <TableCell >LAST NAME</TableCell>
                                    <TableCell >EMAIL</TableCell>
                                    <TableCell >STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {UserArray.map((user, index) => (
                                    <TableRow
                                        key={index}
                                        
                                    >
                                        <TableCell component="th" scope="row">
                                            {user.firstname}
                                        </TableCell>
                                        <TableCell >{user.lastname}</TableCell>
                                        <TableCell >{user.mail}</TableCell>
                                        <TableCell >{user.stat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default UserReg
