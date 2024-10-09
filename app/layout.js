import "./globals.css";

export const metadata = {
  title: "Bakery Shop",
  description: "Welcome to Bakery Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
