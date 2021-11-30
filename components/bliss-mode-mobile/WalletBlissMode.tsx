import * as React from 'react';

import {
    BlissMode, 
    BlissModeOptions,
    BLISS_DEFAULTS,
} from '../bliss-mode-core/WalletBlissMode';
import {
    Earn,
    DawnIcon,
    SeaSprayIcon,
    DuskIcon,
} from './WalletBlissIcon';

// import {
//     useFocusEffect,
//     useIsFocused,
//     useRoute,
//   } from '@react-navigation/native';
// //   import { useWalletAccounts } from 'features/common/hooks';
// //   import { FiatCurrency } from 'features/oldWallet/Wallet.constants';
//   import {
//     getGoBackSafeParent,
//     useAppStateChange,
//     useExperimentalLayoutAnimation,
//     useLoadingOpacity,
//   } from 'hooks';
//   import React, { useEffect, useState, useRef } from 'react';
//   import {
//     Animated,
//     LayoutAnimation,
//     Pressable,
//     Dimensions,
//   } from 'react-native';
//   import { SharedElement } from 'react-navigation-shared-element';
//   import {
//    makeStyles, NavigationHeader, ThemeInterface, useTheme,
//   } from 'ui';
//   import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
//   import Svg, { Path } from 'react-native-svg';
//   import { getStatusBarHeight } from 'react-native-status-bar-height';
//   import { Icon } from 'react-native-elements';
//   import { Earn } from 'components/Icon';
//   import RNSound from 'react-native-sound';
//   import { useKeepAwake } from '@sayem314/react-native-keep-awake';
//   import { useWalletInterestTicker } from 'features/common/hooks/useWalletInterestTicker';
//   import { Blob } from '../WalletBlob/WalletBlob';
//   import { AccruingTickerLarge } from './WalletAccruingTickerLarge';
//   import { BlobCircle } from '../WalletBlob/BlobCircle';
//   import {
//     SeaSprayIcon,
//     DuskIcon,
//     DawnIcon,
//     BlissIconSlider,
//   } from './WalletBlissIcons';
  
//   export enum BlissMode {
//     LeafyGreen,
//     SeaSpray,
//     Dawn,
//     Dusk,
//     Empty,
//   }
  
//   interface BlissModeConfig {
//     icon: any;
//     audio?: RNSound;
//     foregroundColor: string;
//     backgroundColor: string[];
//     offset1: number;
//     offset2: number;
//   }
  
//   interface BlissModeOptions {
//     [BlissMode: string]: BlissModeConfig;
//   }
  
//   RNSound.setCategory('Playback');
  
//   const windSound = new RNSound('wind.mp3', RNSound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the wind sound', error);
//       return;
//     }
//     // Successfully loaded.
//     windSound.setNumberOfLoops(-1);
//     console.log(
//       `wind sound loaded: ${windSound.getDuration()}, ${windSound.getNumberOfChannels()} channels`,
//     );
//   });
//   const earnSound = new RNSound('green.mp3', RNSound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the green sound', error);
//       return;
//     }
//     // Successfully loaded.
//     earnSound.setNumberOfLoops(-1);
//     console.log(
//       `green sound loaded: ${earnSound.getDuration()}, ${earnSound.getNumberOfChannels()} channels`,
//     );
//   });
//   const dawnSound = new RNSound('dawn.mp3', RNSound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the dawn sound', error);
//       return;
//     }
//     // Successfully loaded.
//     dawnSound.setNumberOfLoops(-1);
//     console.log(
//       `dawn sound loaded: ${dawnSound.getDuration()}, ${dawnSound.getNumberOfChannels()} channels`,
//     );
//   });
//   const duskSound = new RNSound('dusk.mp3', RNSound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('failed to load the dusk sound', error);
//       return;
//     }
//     // Successfully loaded.
//     duskSound.setNumberOfLoops(-1);
//     console.log(
//       `dusk sound loaded: ${duskSound.getDuration()}, ${duskSound.getNumberOfChannels()} channels`,
//     );
//   });
  
  export const allBlissModes = (): BlissModeOptions => ({
    [BlissMode.LeafyGreen]: {
      icon: (color: string) => (
        <Earn width={32} height={32} tintColor={color || '#076C29'} />
      ),
    //   audio: earnSound,
      audio: 'someAudio',
      ...BLISS_DEFAULTS[BlissMode.LeafyGreen],
    },
    [BlissMode.SeaSpray]: {
      icon: (color: string) => <SeaSprayIcon tintColor={color || '#002336'} />,
    //   audio: windSound,
      audio: 'someAudio',
      ...BLISS_DEFAULTS[BlissMode.SeaSpray],
    },
    [BlissMode.Dusk]: {
      icon: (color: string) => <DuskIcon tintColor={color || '#3C73C6'} />,
    //   audio: duskSound,
      audio: 'someAudio',
      ...BLISS_DEFAULTS[BlissMode.Dusk],
    },
    [BlissMode.Dawn]: {
      icon: (color: string) => <DawnIcon tintColor={color || '#561A14'} />,
    //   audio: dawnSound,
      audio: 'someAudio',
      ...BLISS_DEFAULTS[BlissMode.Dawn],
    },
    // Add more modes above this and change index loop length in component below.
    [BlissMode.Empty]: {
      icon: (color: string) => <Earn width={32} height={32} tintColor={color} />,
      ...BLISS_DEFAULTS[BlissMode.Empty],
    },
  });
  
//   export const WalletBlissMode = () => {
//     const isFocused = useIsFocused();
//     const route: any = useRoute();
//     const { theme } = useTheme();
//     const styles = useStyles();
  
//     const [modeChangeEnabled, setModeChangeEnabled] = useState<boolean>(true);
//     const [blissMode, setBlissMode] = useState<number>(0);
//     const [prevMode, setPrevMode] = useState<number>(0);
//     const [prevModeForText, setPrevModeForText] = useState<number>(0);
//     const [isPlayingSound, setIsPlayingSound] = useState<boolean>(true);
//     const [accountCurrency] = useState(
//       route.params?.currency ?? FiatCurrency.AUD,
//     );
//     const [accountBalance] = useState(route.params?.balance);
//     const [account, setAccount] = useState<any>();
  
//     // Options for each bliss mode.
//     const blissModes = allBlissModes(theme);
  
//     // Keep the screen on for this screen only, meditationnn.
//     useKeepAwake();
  
//     useExperimentalLayoutAnimation(true);
  
//     const { opacity } = useLoadingOpacity([], 400, 0, true, 400);
//     const { opacity: circleOpacity } = useLoadingOpacity([], 400, 0, true, 400, 0.5);
//     const background = useRef(new Animated.Value(0)).current;
//     const iconAnim = useRef(new Animated.Value(0)).current;
//     const textColorAnim = useRef(new Animated.Value(0)).current;
  
//     const goBackSafeParent = getGoBackSafeParent();
//     const { width, height } = Dimensions.get('screen');
  
//     const balance = account?.available?.amount || accountBalance;
//     const hasBalance = balance && Number(balance) && Number(balance) > 0;
  
//     const HEADER_HEIGHT = getStatusBarHeight() + theme.spacing.xxxlarge;
  
//     // Get ticking interest.
//     const {
//       loading,
//       formattedAccruedInterest,
//       isGreaterThanCent,
//     } = useWalletInterestTicker({
//       hasBalance,
//       stakeId: account?.stake?.id,
//     });
  
//     // Pause sounds when a member leaves the app.
//     useAppStateChange((appState, nextAppState) => {
//       if (
//         appState.current.match(/inactive|background/)
//         && nextAppState === 'active'
//       ) {
//         // Do nothing.
//       } else if (nextAppState.match(/inactive|background/)) {
//         blissModes[blissMode].audio?.pause();
//         setIsPlayingSound(false);
//         RNSound.setActive(false);
//       }
  
//       // eslint-disable-next-line
//       // @ts-ignore
//       // eslint-disable-next-line no-param-reassign
//       appState.current = nextAppState;
//     });
  
//     // Initialise and stop sounds on focus and unfocus of screen.
//     useFocusEffect(
//       React.useCallback(() => {
//         blissModes[blissMode].audio?.setVolume(1);
//         playPause();
  
//         return () => {
//           setIsPlayingSound(false);
//           Object.values(blissModes).map((mode) => mode.audio?.pause());
//         };
//       }, []),
//     );
  
//     // Start/stop the audio, maintained across all scenes.
//     const playPause = () => {
//       if (blissModes[blissMode].audio?.isPlaying()) {
//         blissModes[blissMode].audio?.pause();
//         setIsPlayingSound(false);
//       } else {
//         setIsPlayingSound(true);
//         blissModes[blissMode].audio?.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//         });
//       }
//     };
  
