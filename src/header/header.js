import React from "react";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight text-black">Crazy Passwords</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Sing In
            </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Password Generator
            </a>
            <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            FAQ
            </a>
        </div>
      </div>
    </nav>
  );
}


export default Header;
