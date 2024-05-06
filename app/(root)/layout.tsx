import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Priyanshu', lastName: 'Chourasiya',}
  return (
    <main className="flex h-screen w-full font-inter">
        {/* <Sidebar user = {loggedIn} /> */}
        {/* <div className="flex size-full flex-col">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user ={loggedIn} />
          </div>
       
        </div> */}' {children}'
    </main>
  );
}
