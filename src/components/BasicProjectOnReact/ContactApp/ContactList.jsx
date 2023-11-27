import { Card, CardContent, CardMedia, Input, Typography } from '@mui/material';
import { React, useState } from 'react';
import './contact.css'
// import logo from '../public/red.jpg';
const ContactList = (props) => {
    const PersonNames = {
        name1: "Ram charan", name2: "Ram Potheneni", name3: "Sreenu", name4: "vaishu", name5: "Rolex", name6: "Prabhas", name7: "NTR",
        name8: "allu arjun", name9: "Dhoni", name10: "jadeja"
    }

    const personNames = ["Ram Potheneni", "Sreenu", "vaishu", "Rolex", "Prabhas"]

    const [fileterName, setfilterName] = useState("")
    const changeHandler = (event) => {
        setfilterName(event.target.value)
    }
    return (
        <div>
            <div className="contact-card">
                <div className="searchContact-list">
                    <div className="container-fluid">
                        <div className="conPosition">
                            <h1>MyContactsList</h1>
                            <div className="text-center ">
                                <Input type='text' className='form-control text-center' placeholder='Search...' onChange={(event) => changeHandler(event)}><span className='glyphicon glyphicon-search'></span></Input>
                            </div>
                        </div>
                        <div className="contact-list m-3">
                            {/* <div className="d-flex justify-content-between row p-2">
                                {PersonNames.name1.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5" onClick={() => alert("calling ramcharan...")}>
                                        <div className='card bg-info'>
                                            <div className="row ">
                                                <div className="col-md-2">
                                                    <img src='./rampoth.jpg' alt='ramcharan' className='UserImage' />
                                                </div>
                                                <div className="col-md-10">
                                                    <p>Name: {PersonNames.name1}</p>
                                                    <p>  Email: ramcharan77@gmail.com</p>
                                                    <span>contactNo: 9937482810</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className='col-md-2'>
                                    <div className=' d-flex justify-content-center align-items-center' style={{ height: "60px" }}></div>
                                </div>
                                {PersonNames.name2.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling ram.....")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3 ">
                                                    <img src="./rampoth.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-8">
                                                    <p>Name: {PersonNames.name2}</p>
                                                    <p>Email: rampoth244@gmail.com</p>
                                                    <p>contactNo: 9747393445</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div> */}
                            {/* <div className='row' style={{ height: "30px" }}></div>
                            <div className='d-flex justify-content-between row p-2'>
                                {PersonNames.name3.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling sreenu....")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./sreenu.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name3}</p>
                                                    <p>Email: sreenugod2001@gmail.com</p>
                                                    <p>contactNo: 9515572810</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {PersonNames.name4.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling vaishu..")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./red.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name4}</p>
                                                    <p>Email: vaishu47@gmail.com</p>
                                                    <p>contactNo: 9738653598</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex justify-content-between row pt-3'>
                                {PersonNames.name5.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling rolex....")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name5}</p>
                                                    <p>Email: rolex456@gmail.com</p>
                                                    <p>contactNo: 8933432810</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {PersonNames.name6.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5" onClick={() => alert("calling prabhas..")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./prabhas.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name6}</p>
                                                    <p>Email: prabhas234@gmail.com</p>
                                                    <p>contactNo: 9798333598</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex justify-content-between row pt-3'>
                                {PersonNames.name7.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling NTR....")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./ntr.jpeg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name7}</p>
                                                    <p>Email: Ntrkomaram2001@gmail.com</p>
                                                    <p>contactNo: 9515572810</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {PersonNames.name8.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling alluarjun..")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name8}</p>
                                                    <p>Email: alluarjun@gmail.com</p>
                                                    <p>contactNo: 9738698498</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='d-flex justify-content-between row pt-3'>
                                {PersonNames.name9.toLowerCase().includes(fileterName) && (
                                    <div className="col-md-5 " onClick={() => alert("calling dhoni....")}>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src="./dhoni.jpg" alt="red" srcset="" className='UserImage' />
                                                </div>
                                                <div className="col-md-7">
                                                    <p>Name: {PersonNames.name9}</p>
                                                    <p>Email: dhoni7@gmail.com</p>
                                                    <p>contactNo: 7989733410</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                                </div> */}
                            {/* {PersonNames.name9.toLowerCase().includes(fileterName) && (
                                <div className="col-md-5 " onClick={() => alert("calling jadeja..")}>
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src="./jadeja.jpg" alt="red" srcset="" className='UserImage' />
                                            </div>
                                            <div className="col-md-7">
                                                <p>Name: {PersonNames.name9}</p>
                                                <p>Email: jadeja9@gmail.com</p>
                                                <p>contactNo: 7698063598</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                        </div>
                        <div className='row p-2'>
                            {PersonNames.name10.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Jadeja...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "370px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./jadeja.jpg'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name10}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 7698063598</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            {PersonNames.name3.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Sreenu...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "345px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./sreenu.jpg'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name3}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 9515572810</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            {PersonNames.name6.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling prabhas...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "345px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./prabhas.jpg'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name6}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 9759839023</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            {PersonNames.name1.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Ramcharan...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "345px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./Ram.webp'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name1}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 7695662598</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            {PersonNames.name9.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Dhoni...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "375px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./Dhoin7.jpg'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name9}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 8998009798</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                            {PersonNames.name5.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Rolex...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "345px",overflow:"auto" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image='./red.jpg'
                                        />
                                        <CardContent>
                                            <Typography>
                                                <p>
                                                    Name:
                                                    <span className='font'>  {PersonNames.name5}</span>
                                                </p>
                                                <p>
                                                    ContactNo:
                                                    <span className='font'> 8936473221</span>
                                                </p>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactList;