import * as React from "react";


function ReservationForm() {
  const emailInputId = "emailInput";
  const timingInputId = "timingInput";
  const dateInputId = "dateInput";
  const nameInputId ='nameInput'

 

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-v max-md:px-5">
      <div className="flex flex-col items-center px-20 py-16 w-full border border-solid border-zinc-500 mx-auto max-w-[1033px] max-md:px-5 max-md:max-w-full">
        <h2 className="mt-6 ml-16 text-lg tracking-normal leading-7 text-center text-white">
          Reservation
        </h2>
        <div className="shrink-0 mt-1 ml-16 h-px bg-orange-300 border border-orange-300 border-solid w-[147px]" />
        <h1 className="mt-5 ml-16 text-6xl font-extrabold tracking-tighter text-center text-white leading-[70.4px] max-md:text-4xl">
          Book your table now
        </h1>
        <form className="flex flex-col gap-5 justify-center self-end mt-10 mr-24 max-w-full w-[558px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
          <div className="flex gap-5 w-full">
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor={nameInputId} className="sr-only">
                Name
              </label>
              <input
                type="email"
                id={nameInputId}
                placeholder="Name"
                aria-label="Name"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor={emailInputId} className="sr-only">
                Email
              </label>
              <input
                type="email"
                id={emailInputId}
                placeholder="Email"
                aria-label="Email"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="flex-1">
              <label htmlFor={timingInputId} className="sr-only">
                Timing
              </label>
              <input
                type="text"
                id={timingInputId}
                placeholder="Timing"
                aria-label="Timing"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor={dateInputId} className="sr-only">
                Date
              </label>
              <input
                type="date"
                id={dateInputId}
                placeholder="Date"
                aria-label="Date"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="self-start justify-center px-12 py-5 mt-9 ml-16 text-lg tracking-normal leading-7 text-center text-gray-800 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:px-5"
          >
            Book a Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;