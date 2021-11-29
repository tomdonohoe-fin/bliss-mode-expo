export interface BlobCircleProps {
    moves?: 'up' | 'down' | 'left' | 'right' | undefined;
    duration?: number;
    width: number;
    height: number;
    size?: number;
    color: string;
    prevColor?: string;
    style?: any;
  }
  
  /** Scale the circle's movement distance back and forth.
   * (**SEE WARNING BELOW BEFORE CHANGING**)
   */
  export const SCALE_FACTOR = 0.05;
  
  // Default size of the circle (w x h).
  export const DEFAULT_SIZE = 275;
  