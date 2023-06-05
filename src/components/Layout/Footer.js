import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={inter.className}>
      <h1>Footer</h1>
    </div>
  );
};
export default Footer;
