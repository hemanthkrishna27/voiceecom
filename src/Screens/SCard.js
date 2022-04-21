import React, { useCallback, useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';




export default function SCard({ item, inc, dec, carlen, cart }) {
    const [show, setShow] = useState(false)
    const setAdd = useCallback((id) => {
        var it = cart.find((ix) => ix.id === id)

        console.log(it.quantity)
        if (it.quantity-1 === 0)
            setShow(false)
    })

    useEffect(() => {
    },[])
    return (
        <Card sx={{ height: '100%', width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        {item.brand.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                    </IconButton>
                }
                title={item.title}
                subheader={item.brand}
            />
            <CardMedia
                component="img"
                height="194"
                image={item.thumbnail}

            />
            {/* <CardContent>
                    </CardContent> */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {!show && <Button onClick={() => { setShow(true); carlen(item.id) ; }}>Add</Button>}

                </IconButton>

                {show &&
                    <IconButton aria-label="add to favorites">
                        <Button onClick={() => {
                            dec(item.id,item.quantity-1);
                            setAdd(item.id)
                        }}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button onClick={() => inc(item.id,item.quantity+1)}>+</Button>
                    </IconButton>}
                {/* <Button onClick={handleOpen}>Open modal</Button>
                        <Login isopen={open} isclose={handleClose} /> */}
            </CardActions>
        </Card>



    );
}

