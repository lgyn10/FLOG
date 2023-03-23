import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

// RecoilRoot 로 감싸면 Cannot find module 'react-dom' 에러남
