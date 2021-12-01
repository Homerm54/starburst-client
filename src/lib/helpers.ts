import { replaceColor as basic } from 'lottie-colorify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LottieObject = any;
type replaceColorsProps = {
  sourceColors: string | string[];
  targetColors: string | string[];
  lottieObj: LottieObject;
}
export const replaceColors = ({ sourceColors, targetColors, lottieObj }: replaceColorsProps): LottieObject => {
  if (Array.isArray(sourceColors)) {
    if (!Array.isArray(targetColors)) throw Error('Both sourceColors and targetColors must be arrays or strings');
    if(sourceColors.length !== targetColors.length) throw Error('Both sourceColors and targetColors must have the same length');

    let lottie = lottieObj;
    sourceColors.forEach((color, ix) => {
      lottie = basic(color, targetColors[ix], lottie);
    });

    return lottie;
  } else {
    if (Array.isArray(targetColors)) throw Error('Both sourceColors and targetColors must be arrays or strings');
    
    return basic(sourceColors, targetColors, lottieObj);
  }
}