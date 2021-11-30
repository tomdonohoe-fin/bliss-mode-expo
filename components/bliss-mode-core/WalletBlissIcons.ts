import { BlissMode } from './WalletBlissMode';

export interface BlissIcon {
  icon: () => JSX.Element;
  blissMode: BlissMode;
  index: number;
}

export interface BlissIconSvg {
  tintColor?: string;
  width?: number;
  height?: number;
}
