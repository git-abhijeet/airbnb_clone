import ClientOnly from './components/ClientOnly'
// import Modal from './components/modals/Modal'
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal';
import Navbar from './components/navbar/Navbar'
import './globals.css'
// import { Nunito } from 'next/font/google'
import Head from 'next/head';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
// import useRegisterModal from './hooks/useRegisterModal';
// import { Provider } from 'zustand';

// const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    // <Provider {...useRegisterModal} >
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <body className={font.className}> */}
      <body>
        <ClientOnly>
          {/* <Modal actionLabel='Submit' isOpen title='Hello world' /> */}
          <ToasterProvider />
          {/* <Provider {...useRegisterModal} /> */}
          <LoginModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
    // </Provider>
  )
}
