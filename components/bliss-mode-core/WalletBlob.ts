export interface BlobProps {
    width: number;
    height: number;
    color: string;
    size?: number;
    translucent?: boolean;
    isBreathing?: boolean;
    prevColor?: string;
  }
  
  /** Duration of breathing for each circle.
   *
   * **WARNING:**
   * Please do not change the size and duration constants without careful testing + a designer approval.
   */
  export const DURATION = 3000;