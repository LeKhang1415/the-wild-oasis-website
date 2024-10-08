import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    // title: "The Wild Oasis",
    title: {
        template: "%s / The Wild Oasis",
        default: "Welcome / The Wild Oasis",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} antialiased bg-primary-950 text-gray-50 min-h-screen flex flex-col`}
            >
                <Header />
                <div className="flex-1 py-12 px-8 grid">
                    <main className="max-w-7xl mx-auto w-full">
                        <ReservationProvider>{children}</ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
