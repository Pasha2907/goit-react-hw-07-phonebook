import { InfinitySpin } from 'react-loader-spinner';
import { SpinContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <SpinContainer>
      <InfinitySpin width="150" color="#4fa94d" />
    </SpinContainer>
  );
};
