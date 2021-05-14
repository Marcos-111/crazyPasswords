import React from "react";

function FAQ() {
  return (
    <div>
      <div className="font-rale text-5xl font-light pt-12 text-center">
        <h1>Welcome to the FAQs page</h1></div>

      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
            </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
            </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is crazy passwords?

                </summary>

                  <span>
                    Crazy Passwords is a project we are doing to get along with React and Tailwindcss. We're doing this to give our team a point of reference and have something else to show them and show the world!                </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                </summary>

                  <span>
                  No one knew much about Jack Sparrow before he searched for the dreaded Isla de Muerta, having said that was before he met Jack, back when he was captain of the Black Pearl
                </span>
                </details>

              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">

                    How does it work?
                </summary>

                  <span class="px-4 py-2">
                    Simple. You put the conditions, we generate it. You say what it is, we store it.
                    We generate your password, and a site in your vault, where you can find all the passwords you store.
                    Our passwords security are louder than bombs and the eternity.
                </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I trust crazy passowords?
                </summary>

                  <span>
                    Well the asnwer is quite simple. Of course.
                    Of course you can trust crazy passwords, isn't the right to vote one of the very foundations of the democrazy? I mean, democracy?
                    We'll make sure all your passwords and most dark secrets keep were they belong. Hidden, we worry, so you don't have to.
                    All the code is open source, so you can check it whenever you want.

                </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>




      {/* -- Who trusted us? -- */}

      <div className="font-rale text-5xl font-light text-center">
        <h1> Who trusted us?</h1>
        <br/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1">
        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="data:image/jpeg;base64,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" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Argentine comedian</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">El negro Olmedo</span>
                <p class="mt-2 text-gray-500">Since I use crazy passwords, I feel safer than usual, in La Once I've seen all kinds of things, so I can expect anything, but now, my security is amazing. There you go, Brayan.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://i.ytimg.com/vi/C7PmUZ1C-QM/maxresdefault.jpg" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Politician</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Omar Obaca</span>
                <p class="mt-2 text-gray-500">I used crazy passwords for a long time, I trusted them in my presidential campaign, they've been always nice to me. If it's crazy, it's my password, don't ever doubt it.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://d35hsl9am8s2ta.cloudfront.net/public/images/2020/09/16014105610-Negro-Alvarez-773x458.jpg" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Film actor</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">El Negro Alvarez</span>
                <p class="mt-2 text-gray-500">When I heard about crazy passwords I was worried first, but I can't memorize all those passwords, you know. I don't even know my ID number.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
