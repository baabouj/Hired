import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistAuth } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <PersistAuth>
          <Component {...pageProps} />
        </PersistAuth>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
