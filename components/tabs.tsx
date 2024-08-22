import React from 'react';
import {ChevronDown} from "lucide-react";

const Tabs = () => {

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value:any) => setOpen(open === value ? 0 : value);


    return (
        <div className={' px-5 max-w-[800px] mx-auto'}>


            <div onClick={() => handleOpen(1)}
                 className={' mb-2 p-5 border  flex items-center justify-between rounded bg-gray-100 text-black'}>
                <div>
                    Question 1
                </div>
                <ChevronDown className={open === 1 ? 'rotate-180 duration-300' : ''}/>
            </div>
            <div className={open === 1 ? "block px-5 animate " : 'hidden'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.</p>
            </div>

            <div onClick={() => handleOpen(2)}
                 className={'mb-2 p-5 border  flex items-center justify-between rounded bg-gray-100 text-black'}>
                <div>
                    Question 2
                </div>
                <ChevronDown className={open === 2 ? 'rotate-180 duration-300' : ''}/>
            </div>
            <div className={open === 2 ? "block px-5 animate " : 'hidden'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.</p>
            </div>

            <div onClick={() => handleOpen(3)}
                 className={'mb-2 p-5 border  flex items-center justify-between rounded bg-gray-100 text-black'}>
                <div>
                    Question 3
                </div>
                <ChevronDown className={open === 3 ? 'rotate-180 duration-300' : ''}/>
            </div>
            <div className={open === 3 ? "block px-5 animate " : 'hidden'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.</p>
            </div>

            <div onClick={() => handleOpen(4)}
                 className={'mb-2 p-5 border  flex items-center justify-between rounded bg-gray-100 text-black'}>
                <div>
                    Question 4
                </div>
                <ChevronDown className={open === 4 ? 'rotate-180 duration-300' : ''}/>
            </div>
            <div className={open === 4 ? "block px-5 animate " : 'hidden'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eum excepturi fuga impedit officia perspiciatis
                    porro quod vel, vitae voluptate.</p>
            </div>


        </div>
    );
};

export default Tabs;
