import "./globals.css";

export const metadata = {
  title: "NebraskaCoder",
  description: "Official NebraskaCoder website for Gabriel Graves.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full bg-gray-100">{children}</body>
    </html>
  );
}
