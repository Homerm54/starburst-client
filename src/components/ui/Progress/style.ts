import styled from 'styled-components';
import { ProgressColors } from './types';

const ProgressContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  height: 4px;
  z-index: 0;
  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

const BufferBar = styled.span`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: 0.4s linear 0s;
  transform-origin: left center;
  background-color: ${({ theme }) => theme.palette.info.dark};
  z-index: 1;
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

const ProgressBar = styled.span<{ $color: ProgressColors}>`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: 0.4s linear 0s;
  transform-origin: left center;
  background-color: ${({ theme, $color }) => theme.palette[$color].main};
  z-index: 2;
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

const ProgressHint = styled.div<{ $textAlign: 'center' | 'left' | 'right' }>`
  text-align: ${({ $textAlign }) => $textAlign};
`;

export { ProgressContainer, ProgressBar, BufferBar, ProgressHint };
