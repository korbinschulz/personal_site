"use client";
import style from "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Nav />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "linear" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
