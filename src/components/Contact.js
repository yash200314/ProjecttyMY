import React from "react";

const Contact = (props) => {
  const[formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const onSubmitHandler = (e)=>{
    e.preventDefault();

  }
  
  return (
    <>
      <div className="container my-24 mx-auto md:px-6 ">
        <section className="mb-32 ">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                The concept of medicine home delivery has been taken to a new level by the AyurMart online medicine delivery app.
                You can use the AyurMart online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.
                Whatever be your medicine requirement, you are sure to locate it in this online pharmacy. 
                All you have to do then is to add it to your cart and place the order and get your order delivered quickly. 
                India’s beloved online medicine delivery app makes sure that you get your medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                Pune, 411023, India
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                + 91 123 456 789
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                info@gmail.com
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form onSubmit={onSubmitHandler}>
                <div className="relative mb-6" data-te-input-wrapper-init>

                  <label>Name</label>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-"
                    id="exampleInput90"
                  />
                </div>
                <div className="relative mb-6 py-[0.32rem]" data-te-input-wrapper-init>
                  <label>Email</label>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-150 ease-linear :opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>

                  <label>Message</label>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mb-6 inline-block w-full rounded bg-cyan-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-cyan-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
