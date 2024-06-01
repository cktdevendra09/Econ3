import Image from "next/image";
import Link from "next/link";
import ProductUI from "../_components/product/ProductUI";
import BannerUI from "../_components/banner/BannerUI";
import HorizontalProductUI from "../_components/product/HorizontalProductUI";
import SingleProductUI from "../_components/product/SingleProductUI";

export default function Home() {
  return (
    <>



      <section className="">
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
          <div className="px-4 md:px-6  lg:px-20">
            <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">

              <article className="bg-slate-50 p-8">
                <div className="">
                  <h2 className="text-xl text-gray-600">Mens' Scotch</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-8 flex items-center justify-center md:mt-24">
                  <img className="" src="/images/B_ordz017ZkqddwiA4v6Z.png" alt="" />
                </div>
              </article>

              <article className="bg-slate-50 p-8">
                <div className="">
                  <h2 className="text-xl text-gray-600">Mens' Red</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-8 flex items-center justify-center md:mt-24">
                  <img className="" src="/images/duAi2oyYeb4gurVEFPxlS.png" alt="" />
                </div>
              </article>

              <article className="bg-slate-50 p-8">
                <div className="">
                  <h2 className="text-xl text-gray-600">Mens' Punk</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-8 flex items-center justify-center md:mt-24">
                  <img src="/images/tGViUohuKkaMReMZpEEuR.png" alt="" />
                </div>
              </article>


            </div>

            <div className="mt-4 grid grid-cols-2 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">

              <article className="bg-slate-50 p-8">
                <div>
                  <h2 className="text-xl text-gray-600">Mens' Black</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-28 flex items-center justify-center md:mt-3">
                  <img src="/images/sVmJ8ze9vYMOTpkgCk8Xb.png" alt="" />
                </div>
              </article>

              <article className="bg-slate-50 p-8">
                <div>
                  <h2 className="text-xl text-gray-600">Womens' Brown</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-28 flex items-center justify-center md:mt-1">
                  <img src="/images/fhf5UnwUh3E7buI1Q6gJI.png" alt="" />
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 flex flex-col justify-center items-center ">
          <Link href={'/categories'} className="flex flex-row items-center justify-center text-center border rounded-xl outline-none p-4 bg-black border-none text-white text-sm shadow-sm">Explore More</Link>
        </div>
      </section>


      <section className="px-2 bg-white sm:px-32 lg:px-32 mb-2 pt-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <ProductUI />
            <ProductUI />
            <ProductUI />
            <ProductUI />
          </div>

          <div className="mt-4 mb-4 flex flex-col justify-center items-center ">
            <Link href={'/c/sadjidsaj'} className="flex flex-row items-center justify-center text-center border rounded-xl outline-none p-4 bg-black border-none text-white text-sm shadow-sm">Explore More</Link>
          </div>


        </div>
      </section>

      <section className="px-2 bg-white sm:px-32 lg:px-32 mb-2 pt-10 rounded-lg overflow-hidden">
        <BannerUI />

      </section>





      <section className="bg-white pt-5 px-5 sm:px-32">
        <div>
          <div className="flex items-center flex-col  ">
            <hh1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center  text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Create Beautiful Landing Pages & Web Apps in a Jiffy</hh1>
          </div>
          {/* COTET */}
          <div className="mt-4 xl:p-20 lg:p-20 md:p-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-2">
              <HorizontalProductUI />
              <HorizontalProductUI />
              <HorizontalProductUI />
              <HorizontalProductUI />
            </div>
            <div className="mt-4 flex flex-col justify-center items-center ">
              <Link href={'/c/diasjdi'} className="flex flex-row items-center justify-center text-center border rounded-xl outline-none p-4 bg-black border-none text-white text-sm shadow-sm">Explore More</Link>
            </div>
          </div>
          {/* COTET */}



        </div>
      </section>

      <SingleProductUI />


      <section className="px-2 bg-white sm:px-32 lg:px-32 mb-2 pt-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <ProductUI />
            <ProductUI />
            <ProductUI />
            <ProductUI />
          </div>

          <div className="mt-4 mb-4 flex flex-col justify-center items-center ">
            <Link href={'/c/sadjidsaj'} className="flex flex-row items-center justify-center text-center border rounded-xl outline-none p-4 bg-black border-none text-white text-sm shadow-sm">Explore More</Link>
          </div>


        </div>
      </section>



      <section className="px-2 bg-white sm:px-32 lg:px-32 mb-2 pt-10 rounded-lg overflow-hidden">
        <BannerUI />
      </section>


      <section className="">
        <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
          <div className="px-4 md:px-6  lg:px-20">
            <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>          

            <div className="mt-4 grid grid-cols-2 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">

              <article className="bg-slate-50 p-8">
                <div>
                  <h2 className="text-xl text-gray-600">Mens' Black</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-28 flex items-center justify-center md:mt-3">
                  <img src="/images/sVmJ8ze9vYMOTpkgCk8Xb.png" alt="" />
                </div>
              </article>

              <article className="bg-slate-50 p-8">
                <div>
                  <h2 className="text-xl text-gray-600">Womens' Brown</h2>
                  <p className="mt-2 text-xl font-semibold text-gray-800"></p>
                </div>
                <div className="mt-28 flex items-center justify-center md:mt-1">
                  <img src="/images/fhf5UnwUh3E7buI1Q6gJI.png" alt="" />
                </div>
              </article>
            </div>
          </div>
        </div>


      </section>



    </>
  );
}
