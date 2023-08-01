// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
    open: any,
    title: string,
    text: string,
    contact: string,
    subtitle: string
}

export default function Modal({ open, title, subtitle, text, button, contact }: Props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button type="button" className="flex items-center justify-center" onClick={() => setShowModal(true)}>
        {open}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="pt-8 px-12 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-logo">
                    {title}
                  </h3>
                  <h3 className="text-lg mt-1">
                    {subtitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative py-4 px-12 flex-auto">
                  <p className="leading-relaxed text-justify">
                    {text}
                  </p>
                </div>
                <div className="relative pb-4 px-12 flex-auto">
                  <p className="leading-relaxed text-justify">
                    {contact}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-orange1 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <Link
                    className="bg-blue1 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    to="https://wa.me/56997797374"
                  >
                    <div className="flex">
                        Consultar <BsWhatsapp className="ml-2 mt-0.5"/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}