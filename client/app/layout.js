import ReduxProvider from '@/redux/ReduxProvider';
import Header from './components/Header';
import './globals.css';




export const metadata = {
  title: 'Moz Aluga',
  description: 'Sistema de alugar casas'
}

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
    <html lang="en">
      <body>
        <Header/>
      {children}
      </body>
    </html>
    </ReduxProvider>
  )
}
