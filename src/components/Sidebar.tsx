'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import InquiryForm from './Form/InquiryForm';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const menuItems = [
  'About Us',
  'Destinations',
  'Ivy League',
  'Ieltspage',
  'Services',
  'FAQs',
];

const Sidebar = ({
  activePage,
  setActivePage,
  setSidebarOpen,
}: SidebarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showForm, setShowform]=React.useState(false);

  const handleClick = (item: string) => {
    setActivePage(item);
    setMobileMenuOpen(false);
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white  z-50">
        <div className="flex justify-between items-center p-4 md:px-8">
          <div>
            <Image src="/assets/Logo.png" width={100} height={100} alt="Logo" />
          </div>

          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item}>
                <span
                  onClick={() => handleClick(item)}
                  className={`text-md cursor-pointer ${
                    item === activePage
                      ? 'text-red-500 font-semibold'
                      : 'text-gray-800 hover:text-red-500'
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black text-xl"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? '✖' : '☰'}
            </button>
          </div>

          <div className="hidden md:block">
                <button onClick={()=>setShowform(true)}
            className="w-full bg-gray-700 px-4 py-2 text-white rounded-lg font-bold">
              Virtual Consultation
            </button>
            {showForm && <InquiryForm closeForm={()=>setShowform(false)}/>}
          
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-700 px-4 py-4 space-y-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <span
                    onClick={() => handleClick(item)}
                    className={`text-md block cursor-pointer ${
                      item === activePage
                        ? 'text-red-400 font-semibold'
                        : 'text-white hover:text-red-300'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <button onClick={()=>setShowform(true)}
            className="w-full bg-red-500 px-4 py-2 text-white rounded-lg font-bold">
              Virtual Consultation
            </button>
            {showForm && <InquiryForm closeForm={()=>setShowform(false)}/>}
          </div>
        )}
      </div>

    </>
  );
};

export default Sidebar;
