import React from "react";
import Tabs from "../components/tabs";

import image from './../public/assets/img/1.jpeg'
import Image from "next/image";


export default function Home() {
  return (
      <main className={'container mx-auto'}>

          <div className={'pt-10 flex justify-center'}>
              <Image
                  src={image}
                  alt={''}
                  width={800}
                  height={500}
              />
          </div>

          <div className={'py-10'}>
              <h1 className={'text-[36px] text-center'}>About Product</h1>
          </div>

          <div className={'py-10 px-5 mx-auto max-w-[800px]'}>
              <p className={'pb-10'}>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, assumenda delectus deleniti deserunt enim ex
                  facere laboriosam modi mollitia nam nostrum perspiciatis
                  quibusdam quis quod veritatis. Aliquid doloribus ex
                  explicabo itaque nesciunt, odio reprehenderit sit.
                  Ipsam magni officia quo tenetur!

              </p>
              <p className={'pb-10'}>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, assumenda delectus deleniti deserunt enim ex
                  facere laboriosam modi mollitia nam nostrum perspiciatis
                  quibusdam quis quod veritatis. Aliquid doloribus ex
                  explicabo itaque nesciunt, odio reprehenderit sit.
                  Ipsam magni officia quo tenetur!

              </p>
          </div>


          <div className={'py-10'}>
              <h2 className={'text-[36px] text-center'}>FAQ</h2>
          </div>

          <Tabs/>


          <div className={'mt-10 '}>

              <div className={'py-10'}>
                  <h2 className={'text-[36px] text-center'}>Your review</h2>
              </div>

              <form className={'flex flex-col max-w-[800px] p-5 mx-auto mb-10'}>

                  <input className={'border p-2 mb-2 rounded'} placeholder={'Name'}/>

                  <input className={'border p-2 mb-2 rounded'} placeholder={'Phone'}/>

                  <textarea className={'border p-2 rounded h-[150px] resize-none'} placeholder={'Your review'}/>

                  <button className={'mt-10 bg-black text-white px-5 py-3 rounded'} type={'submit'}>Send</button>
              </form>
          </div>


      </main>
  );
}
