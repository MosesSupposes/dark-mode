import React from 'react'
import useCoinList from '../../hooks/useCoinList'

export default function CoinsPage4(props) {
    const coins = useCoinList()
    
    return (
        <ul className="coin-list">
            {coins.slice(75, 100).map(function renderTokens(coin) {
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
    )
}