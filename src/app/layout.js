import "./globals.css";
import localFont from "next/font/local";

const Poppins = localFont({
  src: [
      {
          path: "../../public/fonts/Poppins-Regular.ttf",
          weight: "400",
          style: "normal",
      },
      {
        path: "../../public/fonts/Poppins-SemiBold.ttf",
        weight: "500",
        style: "normal",
      }

  ],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata = {
    title: "Mini Week",
    description: "Projeto Mini Week Tech",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
  return (
      <html lang="pt-BR" className={Poppins.variable}>
          <body className={Poppins.className}>
              <main>{children}</main>
          </body>
      </html>
  );
}