//     useEffect(() => {
//       if (hasBalance) {
//         setBlissMode(0);
//       } else {
//         setBlissMode(Object.keys(blissModes).length - 1);
//       }
//     }, [hasBalance]);
  
//     const {
//       fetchAccountsData,
//       startPollingAccountsData,
//       stopPollingAccountsData,
//     } = useWalletAccounts({
//       onSuccess: (data) => {
//         const resAccount = data.accounts.accounts.find(
//           (acc) => acc.currency === accountCurrency,
//         );
//         if (accountCurrency && resAccount) {
//           setAccount(resAccount);
//         }
//       },
//     });
  
//     useEffect(() => {
//       if (isFocused) {
//         fetchAccountsData();
//         startPollingAccountsData(5000);
//       }
  
//       return () => {
//         stopPollingAccountsData();
//       };
//     }, [isFocused, account?.id]);
  
//     // Animate text color.
//     const foregroundColor = textColorAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: [
//         blissModes[prevModeForText].foregroundColor,
//         blissModes[blissMode].foregroundColor,
//       ],
//     });
  
//     const onPressBg = () => {
//       if (!hasBalance || !modeChangeEnabled) {
//         return;
//       }
//       // Stop previous.
//       blissModes[blissMode].audio?.pause();
//       iconAnim.setValue(0);
//       background.setValue(0);
//       textColorAnim.setValue(0);
//       ReactNativeHapticFeedback.trigger('impactLight');
//       LayoutAnimation.configureNext({
//         duration: 1200,
//         create: { type: 'linear', property: 'opacity' },
//         update: {
//           type: 'spring',
//           springDamping: 0.9,
//           delay: 350,
//           initialVelocity: 0.25,
//         },
//         delete: { type: 'linear', property: 'opacity' },
//       });
//       if (blissMode + 1 < Object.keys(blissModes).length - 1) {
//         setBlissMode((mode) => mode + 1);
//         // Play next audio if not muted.
//         if (blissModes[blissMode + 1].audio !== undefined && isPlayingSound) {
//           blissModes[blissMode + 1].audio?.play((success) => {
//             if (success) {
//               console.log('successfully finished playing');
//             } else {
//               console.log('playback failed due to audio decoding errors');
//             }
//           });
//         }
//       } else {
//         setBlissMode(0);
//         // Play first audio if not muted.
//         if (blissModes[0].audio !== undefined && isPlayingSound) {
//           blissModes[0].audio?.play((success) => {
//             if (success) {
//               console.log('successfully finished playing');
//             } else {
//               console.log('playback failed due to audio decoding errors');
//             }
//           });
//         }
//       }
//       setPrevMode(blissMode);
//       setPrevModeForText(blissMode);
//       setModeChangeEnabled(false);
//       Animated.parallel([
//         Animated.timing(background, {
//           toValue: 1,
//           useNativeDriver: true,
//           duration: 600,
//           delay: 250,
//         }),
//         Animated.timing(iconAnim, {
//           toValue: 1,
//           useNativeDriver: true,
//           duration: 600,
//           delay: 250,
//         }),
//         Animated.timing(textColorAnim, {
//           toValue: 1,
//           useNativeDriver: false,
//           duration: 800,
//           delay: 0,
//         }),
//       ]).start(() => {
//         setModeChangeEnabled(true);
//       });
//     };
  
//     return (
//       <Animated.View
//         style={{
//           backgroundColor: blissModes[blissMode].backgroundColor[0],
//           ...styles.container,
//         }}
//       >
//         {/* Absolute Animated Navigation Header */}
//         <Animated.View
//           style={{
//             opacity,
//             ...styles.navigationHeaderAnimated,
//           }}
//         >
//           <NavigationHeader
//             isModal
//             containerStyle={{
//               ...styles.navigationHeader,
//               marginTop: getStatusBarHeight() - theme.spacing.regular,
//             }}
//             leftComponent={(
//               <Icon
//                 underlayColor={blissModes[blissMode].backgroundColor[0]}
//                 onPress={() => {
//                   goBackSafeParent?.goBack();
//                   ReactNativeHapticFeedback.trigger('contextClick');
//                 }}
//                 name="x"
//                 type="feather"
//                 hitSlop={{
//                   bottom: 10,
//                   left: 10,
//                   right: 10,
//                   top: 10,
//                 }}
//                 containerStyle={{ width: 30, marginLeft: -2 }}
//                 color={blissModes[blissMode].foregroundColor}
//               />
//             )}
//             rightComponent={
//               hasBalance ? (
//                 <Pressable
//                   hitSlop={{
//                     top: 10,
//                     bottom: 10,
//                     left: 10,
//                     right: 10,
//                   }}
//                   style={({ pressed }) => ({
//                     opacity: pressed ? 0.75 : 1,
//                   })}
//                   onPress={() => {
//                     playPause();
//                     ReactNativeHapticFeedback.trigger('contextClick');
//                   }}
//                 >
//                   <Sound
//                     active={isPlayingSound}
//                     tintColor={blissModes[blissMode].foregroundColor}
//                   />
//                 </Pressable>
//               ) : null
//             }
//           />
//         </Animated.View>
  
