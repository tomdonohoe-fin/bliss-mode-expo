import { Currency } from './constants/currency';

export interface AccruingTickerLargeProps {
  foregroundColor?: any;
  balance: string | number;
  accountCurrency: Currency;
  scale?: number | string;
  icon?: JSX.Element;
  loading?: boolean;
  isGreaterThanCent: boolean;
  formattedAccruedInterest: {
    twoDecimalPart: string;
    sixDecimalPart: string;
  };
}
