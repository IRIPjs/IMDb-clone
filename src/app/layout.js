import "./globals.css";
import Header from "./component/Header";



export const metadata = {
  title: "IMDb Clone",
  description: "this is IMDb website clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
