import { Copyright } from "./components/shared/Copyright";
import { FooterContainer } from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "We5ive",
  description: "This is the fashion website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
          <FooterContainer />
          <Copyright />
        </div>
      </body>
    </html>
  );
}
