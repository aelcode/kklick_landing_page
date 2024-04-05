// import { WidthIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';
// import { LogoIcon } from "./Icons";

// export const Footer = () => {
//   return (
//     <footer id="footer">
//       <hr className="w-11/12 mx-auto" />

//       <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//         <div className="col-span-full xl:col-span-2">
//           <a
//             href="/"
//             className="font-bold text-xl flex"
//           >
//             <LogoIcon />
//             KKlick Studio
//           </a>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Follow US</h3>
//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Github
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Twitter
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Dribbble
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Platforms</h3>
//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Web
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Mobile
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Desktop
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">About</h3>
//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Features
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Pricing
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               FAQ
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h3 className="font-bold text-lg">Community</h3>
//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Youtube
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Discord
//             </a>
//           </div>

//           <div>
//             <a
//               href="#"
//               className="opacity-60 hover:opacity-100"
//             >
//               Twitch
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="container pb-14 text-center">
//         <h3>
//           &copy; 2024 KKlick Studio by{" "}
//           <a
//             target="_blank"
//             href="https://github.com/aelcode"
//             className="text-primary transition-all border-primary hover:border-b-2"
//           >
//             Lunaxcode
//           </a>
//         </h3>
//       </section>
//     </footer>
//   );
// };

export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcb9b9]'>
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        <div className='flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start'>
          <div className='w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0'>
            <h2 className='text-3xl font-semibold text-white md:text-5xl'>
              <span className='text-[#bf805e]'>K Klick Self Photo</span> Make
              Memories In Every Click
            </h2>
            <div className='mb-12 mt-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3'>
              <a
                href='https://www.facebook.com/kklickselfphoto/'
                target='_blank'
                rel='noreferrer'
                className='mx-auto flex max-w-[32px] flex-col font-bold'
              >
                <FaFacebook className='h-8 w-8' />
                {/* <img
                  src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg'
                  alt=''
                  className='inline-block'
                /> */}
              </a>
              <a
                href='https://www.instagram.com/kklickselfphoto/'
                target='_blank'
                rel='noreferrer'
                className='mx-auto flex max-w-[32px] flex-col font-bold'
              >
                <FaInstagram className='h-8 w-8' />
                {/* <img
                  src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg'
                  alt=''
                  className='inline-block'
                /> */}
              </a>
              <a
                href='https://www.tiktok.com/@kklickselfphoto'
                target='_blank'
                rel='noreferrer'
                className='mx-auto flex max-w-[32px] flex-col font-bold'
              >
                <FaTiktok className='h-8 w-8' />
              </a>
            </div>
          </div>
          <div className='max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8'>
            <div className='mb-4 flex max-w-[272px] items-start justify-start'>
              <img
                src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cafd61df1f2a234a2c_carbon_location-filled.svg'
                alt=''
                className='mr-3 inline-block w-6'
              />
              <p>
                3rd Floor, Maylor's Plaza 2, Collective Properties Inc. L.
                Sumulong Memorial Circle 1870 Antipolo, Philippines
              </p>
            </div>
            <div className='mb-4 flex max-w-[272px] items-start justify-start'>
              <img
                src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cbfd61dff0af234a64_Message.svg'
                alt=''
                className='mr-3 inline-block w-6'
              />
              <p>info@kklick.studio</p>
            </div>
          </div>
        </div>
        <div className='mb-14 mt-10 w-full [border-bottom:1.7px_solid_rgb(245,245,245)]' />
        <div className='flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse'>
          <div className='text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1 max-[479px]:mb-4 sm:text-center'>
            <a
              href='#'
              className='inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12'
            >
              Home
            </a>
            <a
              href='#ourstory'
              className='inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12'
            >
              Our Story
            </a>
            <a
              href='#packages'
              className='inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12'
            >
              Packages
            </a>
            <a
              href='#addons'
              className='inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12'
            >
              Addons & Discounts
            </a>
            <a
              href='#faq'
              className='inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12'
            >
              FAQ
            </a>
          </div>
          <div className='max-[991px]:flex-none'>
            <h3>
              &copy; 2024 KKlick Studio. All rights reserved. by{' '}
              <a
                target='_blank'
                href='https://github.com/aelcode'
                className='text-primary transition-all border-primary hover:border-b-2'
              >
                Lunaxcode
              </a>
            </h3>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
};
