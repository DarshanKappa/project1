import '../styles/globals.css'
import ThemeContext from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  );
}

export default MyApp
