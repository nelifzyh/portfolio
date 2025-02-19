import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "NeliPortfolio",
  description: "Check it Out!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='bg-black'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
