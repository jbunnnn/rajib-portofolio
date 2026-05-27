import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: '--font-jetbrainsMono',
  display: 'swap', // Optimize font loading
});

export const metadata = {
  title: "Rajib Zidan- Cybersecurity & Cloud Enthusiast",
  description: "Portfolio website of Rajib Zidan - Computer Engineering student specializing in Cybersecurity, Cloud Infrastructure, and DevOps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable} suppressHydrationWarning>
        <Header />
        
        {/* Main content wrapper with padding for fixed header */}
        <main className="pt-24 xl:pt-28">
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}

// Example dialog structure (if needed)
function ExampleDialog() {
  return (
    <Dialog>
      <DialogContent>
        <DialogTitle>
          <VisuallyHidden>Dialog Title</VisuallyHidden>
        </DialogTitle>
        {/* ...existing dialog content... */}
      </DialogContent>
    </Dialog>
  );
}
