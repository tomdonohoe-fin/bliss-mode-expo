import * as React from 'react';
import { View, Text } from 'react-native';
import { useWalletAccounts } from '../hooks/useWalletAccounts';

import { BlissIconSlider } from '../components/bliss-mode-mobile/WalletBlissIcon';
import { BlissMode } from './bliss-mode-core/WalletBlissMode';

export default function MobileOnly() {    
    <BlissIconSlider blissMode={BlissMode.LeafyGreen} />

    const accountData = useWalletAccounts();

    const resAccount = accountData.accounts.accounts.find(
        (acc) => acc.currency === 'TAUD',
        );

    console.log(resAccount.balance.amount);
    console.log(accountData);

    return (
        <View>
        <Text>balance: {resAccount.balance.amount}</Text>
        <BlissIconSlider blissMode={BlissMode.LeafyGreen} />
        </View>
    )

}
