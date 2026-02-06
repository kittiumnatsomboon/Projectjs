import { Link } from "react-router"
import { dropdownmenu } from "../Data/dropdown";
import { useAuth } from "../Auth/Auth";
import { useState } from "react";
export default function Dropdownmenu() {
    const { logout } = useAuth();
    return (
        <>
            <div className="absolute rounded text-center">
                <ul>
                    {dropdownmenu.map((link, index) => (
                        <li key={link.id} >
                            <Link to={link.href} className="block p-2">
                                {link.text}
                            </Link>
                            <hr />

                        </li>
                    ))}
                    <Link onClick={logout} className="block p-2 text-center">ออกจากระบบ</Link>
                </ul>
            </div>
        </>
    )
}