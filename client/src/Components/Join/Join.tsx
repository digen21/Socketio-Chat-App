import { Send, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 ">
          <div className="py-12 lg:bg-white xs:shadow-xl md:shadow-none border flex justify-center lg:justify-start lg:px-12 ">
            <div className="cursor-pointer flex items-center">
              <div>
                <svg
                  className="w-10 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 225 225"
                  // style={enab;:"new 0 0 225 225;"}
                  xmlSpace="preserve"
                >
                  <style type="text/css">
                    {/* .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;} */}
                  </style>
                  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <g>
                      <path
                        id="Layer0_0_1_STROKES"
                        className="st0"
                        d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4  M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-2xl text-indigo-600 tracking-wide ml-2 font-semibold flex items-center gap-2 hover:scale-105 duration-200">
                <img src="./logo.png" alt="" className="max-h-8 max-w-8" />
                Gossips
              </div>
            </div>
          </div>
          <div className=" mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-3xl">
            <h3
              className="text-start text-4xl text-indigo-600 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold select-none"
            >
              Start <br /> Gossips
            </h3>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Username
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="@tomcruise"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Room Name
                    </div>
                    <div>
                      {/* <a
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a> */}
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="room"
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="Enter Room Name"
                  />
                </div>
                <div className="mt-10">
                  <Link
                    onClick={(e) =>
                      !name || !room ? e.preventDefault() : null
                    }
                    to={`/chat?name=${name}&room=${room}`}
                  >
                    <button
                      className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg flex items-center group hover:scale-105 duration-200 justify-center gap-2"
                    >
                      Join Room
                      <SendHorizonal
                        height={18}
                        className="group-hover:translate-x-1 duration-200"
                      />
                    </button>
                  </Link>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                {/* Don't have an account ?{" "}
                <a className="cursor-pointer text-indigo-600 hover:text-indigo-800 underline">
                  Sign up
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-200 flex-1 h-screen">
          <div className="max-w-lg transform duration-200 hover:scale-110 cursor-pointer">
            <img className="h-full" src="./chat2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
