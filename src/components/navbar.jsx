import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { navlinks } from "../Data/navbarmenu";
import { useAuth } from "../Auth/Auth";
import Footer from "./footer"
import Dropdownmenu from "./dropdown";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    // open dropdownmenu user login
    const [usermenu, setusermenu] = useState(false);
    const toggleusermenu = () => {
        setusermenu(!usermenu)
    }
    return (
        <>
            <motion.nav className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to="/">
                    <img className="h-9 w-auto" src="./assets/logo.svg" width={138} height={36} alt="logo" />
                </Link>

                <div className="hidden lg:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-slate-300 transition">
                            {link.text}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:block space-x-3">
                    {user ?

                        <div className="hidden lg:block space-x-3">
                            <div className="relative">
                                <button
                                    onClick={toggleusermenu}
                                    className="hover:bg-slate-300/20 transition px-6 py-2  rounded-md active:scale-95">
                                    <Link to="/">{user.firstname + " " + user.lastname}</Link>
                                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {usermenu && (
                                    <>
                                        <Dropdownmenu />
                                        
                                    </>
                                )}
                                

                            </div>
                        </div> :

                        <>
                            <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-md active:scale-95">
                                <Link to="/login">เข้าสู่ระบบ</Link>
                            </button>
                            <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-md active:scale-95">
                                <Link to="/register">สมัครสมาชิก</Link>
                            </button>

                        </>
                    }
                </div>
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition">
                    <MenuIcon className="size-6.5" />
                </button>
            </motion.nav>
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* เมนูแสดงบนMobile */}
                {navlinks.map((link) => (
                    <Link key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)}>
                        {link.text}
                    </Link>
                ))}
                {user ?
                    // Flex จัดลำดับการแสดงของ menu mobile เงื่อนไขจริง
                    <div className="flex flex-col items-center justify-center">
                        <button className="hover:bg-slate-300/20 transition px-6 py-2 active:scale-95">
                            <Link to="/">{user.firstname + user.lastname}</Link>
                        </button>
                        <button onClick={logout} className="hover:bg-slate-300/20 transition px-6 py-2 active:scale-95">
                            ออกจากระบบ
                        </button>
                    </div> :
                    // Flex จัดลำดับการแสดงของ menu mobile เงื่อนไขเท็จแสดงเมนูสมัครและเข้าสู่ระบบ
                    <div className="flex flex-col items-center justify-center">
                        <button className="hover:bg-slate-300/20 transition px-6 py-2 active:scale-95">
                            <Link to="/login">เข้าสู่ระบบ</Link>
                        </button>
                        <button className="hover:bg-slate-300/20 transition px-6 py-2 active:scale-95">
                            <Link to="/register">สมัครสมาชิก</Link>
                        </button>
                    </div>
                }
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
            <div>
                <Outlet />
                <Footer />
            </div>
        </>
    );
}