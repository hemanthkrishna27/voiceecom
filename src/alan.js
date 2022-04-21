import React, { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import products from './product.json';

function Alan({ isopen, isclose, addtocart,carlen, remcart, cremove  }) {
    const [alaninst, setAlaninst] = useState()

    function opencart() {
        alaninst.playText("opening the cart")

        isopen()
    }

    function removeCart({ detail: { name } }){
        alaninst.playText(`${name} removed from the cart`)
        const itemid = products.find((item) => (item.title.toLowerCase() === name.toLowerCase()));

        remcart(itemid.id, 0);
        cremove(itemid.id)
    }

    function closecart() {
        alaninst.playText("Closing the cart")

        isclose()
    }

    function addItem({ detail: { name, quantity } }) {
        const itemid = products.find((item) => (item.title.toLowerCase() === name.toLowerCase()));
        carlen(itemid.id)
        addtocart(itemid.id, quantity)

        alaninst.playText("ADDED to the cart")
     


    }

    useEffect(() => {
        window.addEventListener('open-item', opencart)
        window.addEventListener('close-item', closecart)
        window.addEventListener(`add-item`, addItem)
        window.addEventListener('remove-item', removeCart)

        return () => {
            window.removeEventListener('open-item', opencart)
            window.removeEventListener('close-item', closecart)
            window.removeEventListener(`add-item`, addItem)
            window.removeEventListener('remove-item', removeCart)

        }
    }, [opencart])

    useEffect(() => {

        if (alaninst != null) return
        setAlaninst(
            alanBtn({

                key: '8c4fc0504c7ba7a4b6aed14e0ac514582e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand: ({ command, payload }) => {

                    window.dispatchEvent(new CustomEvent(command, { detail: payload }))

                }
            }))
    }, [])

    return <div>

    </div>;
}

export default Alan;