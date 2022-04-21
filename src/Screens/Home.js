import React, { Component, useCallback, useContext, useEffect, useState } from 'react';
import './home.css';

import { Link } from 'react-router-dom';
import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, Grid, IconButton, TextField, Typography } from '@mui/material';
import SCard from './SCard';
import products from '../product.json'
import { CardTravel, PhotoCamera, ShoppingCart } from '@mui/icons-material';
import Cart from './Cart';
import Alan from '../alan';
import Car from './n';




export default function Home() {


    const [show, setShow] = useState(false)
    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false)
    // const [search, setSearch] = useState("")/\
    const [cart, setCart] = useState([])
    const [cartid, setCartID] = useState([])
    const [idx, setIdx] = useState([])


    useEffect(() => {

        setCart(JSON.parse(JSON.stringify(products)))
    }, [])

    const showel = useCallback((id) => {


    })




    const carlen = (id) => {

        setCart(cart => cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))

        cartid.push(id)
        setCartID(cartid)


    }

    const carlenremove = (id) => {
        cartid.pop(id)
        setCartID(cartid)

    }

    const inc = (id, quan) => {

        console.log(id + " " + quan)
        setCart(cart => cart.map((item) => item.id === id ? { ...item, quantity: quan } : item))

    }
    const dec = (id) => {


        setCart(cart => cart.map((item) => item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item))


        var it = cart.find((ex) => ex.id === id)
        console.log(it.quantity)
        if (it.quantity - 1 === 0) {

            cartid.pop(id);
            setCartID(cartid);
        }


    }


    const vals = (e) => {
        setSearch(e.target.value)
        e.preventDefault()
    }


    function handleOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }


    return (

        <div>

            <Alan isopen={handleOpen} isclose={handleClose} addtocart={inc} carlen={carlen} remcart={inc} cremove={carlenremove} />
            <div className="header"><br></br>

                <p style={{ fontFamily: 'serif', fontSize: '40px', marginLeft: '40%' }}>SHOPPING</p>

                <IconButton onClick={handleOpen} style={{ marginLeft: '40%', color: 'blue' }}>
                    <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '50px', color: 'red', borderRadius: '50px', border: '2px solid red' }}>
                        {cartid.length}</p><ShoppingCart /></IconButton>

                <Cart isopen={open} isclose={handleClose} citem={cartid} cart={cart} remcart={inc} cremove={carlenremove} />
                {/* <Car isopen={open} isclose={handleClose} citem={cartid} cart={cart} remcart={inc} cremove={carlenremove} /> */}

            </div>


            <div className='content'>

                <Grid container spacing={1}>
                    {cart.map((item) => {

                        return (

                            <Grid style={{ height: '100%', width: '25%' }} item sx={4}>

                                <SCard key={item.id} item={item} inc={inc} dec={dec} carlen={carlen} cart={cart} />


                            </Grid>




                        );

                    })}

                </Grid>


            </div>
        </div>

    );

}

