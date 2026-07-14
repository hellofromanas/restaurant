import "../styles/globals.css";

export const metadata = {
  title: "Restaurant",
  description: "Order food easily"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}