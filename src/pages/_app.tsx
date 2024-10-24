import { useRedirector } from "src/hooks/useRedirector";
import '../style.css';
export default function App({ Component, pageProps }) {
  const { loading, verifyLocale } = useRedirector();

  return <Component {...pageProps} />;
}