//         {/* Whole coloured bliss screen */}
//         <Pressable style={{ flex: 1 }} onPress={onPressBg}>
//           {/* Background color element (for shared element animation) */}
//           <SharedElement id="bliss.background">
//             <BlobCircle
//               prevColor={blissModes[prevMode].backgroundColor[0]}
//               color={blissModes[blissMode].backgroundColor[0]}
//               width={width}
//               height={height - HEADER_HEIGHT}
//               size={width * 3}
//             />
//           </SharedElement>
  
//           {/* First animated blob */}
//           <Animated.View
//             style={{
//               top: blissModes[blissMode].offset1 - HEADER_HEIGHT,
//               ...styles.blobContainer,
//               opacity: circleOpacity,
//             }}
//           >
//             <Blob
//               key={0}
//               size={width * 1.25}
//               color={blissModes[blissMode].backgroundColor[1]}
//               width={width * 1}
//               height={height}
//               prevColor={blissModes[prevMode].backgroundColor[1]}
//             />
//           </Animated.View>
  
//           {/* Second animated blob */}
//           <Animated.View
//             style={{
//               top: blissModes[blissMode].offset2 - HEADER_HEIGHT,
//               ...styles.blobContainer,
//               opacity: circleOpacity,
//             }}
//           >
//             <Blob
//               key={0}
//               size={width * 1.25}
//               color={blissModes[blissMode].backgroundColor[1]}
//               width={width * 1}
//               height={height}
//               prevColor={blissModes[prevMode].backgroundColor[1]}
//             />
//           </Animated.View>
  
//           {/* Absolute Ticker */}
//           <SharedElement
//             id="bliss.ticker"
//             style={{
//               top: -HEADER_HEIGHT - theme.spacing.xxxlarge,
//               ...styles.tickerContainer,
//             }}
//           >
//             <AccruingTickerLarge
//               scale={1.25}
//               icon={<BlissIconSlider blissMode={blissMode} />}
//               foregroundColor={foregroundColor}
//               accountCurrency={accountCurrency}
//               loading={loading}
//               formattedAccruedInterest={formattedAccruedInterest}
//               isGreaterThanCent={isGreaterThanCent}
//               balance={balance}
//             />
//           </SharedElement>
//         </Pressable>
//       </Animated.View>
//     );
//   };
  
//   const useStyles = makeStyles((theme) => ({
//     container: {
//       flex: 1,
//     },
//     navigationHeaderAnimated: {
//       zIndex: 99,
//       elevation: 99,
//     },
//     navigationHeader: {
//       paddingTop: theme.spacing.xxlarge,
//       left: 0,
//       width: '100%',
//       backgroundColor: 'transparent',
//     },
//     tickerContainer: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       bottom: 0,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     blobContainer: {
//       opacity: 0.6,
//       position: 'absolute',
//     },
//   }));
  
//   function Sound({
//    active, tintColor = '#561A14', width = 24, height = 24,
//   }) {
//     return (
//       <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
//         {active ? (
//           <Path
//             d="M20.52 7.228a6.75 6.75 0 010 9.545M7.5 15.75H3a.75.75 0 01-.75-.75V9A.75.75 0 013 8.25h4.5L14.25 3v18L7.5 15.75zM7.5 8.25v7.5M17.868 9.879a3.002 3.002 0 010 4.242"
//             stroke={tintColor}
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         ) : (
//           <Path
//             d="M17.998 9.75v4.5M20.998 8.25v7.5M4.5 3.75l15 16.5M10.515 5.906L14.25 3v7.015M14.25 14.475V21L7.5 15.75H3a.75.75 0 01-.75-.75V9A.75.75 0 013 8.25h5.59"
//             stroke={tintColor}
//             strokeWidth={1.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         )}
//       </Svg>
//     );
//   }
  