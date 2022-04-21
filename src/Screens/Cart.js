import React, { Component, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'react-phone-input-2/lib/style.css'
import './login.css';
import { Close, Delete, Remove } from '@mui/icons-material';
import { TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';



export default function Cart({ isopen, isclose, citem, cart, remcart, cremove }) {
    const c = []
    function handlecl() {
        alert('Purchased');
        isclose();
    }

    function fetch(id) {


        for (var i = 0; i < citem.length; i++) {
            var item = cart.find((el) => el.id == citem.at(i))
            if (item.quantity !== 0)
                c.push(item)

        }




        return c;
    }



    function handleremove(id) {

        remcart(id, 0);
        cremove(id)
    }
    return (<div>

        <Modal
            open={isopen}
            onClose={isclose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className='boxnmc' >

                <div className='boxnm'>
                    <center className='htext'>Cart Items</center>
                    <Close onClick={isclose} style={{ marginLeft: '40%', marginTop: '0%', fontSize: '30px', cursor: 'pointer' }} />
                </div>
                <div className='logincontent'>
                    <p>Img</p>
                    <p>Qty</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>
                <div className='mainbox'>

                    {cart.map((item) => {


                        if (item.quantity>0) {
                            return (

                                <CartItem key={item.id} item={item} handle={handleremove} />

                            );

                        }

                    })}

                </div>

                <Button onClick={handlecl} fullWidth style={{ color: 'white', backgroundColor: 'blue' }}>Checkout</Button>

            </Box>
        </Modal>

    </div>
    );
}


function CartItem({ key, item, handle }) {
    return (
        <div key={item.id} className='logincontent'>
            <img src={item.thumbnail} height={60} width={60}></img>
            <p>{item.quantity}</p>
            <p>{item.price * item.quantity}</p>
            <IconButton onClick={() => handle(item.id)}><Delete /></IconButton>
        </div>
    );

}

