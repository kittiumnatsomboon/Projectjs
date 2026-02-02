import { Link } from "react-router";
import * as Yup from 'yup';

// ตรวจสอบฟอร์มสมัครสมาชิก
const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'ความยาวตัวอักษรต่ำสุด 2 ตัวอักษร')
        .max(50, 'ความยาวตัวอักษรสูงสุด 50 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
    lastname: Yup.string()
        .min(2, 'ความยาวตัวอักษรต่ำสุด 2 ตัวอักษร')
        .max(50, 'ความยาวตัวอักษรสูงสุด 50 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
    email: Yup.string()
        .email('รูปแบบอีเมลล์ไม่ถูกต้อง')
        .required('กรุณาระบุข้อมูล'),
    password: yup
        .string()
        .required('กรุณาระบุข้อมูล')
        .min(8, 'ความยาวตัวอักษรต่ำสุด 8 ตัวอักษร')
        .matches(/[a-z]+/, 'กรุณาระบุข้อมูลอักษรตัวเล็กอย่างน้อย 1 ตัวอักษร')
        .matches(/[A-Z]+/, 'กรุณาระบุข้อมูลอักษรตัวใหญ่อย่างน้อย 1 ตัวอักษร')
        .matches(/\d+/, 'กรุณาระบุข้อมูลตัวเลขอย่างน้อย 1 ตัวอักษร')
        .matches(/[@$!%*#?&]+/, 'กรุณาระบุข้อมูลอักษรพิเศษอย่างน้อย 1 ตัวอักษร'),
    confirmpassword: yup
        .string()
        .string()
        .required('กรุณาระบุข้อมูล')
        .min(8, 'ความยาวตัวอักษรต่ำสุด 8 ตัวอักษร')
        .matches(/[a-z]+/, 'กรุณาระบุข้อมูลอักษรตัวเล็กอย่างน้อย 1 ตัวอักษร')
        .matches(/[A-Z]+/, 'กรุณาระบุข้อมูลอักษรตัวใหญ่อย่างน้อย 1 ตัวอักษร')
        .matches(/\d+/, 'กรุณาระบุข้อมูลตัวเลขอย่างน้อย 1 ตัวอักษร')
        .matches(/[@$!%*#?&]+/, 'กรุณาระบุข้อมูลอักษรพิเศษอย่างน้อย 1 ตัวอักษร')
        .oneOf([yup.ref('password'), null], 'รหัสผ่านต้องตรงกัน')
});




export default function Register() {
    return (
        <>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        สมัครสมาชิก
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                สร้างบัญชี
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                                    <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="กรุณาระบุชื่อ" required="" />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
                                    <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="กรุณาระบุนามสกุล" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="กรุณาระบุที่อยู่อีเมลล์" required="" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="กรุณาระบุรหัสผ่าน" required="" />
                                </div>

                                <div>
                                    <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirmPassword</label>
                                    <input type="password" name="confirmpassword" id="confirmpassword" className="bg-gray-50 border border-gray-300 
                                    text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="กรุณาระบุรหัสผ่านอีกครั้ง" required="" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white border border-slate-400 rounded-md font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">สมัครสมาชิก</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    คุณมีบัญชีแล้วหรือ? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">เข้าสู่ระบบ</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}