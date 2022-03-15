import Console from "lib/Console";
import { BufferBar, ProgressBar, ProgressContainer, ProgressHint } from "./style";
import { ProgressProps } from "./types";

const TOTAL = 100; // 100 percent progress bar

function Progress({ buffer, value, hint, textPosition = 'right', color = 'success', ...rest }: ProgressProps): JSX.Element {
  Console.log(value - TOTAL);
  
  return (
    <div>
      <ProgressContainer {...rest}>
        <ProgressBar $color={color} style={{ transform: `translateX(${value - TOTAL}%)` }} />
        {typeof buffer === 'number' && <BufferBar style={{ transform: `translateX(${buffer - TOTAL}%)` }} />}
      </ProgressContainer>
      
      {hint && <ProgressHint $textAlign={textPosition}>{hint}</ProgressHint>}
    </div>
  );
}

export { Progress };
