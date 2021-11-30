import {
    BlissMode,
    BlissModeOptions,
    BLISS_DEFAULTS,
 } from '../bliss-mode-core/WalletBlissMode';

 import {
    Earn,
    SeaSprayIcon,
    DuskIcon,
    DawnIcon,
 } from './WalletBlissIcons';

const windSound = (): HTMLAudioElement =>{
    const dawn = new Audio('../bliss-mode-core/sounds/wind.mp3');
    dawn.loop = true;
    return dawn;
}

const greenSound = (): HTMLAudioElement =>{
    const dawn = new Audio('../bliss-mode-core/sounds/green.mp3');
    dawn.loop = true;
    return dawn;
}

const duskSound = (): HTMLAudioElement => {
    const dawn = new Audio('../bliss-mode-core/sounds/dusk.mp3');
    dawn.loop = true;
    return dawn;
}

const dawnSound = (): HTMLAudioElement => {
    const dawn = new Audio('../bliss-mode-core/sounds/dawn.mp3');
    dawn.loop = true;
    return dawn;
}

export const allBlissModes = (theme?: any): BlissModeOptions => ({
    [BlissMode.LeafyGreen]: {
      icon: (color: string) => (
        <Earn width={32} height={32} tintColor={color || '#076C29'} />
      ),
      audio: (shouldPlay: boolean) => shouldPlay ? greenSound().play() : greenSound().pause(),
      ...BLISS_DEFAULTS[BlissMode.LeafyGreen],
    },
    [BlissMode.SeaSpray]: {
      icon: (color: string) => <SeaSprayIcon tintColor={color || '#002336'} />,
      audio: (shouldPlay: boolean) => shouldPlay ? windSound().play() : windSound().pause(),
      ...BLISS_DEFAULTS[BlissMode.SeaSpray],
    },
    [BlissMode.Dusk]: {
      icon: (color: string) => <DuskIcon tintColor={color || '#3C73C6'} />,
      audio: (shouldPlay: boolean) => shouldPlay ? duskSound().play() : duskSound().pause(),
      ...BLISS_DEFAULTS[BlissMode.Dusk],
    },
    [BlissMode.Dawn]: {
        icon: (color: string) => <DawnIcon tintColor={color || '#561A14'} />,
        audio: (shouldPlay: boolean) => shouldPlay ? dawnSound().play() : dawnSound().pause(),
        ...BLISS_DEFAULTS[BlissMode.Dawn],
    },
    // Add more modes above this and change index loop length in component below.
    [BlissMode.Empty]: {
      icon: (color: string) => <Earn width={32} height={32} tintColor={color} />,
      ...BLISS_DEFAULTS[BlissMode.Empty],
    },
  });

  export const WalletBlissMode = () => {
      
  }