import { DM_Sans } from 'next/font/google';
import PropTypes from 'prop-types';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Berjuang',
  description: 'Solusi Cerdas untuk Keuangan UMKM Anda!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
