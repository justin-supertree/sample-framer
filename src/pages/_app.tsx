import React from "react";
import { AppProps } from "next/app";

import type { NextPageWithLayout } from "@/types/next-page";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Transition from "@/components/Transition";

type AppProviderProps = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppProviderProps) => {
  const { dehydratedState } = pageProps as {
    dehydratedState: DehydratedState;
  };
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Transition>{getLayout(<Component {...pageProps} />)}</Transition>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
