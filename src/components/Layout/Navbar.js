import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={inter.className}>
      <h1>Navbar</h1>
    </div>
  );
};
export default Navbar;
