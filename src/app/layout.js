import "./globals.css";

export const metadata = {
  title: "Willkommen in Sankt Johannes",
  description: "Willkommen in Sankt Johannes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
