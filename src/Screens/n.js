import React, { Component, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'react-phone-input-2/lib/style.css'
import './login.css';
import { Close, Delete, Remove } from '@mui/icons-material';
import { TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';


class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
c:[]
        }
console.log("hellllo");

        this.setState({
            c: this.state.c.concat([this.props.cart])
          })

          console.log(this.state.c)

    }
    handlecl() {
        alert('Purchased');
        this.props.isclose();
    }
    render() {
        return (
            <div>

                <Modal
                    open={this.props.isopen}
                    onClose={this.props.isclose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box className='boxnmc' >

                        <div className='boxnm'>
                            <center className='htext'>Cart Items</center>
                            <Close onClick={this.props.isclose} style={{ marginLeft: '40%', marginTop: '0%', fontSize: '30px', cursor: 'pointer' }} />
                        </div>
                        <div className='logincontent'>
                            <p>Img</p>
                            <p>Qty</p>
                            <p>Price</p>
                            <p>Remove</p>
                        </div>
                        <div className='mainbox'>



                            {this.state.c.map((item) => {

                                return (
                                    <div key={item.id} className='logincontent'>
                                        <img src={item.thumbnail} height={60} width={60}></img>
                                        <p>{item.quantity}</p>
                                        <p>{item.price * item.quantity}</p>
                                        <IconButton onClick={() => this.props.handle(item.id)}><Delete /></IconButton>
                                    </div>
                                );

                            })}

                        </div>

                        <Button onClick={this.handlecl} fullWidth style={{ color: 'white', backgroundColor: 'blue' }}>Checkout</Button>

                    </Box>
                </Modal>

            </div>
        );
    }
}

export default Car;