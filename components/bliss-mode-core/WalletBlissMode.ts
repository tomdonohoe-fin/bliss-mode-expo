export enum BlissMode {
    LeafyGreen,
    SeaSpray,
    Dawn,
    Dusk,
    Empty,
}

export interface BlissModeConfig {
    icon: any;
    audio?: any;
    foregroundColor: string;
    backgroundColor: string[];
    offset1: number;
    offset2: number;
}

export interface BlissModeOptions {
    [BlissMode: string]: BlissModeConfig;
}

export const BLISS_DEFAULTS = {
    [BlissMode.LeafyGreen]: {
        foregroundColor: '#096026',
        backgroundColor: ['#56DC74', '#4CD068'],
        offset1: 8,
        offset2: -8,
      },
      [BlissMode.SeaSpray]: {
        foregroundColor: '#002336',
        backgroundColor: ['#0F74EC', '#0D6ED3'],
        offset1: -100,
        offset2: 100,
      },
      [BlissMode.Dusk]: {
        foregroundColor: '#3C73C6',
        backgroundColor: ['#001330', '#001027'],
        offset1: -400,
        offset2: -425,
      },
      [BlissMode.Dawn]: {
        foregroundColor: '#540F09',
        backgroundColor: ['#F65B51', '#D95549'],
        offset1: 400,
        offset2: 425,
      },
      // Add more modes above this and change index loop length in component below.
      [BlissMode.Empty]: {
        foregroundColor: '',
        backgroundColor: [
          '',
          '',
        ],
        offset1: 0,
        offset2: 0,
      },
}
