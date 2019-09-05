import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useCoinList() {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/list")
        .then(res => {
            setCoins(res.data)
        })
    }, [])

    return coins
}