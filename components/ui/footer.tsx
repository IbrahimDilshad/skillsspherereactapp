"use client";
import React from 'react';

export function Footer() {
  return (
    <div>
      <div className="lg:flex lg:flex-row bg-neutral-900">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-white mt-10 mx-5">
            Skills Sphere
          </h4>
          <p className="text-sm lg:text-base  max-w-2xl text-neutral-300 text-left font-normal mx-5">
            Empowering Your Growth <br />Project of IDs Corporations
          </p>
        </div>
        <div className="flex flex-col w-full max-w-7xl mt-5 mx-auto">
          <h3 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-white mt-10 mx-5">
            Quick Links
          </h3>
          <ul>
            <li>
              <a href="/about" className="text-neutral-300 mx-5">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-neutral-300 mx-5">Contact Us</a>
            </li>
            <li>
              <a href="/courses" className="text-neutral-300 mx-5">Courses</a>
            </li>
            <li>
              <a href="/blogs" className="text-neutral-300 mx-5">blogs</a>
            </li>
            <li>
              <a href="/products" className="text-neutral-300 mx-5">Products</a>
            </li>
            <li>
              <a href="/hometuitions" className="text-neutral-300 mx-5">Home Tuitions</a>
            </li>
            <li>
              <a href="/books" className="text-neutral-300 mx-5">Books</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full max-w-7xl mt-5 mx-auto">
          <h3 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-white mt-10 mx-5">
            Resources
          </h3>
          <ul>
            <li>
              <a href="/about" className="text-neutral-300 mx-5">Faqs</a>
            </li>
            <li>
              <a href="/contact" className="text-neutral-300 mx-5">Privacy Policy</a>
            </li>
            <li>
              <a href="/courses" className="text-neutral-300 mx-5">Terms & Conditions</a>
            </li>
            <li>
              <a href="/blogs" className="text-neutral-300 mx-5">Support</a>
            </li>
            <li>
              <a href="/products" className="text-neutral-300 mx-5">Become a tutor</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <h4 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-white mt-10 mx-5">
            Contact info
          </h4>
          <p className="text-sm lg:text-base  max-w-2xl text-neutral-300 text-left font-normal mx-5">
            Email: sillzsphere@gmail.com<br />
            Phone: +92 3706777957<br />
            Address: PCSIR Phase 1, Lahore
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm lg:text-base  max-w-2xl text-neutral-300 text-center font-normal mx-auto">
          © 2023 Skills Sphere. All rights reserved.
        </p>
      </div>
    </div>
  );
}
//footerend