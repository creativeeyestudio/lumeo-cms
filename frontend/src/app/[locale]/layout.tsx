import { ThemeProvider } from "../../../core/theme/ThemeProvider";

interface LayoutParams {
  locale: string;
}

export default async function RootLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}) {
  const { locale } = await params;
  
  return (
    <html lang={locale} dir="ltr">
      <body>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
