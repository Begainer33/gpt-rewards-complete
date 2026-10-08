import './globals.css';

export const metadata = {
  title: 'GPT Rewards Platform',
  description: 'Rewarding users with real GPT-powered earning opportunities.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
