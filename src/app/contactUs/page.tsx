import Navbar from "@/components/navrbar"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function contactUs() {
    return (
        <div>
            <Navbar />
            <section className="bg-white ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Please feel free to contact us using the form or the details provided. We value your input and strive to provide excellent customer service.
                        <br />
                        We strive to provide excellent customer service and will do our best to respond to your inquiry as quickly as possible. Thanks again for considering our products!

                    </p>
                    <div className="bg-white text-gray-800 p-6  rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="space-y-3">
                            <div className="">
                                <h3 className="font-semibold flex items-center">
                                    <FaPhoneAlt className="text-pink-500 mr-2" /> Phone:
                                </h3>
                                <p>+91 95501 56969</p>
                                <p>040 3516 9601</p>
                            </div>

                            <div>
                                <IoMdMail className="text-pink-500 mr-2" />
                                <p><a href="mailto:contact@havepura.com" className="text-blue-500 hover:text-blue-600">contact@havepura.com</a></p>
                            </div>
                            <div>
                                <FaLocationDot className="text-pink-500 mr-2" />
                                <p>H-14/A, Gona Creamlines IDA,</p>
                                <p>Uppal, Hyderabad, Telangana – 500039</p>
                            </div>
                        </div>
                    </div>

                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="username@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                            Order
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
