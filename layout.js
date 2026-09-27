import './globals.css';

export const metadata = {
  title: 'الحسامي نيوز | أخبار اليمن لحظة بلحظة',
  description: 'منصة الحسامي نيوز للأخبار والتطورات اليمنية.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
