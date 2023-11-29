import { Suspense } from "react";
import "./globals.css";
import {Inter} from "next/font/google"
import NavigationEvents from "airbnb/components/common/NavigationEvents";
const inter = Inter({subsets:["latin"]})

export const metadata = {
  title:"Syrenta",
};

export default function RootLayout({children}) {
  return (
  <html lang="en"> 
  
  
  <body className={inter.className}>{children} 
  
    <Suspense fallback={null}>
      <NavigationEvents/>
    </Suspense>
 
   </body>
  </html>
  );
};
