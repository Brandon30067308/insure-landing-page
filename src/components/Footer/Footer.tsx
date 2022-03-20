import { FC } from "react";
import useWindowDimension from "../../hooks/useWindowDimension";
import breakpoints from "../../breakpoints/breakpoints";
import Logo from "../common/Logo";

const Footer: FC = () => {
  const { width } = useWindowDimension();

  return (
    <footer className="relative w-full bg-lightGray min-h-[45vh] py-14 flex items-start justify-center">
      <div className="w-full max-w-6xl xl:max-w-[80vw] flex flex-col justify-start px-3 sm:px-8">
        <header
          className="w-full flex sm:flex-row gap-y-8 flex-col justify-between items-center pb-10
          border-b-[1px] border-b-primaryAlt mb-16 z-10"
        >
          <Logo />
          <div className="flex items-center">
            <div className="mr-5 group cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  className="transition-all ease-linear fill-grayishViolet
                    group-hover:fill-primaryDark"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </div>
            <div className="mr-5 group cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  className="transition-all ease-linear fill-grayishViolet
                    group-hover:fill-primaryDark"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </div>
            <div className="mr-5 group cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  className="transition-all ease-linear fill-grayishViolet
                    group-hover:fill-primaryDark"
                  d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                />
              </svg>
            </div>
            <div className="group cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  className="transition-all ease-linear fill-grayishViolet
                    group-hover:fill-primaryDark"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </div>
          </div>
        </header>
        <div
          className="grid gap-y-6"
          style={{
            gridTemplateColumns:
              width <= breakpoints.md
                ? width <= breakpoints.sm
                  ? "1fr"
                  : "1fr 1fr"
                : "1fr 1fr 1fr 1fr"
          }}
        >
          <div className="flex flex-col md:w-fit w-full items-center md:items-start">
            <h3
              className="uppercase font-[700] text-grayishViolet mb-5 text-[13.5px]
              sm:text-[15px]"
            >
              our company
            </h3>
            <div>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                how we work
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                why insure?
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                view plans
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-fit w-full items-center md:items-start">
            <h3
              className="uppercase font-[700] text-grayishViolet mb-5 text-[13.5px]
              sm:text-[15px]"
            >
              help me
            </h3>
            <div>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                faq
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                terms of use
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                privacy policy
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                cookies
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-fit w-full items-center md:items-start">
            <h3
              className="uppercase font-[700] text-grayishViolet mb-5 text-[13.5px]
              sm:text-[15px]"
            >
              contact
            </h3>
            <div>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                sales
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                support
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                live chat
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-fit w-full items-center md:items-start">
            <h3
              className="uppercase font-[700] text-grayishViolet mb-5 text-[13.5px]
              sm:text-[15px]"
            >
              others
            </h3>
            <div>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                career
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                press
              </p>
              <p
                className="w-fit text-primaryDark text-[13.5px] sm:text-[15px] uppercase font-[700]
                mb-2 cursor-pointer transition-all hover:underline mx-auto md:mx-0"
              >
                licenses
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-primaryDark text-center text-[14px] sm:text-[15px] mt-6">
          Challenge by{" "}
          <a
            className="text-attribution"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://chikezieobinna.herokuapp.com">Brandon</a>.
        </div>
        {/* pattern */}
        <div className="absolute left-0 top-0">
          {width <= breakpoints.xs ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="374" height="173">
              <g fill="none" fill-rule="evenodd" stroke="#E4E4E4">
                <path d="M72.361 139.675c75.703 23.693 153.543 63.212 233.235-8.97C385.29 58.523 435.39-4.709 403.036-86.522c-32.354-81.814-164.422-30.855-202.794-103.977-38.373-73.122 45.94-139.485 9.591-204.563-36.35-65.078-64.3-106.787-181.115-65.409C-88.098-419.092-77.327-313.807-166.16-252.153-254.993-190.499-351.104-98.2-219.206 66.494S-3.341 115.98 72.36 139.674z" />
                <path d="M62.895 101.751c61.583 19.24 124.905 51.33 189.734-7.283 64.828-58.614 105.585-109.959 79.266-176.393-26.32-66.434-133.755-25.055-164.971-84.43-31.216-59.377 37.372-113.266 7.802-166.11-29.57-52.845-52.306-86.713-147.334-53.113-95.028 33.6-86.267 119.094-158.53 169.158-72.265 50.064-150.45 125.012-43.153 258.747S1.312 82.511 62.895 101.751z" />
                <path d="M45.188 76.583C95.15 92.28 146.522 118.465 199.117 70.64c52.594-47.825 85.66-89.72 64.307-143.926-21.353-54.206-108.513-20.443-133.838-68.89-25.325-48.448 30.32-92.418 6.33-135.536-23.99-43.117-42.436-70.752-119.531-43.336-77.095 27.415-69.987 97.173-128.614 138.022-58.627 40.85-122.058 102.003-35.009 211.122C-60.189 137.216-4.773 60.884 45.188 76.583z" />
                <path d="M26.684 45.816c40.295 12.596 81.728 33.603 124.147-4.768 42.419-38.371 69.087-71.984 51.865-115.475-17.221-43.491-87.518-16.402-107.943-55.273-20.425-38.87 24.453-74.148 5.105-108.743s-34.225-56.767-96.404-34.77c-62.179 21.996-56.446 77.965-103.73 110.739-47.284 32.774-98.442 81.839-28.236 169.388C-58.305 94.464-13.61 33.221 26.684 45.816z" />
                <path d="M21.917 25.954c32.91 10.295 66.749 27.467 101.393-3.897 34.643-31.365 56.424-58.84 42.358-94.389-14.065-35.549-71.477-13.407-88.158-45.179-16.682-31.772 19.971-60.609 4.17-88.886-15.803-28.277-27.953-46.4-78.735-28.42-50.782 17.979-46.1 63.727-84.718 90.516-38.617 26.79-80.398 66.895-23.06 138.457 57.339 71.562 93.841 21.503 126.75 31.798z" />
                <path d="M12.775 11.594c26.718 8.36 54.191 22.305 82.318-3.165 28.127-25.47 45.81-47.78 34.39-76.649-11.419-28.868-58.03-10.887-71.574-36.688-13.544-25.8 16.214-49.217 3.385-72.18-12.83-22.963-22.694-37.68-63.923-23.08-41.229 14.6-37.428 51.75-68.78 73.505-31.353 21.755-65.275 54.323-18.723 112.435C-43.579 43.884-13.944 3.234 12.775 11.594z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="528" height="231">
              <g fill="none" fill-rule="evenodd" stroke="#E4E4E4">
                <path d="M186.361 197.675c75.703 23.693 153.543 63.212 233.235-8.97 79.693-72.182 129.794-135.414 97.44-217.227-32.354-81.814-164.422-30.855-202.794-103.977-38.373-73.122 45.94-139.485 9.591-204.563-36.35-65.078-64.3-106.787-181.115-65.409C25.902-361.092 36.673-255.807-52.16-194.153c-88.833 61.654-184.944 153.953-53.046 318.647s215.865 49.487 291.567 73.18z" />
                <path d="M176.895 159.751c61.583 19.24 124.905 51.33 189.734-7.283 64.828-58.614 105.585-109.959 79.266-176.393-26.32-66.434-133.755-25.055-164.971-84.43-31.216-59.377 37.372-113.266 7.802-166.11-29.57-52.845-52.306-86.713-147.334-53.113-95.028 33.6-86.267 119.094-158.53 169.158-72.265 50.064-150.45 125.012-43.153 258.747s175.603 40.184 237.186 59.424z" />
                <path d="M159.188 134.583c49.962 15.698 101.334 41.882 153.929-5.943 52.594-47.825 85.66-89.72 64.307-143.926-21.353-54.206-108.513-20.443-133.838-68.89-25.325-48.448 30.32-92.418 6.33-135.536-23.99-43.117-42.436-70.752-119.531-43.336C53.29-235.633 60.398-165.875 1.77-125.026-56.856-84.176-120.287-23.023-33.238 86.096c87.049 109.12 142.465 32.788 192.426 48.487z" />
                <path d="M140.684 103.816c40.295 12.596 81.728 33.603 124.147-4.768 42.419-38.371 69.087-71.984 51.865-115.475-17.221-43.491-87.518-16.402-107.943-55.273-20.425-38.87 24.453-74.148 5.105-108.743s-34.225-56.767-96.404-34.77c-62.179 21.996-56.446 77.965-103.73 110.739C-33.56-71.7-84.718-22.635-14.512 64.914c70.207 87.55 114.901 26.307 155.196 38.902z" />
                <path d="M135.917 83.954c32.91 10.295 66.749 27.467 101.393-3.897 34.643-31.365 56.424-58.84 42.358-94.389-14.065-35.549-71.477-13.407-88.158-45.179-16.682-31.772 19.971-60.609 4.17-88.886-15.803-28.277-27.953-46.4-78.735-28.42-50.782 17.979-46.1 63.727-84.718 90.516C-6.39-59.51-48.17-19.406 9.167 52.156c57.339 71.562 93.841 21.503 126.75 31.798z" />
                <path d="M126.775 69.594c26.718 8.36 54.191 22.305 82.318-3.165 28.127-25.47 45.81-47.78 34.39-76.649-11.419-28.868-58.03-10.887-71.574-36.688-13.544-25.8 16.214-49.217 3.385-72.18-12.83-22.963-22.694-37.68-63.923-23.08-41.229 14.6-37.428 51.75-68.78 73.505C11.238-46.908-22.684-14.34 23.868 43.772c46.553 58.112 76.188 17.462 102.907 25.822z" />
              </g>
            </svg>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
