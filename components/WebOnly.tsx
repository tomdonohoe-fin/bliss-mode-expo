import * as React from 'react';
import { useWalletAccounts } from '../hooks/useWalletAccounts';
import Blob from './Blob';

export default function WebOnly() {

    const accountData = useWalletAccounts();

    const resAccount = accountData.accounts.accounts.find(
        (acc) => acc.currency === 'TAUD',
        );

    const [seconds, setSeconds] = React.useState(464381);

    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 123), 200);
        }
    });

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
            <div style={bigNumbers}>${resAccount.balance.amount}<span style={animatedCounter}>{seconds}</span></div>
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
