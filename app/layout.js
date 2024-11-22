import { FooterContainer } from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Fashion Website",
  description: "This is the fashion website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FooterContainer />
      </body>
    </html>
  );
}
