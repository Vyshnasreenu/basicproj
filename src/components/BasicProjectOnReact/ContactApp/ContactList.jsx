import { Card, CardContent, CardMedia, Input, Typography } from '@mui/material';
import { React, useState } from 'react';
import './contact.css'
// import logo from '../public/red.jpg';
const ContactList = (props) => {
    const PersonNames = {
        name1: "Ram charan", name2: "Ram Potheneni", name3: "Sreenu", name4: "vaishu", name5: "Rolex", name6: "Prabhas", name7: "NTR",
        name8: "allu arjun", name9: "Dhoni", name10: "Jadeja"
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
                                {/* <Input type='text' className='form-control text-center' placeholder='Search...' onChange={(event) => changeHandler(event)}><span className='glyphicon glyphicon-search'></span></Input> */}
                            </div>
                        </div>
                        <div className='row p-2'>
                            {PersonNames?.name10.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Jadeja...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "370px", overflow: "auto" }}>
                                        {/* <CardMedia
                                            sx={{ height: 140 }}
                                            image='/Dhoin7.jpg'
                                        /> */}
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="https://via.placeholder.com/150"
                                            alt="Placeholder Image"
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
                            {PersonNames?.name3.toLocaleLowerCase().includes(fileterName) && (
                                <div className='col-md-2' onClick={() => alert("calling Sreenu...")} style={{ cursor: "pointer" }}>
                                    <Card sx={{ maxWidth: "345px", overflow: "auto" }}>
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
                                    <Card sx={{ maxWidth: "345px", overflow: "auto" }}>
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
                                    <Card sx={{ maxWidth: "345px", overflow: "auto" }}>
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
                                    <Card sx={{ maxWidth: "375px", overflow: "auto" }}>
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
                                    <Card sx={{ maxWidth: "345px", overflow: "auto" }}>
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