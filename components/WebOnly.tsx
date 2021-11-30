import * as React from 'react';
import Blob from './Blob';

import { useWalletAccounts } from './bliss-mode-core/hooks/useWalletAccounts';
import { useWalletTicker } from './bliss-mode-core/hooks/useWalletTicker';
import { Currency } from './bliss-mode-core/constants/currency';

export default function WebOnly() {

    const accountData = useWalletAccounts();
    const ticker = useWalletTicker();

    const resAccount = accountData.accounts.accounts.find(
        (acc) => acc.currency === Currency.TAUD,
        );

    return <Blob>
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                <path
                d="M15 9L3.75 20.25M6 18C1.5 10.5 7.5 3 20.25 3.75 21 16.5 13.5 22.5 6 18z"
                stroke={'#00A861'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            <div style={items}>Accruing earnings</div>
            <div style={bigNumbers}>${resAccount.balance.amount}<span style={animatedCounter}>{ticker}</span></div>
            <div style={items}>in TAUD</div>
        </div>
    </Blob>
}

const animatedBlob = {
    backgroundColor: '#4AD876',
    color: '#007B26',
    padding: '200px',
    borderRadius: '50%',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    width: '212px'
}

const items = {
    padding: '10px'
}

const bigNumbers = {
    fontSize: '24px',
    padding: '10px'
}

const animatedCounter = {
    color: '#FFF'
}
