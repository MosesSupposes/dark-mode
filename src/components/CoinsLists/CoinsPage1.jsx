import React from 'react'
import { Link } from 'react-router-dom'

import useCoinList from '../../hooks/useCoinList'

export default function CoinsPage1(props) {
    const coins = useCoinList()
    
    return (
        <>
        <ul className="coin-list">
            {coins.slice(0,25).map(function renderTokens(coin) {
                return (
                    <li key={coin.id}>
                        <span style={{fontSize: '2em'}}>{coin.symbol}</span>
                        <br />
                        <span style={{fontSize: '1.25em'}}>{coin.name}</span>
                        <br /> 
                        <br />
                    </li>
                ) 
            })}
        </ul>

        <div className="pagination-buttons">
            <Link to="/coins/2">➡️</Link>
        </div>
        </>
    )
}