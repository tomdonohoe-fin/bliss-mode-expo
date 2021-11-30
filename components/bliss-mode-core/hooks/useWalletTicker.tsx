import * as React from 'react';

export const useWalletTicker = () => {
    const [seconds, setSeconds] = React.useState(464381);

    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds + 123), 200);
        }
    });
  
    return seconds;
  };