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
                    Long time ago.
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
        <br></br>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1">



        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</span>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</span>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80" width="448" height="299" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <span class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</span>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
