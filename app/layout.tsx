import Header from '@/components/Header';
import '@/styles/global.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
