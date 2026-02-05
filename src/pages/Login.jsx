import { Link } from "react-router";
import { Functionlogin } from "../Data/function/Functionlogin";
import { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('รูปแบบอีเมลล์ไม่ถูกต้อง')
        .required('กรุณาระบุข้อมูล'),
    password: Yup
        .string()
        .required('กรุณาระบุข้อมูล')
        .min(8, 'ความยาวตัวอักษรต่ำสุด 8 ตัวอักษร')
        .matches(/[a-z]+/, 'กรุณาระบุข้อมูลอักษรตัวเล็กอย่างน้อย 1 ตัวอักษร')
        .matches(/[A-Z]+/, 'กรุณาระบุข้อมูลอักษรตัวใหญ่อย่างน้อย 1 ตัวอักษร')
        .matches(/\d+/, 'กรุณาระบุข้อมูลตัวเลขอย่างน้อย 1 ตัวอักษร')
        .matches(/[@$!%*#?&]+/, 'กรุณาระบุข้อมูลอักษรพิเศษอย่างน้อย 1 ตัวอักษร'),

});

export default function Login() {
    const loginfunction = new Functionlogin();
    const[message , setmessage] = useState();
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        เข้าสู่ระบบ
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                เข้าสู่ระบบด้วยบัญชีที่สมัครสมาชิกกับระบบ
                            </h1>
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values) => {
                                    const res = await loginfunction.login(values)
                                    setmessage(res.data.message)
                                }}
                            >
                                <Form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ที่อยู่อีเมลล์" required="" />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Field type="password" name="password" id="password" placeholder="รหัสผ่าน" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        <ErrorMessage name="password" component="div" className="text-red-500" />

                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <Field id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-red-600 hover:underline dark:text-primary-500">ลืมรหัสผ่าน?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white border border-slate-400 rounded-md font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                        dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">เข้าสู่ระบบ</button>
                                    <p className="text-green-500">{message}</p>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        ยังไม่มีบัญชีหรือเปล่า? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">สมัครสมาชิก</Link>
                                    </p>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}