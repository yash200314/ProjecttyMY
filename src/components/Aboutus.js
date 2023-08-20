import React from "react";
const About = () => {
    return (
        <>
            <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        </div>
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2 class="mb-4 text-4xl font-semibold text-blue-600 dark:text-gray-300">
                                About Us
                            </h2>
                            <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                The concept of medicine home delivery has been taken to a new level by the PharmEasy online medicine delivery app. You can use the PharmEasy online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.
                                Whatever be your medicine requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order and get your order delivered quickly. India’s beloved online medicine delivery app makes sure that you get 
                                your medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.
                            </p>
                            <a href="#"
                                className="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;