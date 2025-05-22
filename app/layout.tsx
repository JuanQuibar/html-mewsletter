import '@/app/ui/globals.css'
import { serif } from './ui/fonts';
import { SelectedArticlesProvider } from './context/SelectedArticlesContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.className} antialiased`}>
        <SelectedArticlesProvider>
          {children}
        </SelectedArticlesProvider>
        </body>
    </html>
  );
}
