import Navbar from "./components/shared/Navbar";
import "./globals.css";

export const metadata = {
  title: "Fashion Website",
  description: "This is the fashion website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
