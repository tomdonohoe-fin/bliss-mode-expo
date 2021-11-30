import * as React from 'react';
import { Text } from 'react-native';
import { useWalletAccounts } from '../hooks/useWalletAccounts';

export default function MobileOnly() {

    const accountData = useWalletAccounts();

    const resAccount = accountData.accounts.accounts.find(
        (acc) => acc.currency === 'TAUD',
        );

    console.log(resAccount.balance.amount);
    console.log(accountData);

    return <Text>balance: {resAccount.balance.amount}</Text>

}
