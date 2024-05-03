import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ManagedDialog } from '@/components/common/managed-dialog/managed-dialog';
import { DialogProvider } from '@/components/common/managed-dialog/dialog.context';
import { QueryClientProvider, queryClient } from '@/components/providers/query-client/query-client.provider';
import dynamic from 'next/dynamic';

const Toaster = dynamic(() => import('@/components/ui-kit/sonner').then(({ Toaster }) => Toaster));

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <DialogProvider>
            {children}
            <ManagedDialog />
            <Toaster position="bottom-center" />
          </DialogProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
