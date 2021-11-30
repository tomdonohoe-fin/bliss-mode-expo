import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useWalletAccounts } from '../bliss-mode-core/hooks/useWalletAccounts';
import { useWalletTicker } from '../bliss-mode-core/hooks/useWalletTicker';
import { Currency } from '../bliss-mode-core/constants/currency';

export default function WalletBliss() {
    const accountData = useWalletAccounts();
    const ticker = useWalletTicker();

    const resAccount = accountData.accounts.accounts.find(
        (acc) => acc.currency === Currency.TAUD,
        );

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                    <Path
                    d="M15 9L3.75 20.25M6 18C1.5 10.5 7.5 3 20.25 3.75 21 16.5 13.5 22.5 6 18z"
                    stroke={'#00A861'}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </Svg>
                <Text style={styles.items}>Accruing earnings</Text>
                <Text style={styles.bigNumbers}>${resAccount.balance.amount}<Text style={styles.animatedCounter}>{ticker}</Text></Text>
                <Text style={styles.items}>in TAUD</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 300,
        borderRadius: 300 / 2,
        backgroundColor: '#4AD876',
        color: '#007B26',
        padding: 0,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    details: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        padding: 0
    },
    bigNumbers: {
        fontSize: 30,
        padding: 10
    },
    animatedCounter: {
        color: '#FFF'
    }
});
