import React, { useEffect, useRef } from 'react';
// import { Animated } from 'react-native';
// import { useTheme } from 'ui';
// import { allBlissModes, BlissMode } from './WalletBlissMode';

import { BlissIcon, BlissIconSvg } from '../bliss-mode-core/WalletBlissIcons';

// const BlissIcon = ({ icon, blissMode, index }: BlissIcon) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     if (blissMode === index) {
//       fadeAnim.setValue(0);
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         useNativeDriver: true,
//         delay: 250,
//       }).start();
//     } else {
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         useNativeDriver: true,
//         delay: 250,
//       }).start();
//     }
//   }, [blissMode]);

//   return (
//     <Animated.View style={{ opacity: fadeAnim, paddingLeft: 16 }}>
//       {icon()}
//     </Animated.View>
//   );
// };

// export const BlissIconSlider = ({ blissMode }: { blissMode: BlissMode }) => {
//   const { theme } = useTheme();

//   // Options for each bliss mode.
//   const blissModes = allBlissModes();

//   return (
//     <Animated.View
//       style={{
//         flexDirection: 'row',
//         width: (Object.keys(blissModes).length - 1) * 32,
//         height: 32,
//         marginLeft: 56,
//       }}
//     >
//       <Animated.View
//         style={{
//           flexDirection: 'row',
//           position: 'absolute',
//           left: blissMode * -48,
//         }}
//       >
//         {Object.values(blissModes).map((mode, index) => (
//           <BlissIcon
//             key={index}
//             icon={mode.icon}
//             index={index}
//             blissMode={blissMode}
//           />
//         ))}
//       </Animated.View>
//     </Animated.View>
//   );
// };

export function DawnIcon({
  tintColor = '#561A14',
  width = 32,
  height = 32,
}: BlissIconSvg) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        d="M11.6 7.375l-.957-2.31M5.376 13.6l-2.31-.957M26.625 13.6l2.31-.957M20.4 7.375l.957-2.31M30 20H2M26 25H6M8.77 20a7.5 7.5 0 1114.46 0"
        stroke={tintColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SeaSprayIcon({
  tintColor = '#0B4B6F',
  width = 32,
  height = 32,
}: BlissIconSvg) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        d="M5 9s5-4 11 0 11 0 11 0M5 16s5-4 11 0 11 0 11 0M5 23s5-4 11 0 11 0 11 0"
        stroke={tintColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DuskIcon({
  tintColor = '#7E5525',
  width = 32,
  height = 32,
}: BlissIconSvg) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        d="M27 14V8M30 11h-6M21 3v4M23 5h-4M27.083 19.08A11.504 11.504 0 0112.919 4.918h0a11.502 11.502 0 1014.164 14.164h0z"
        stroke={tintColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Earn = ({
    width = 24, height = 24, tintColor, ...props
  }: any) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 9L3.75 20.25M6 18C1.5 10.5 7.5 3 20.25 3.75 21 16.5 13.5 22.5 6 18z"
        stroke={tintColor || '#00A861'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );