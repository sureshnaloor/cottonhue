import React from "react";
import Image from "next/image";

function Productgrid() {
  return (
    <div>
      {/* - component -- */}
      <div tabIndex="0" className="focus:outline-none">
        {/* -- Remove py-8 -- */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-start lg:justify-between justify-center">
            {/* -- Card 1 -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <Image
                  alt="person capturing an image"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  tabIndex="0"
                  className="focus:outline-none w-full h-44"
                  width={500} height={300}
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos,
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rem ratione minima eligendi, quidem eius numquam esse accusamus illum veniam.
                  </p>
                  
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 1 Ends -- */}
            {/* -- Card 2 -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="person capturing an image"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  tabIndex="0"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugiat distinctio officiis? Eligendi animi consequatur dolorem debitis perferendis placeat amet exercitationem iusto nesciunt, suscipit aut qui non, sunt reprehenderit officia?
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 2 Ends -- */}
            {/* -- Card 3  -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="person capturing an image"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  tabIndex="0"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quis? Accusantium dolores natus est ab magni placeat sit quam doloremque voluptatum, inventore ipsam, totam facere reiciendis illo sequi eum impedit?
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 3 Ends -- */}
            {/* -- Card 4  -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="person capturing an image"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  tabIndex="0"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore neque voluptas minima, modi excepturi dolores eveniet, repellat blanditiis illum, dolorum debitis exercitationem mollitia. Iusto corporis numquam molestiae quod eaque totam enim veniam animi incidunt quibusdam, optio, eum explicabo dolores voluptatibus est ullam obcaecati quo debitis amet consequatur neque quos magni. Accusantium, iusto aut voluptate id vero est, ipsum quasi esse nesciunt dolore molestiae? Reiciendis et possimus quidem, sint numquam quia rerum officia, atque aspernatur mollitia eligendi ipsa. Cumque tempore, optio distinctio, commodi sed repellat delectus perferendis hic veniam quae voluptate reprehenderit. A neque expedita cumque minus quidem. Impedit dolore eius alias, ea vitae placeat temporibus non accusantium amet eaque quibusdam. Id possimus porro, dicta voluptatum consequatur accusantium doloribus? Magni magnam nihil eos id porro veniam aspernatur. Doloremque, ut. Veniam obcaecati non laboriosam blanditiis quos eius odit, incidunt atque natus aspernatur, rerum corporis excepturi quam corrupti harum? Est eum praesentium possimus ab ea ex unde explicabo aut consectetur, soluta deleniti repudiandae libero velit, mollitia odit corrupti dolorem ipsa deserunt voluptate impedit. Eaque aut molestiae omnis excepturi possimus assumenda saepe dolorum ipsam quidem? Architecto temporibus nihil quae exercitationem animi? Illo et perspiciatis voluptates, ea eligendi numquam, molestiae velit maxime accusamus eos sit!
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 4 Ends -- */}
          </div>
          <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            {/* -- Card 1 -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="girl texting"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 1 Ends  */}
            {/* -- Card 2 -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="girl texting"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 2 Ends -- */}
            {/* -- Card 3  --> */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="girl texting"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 3 Ends - */}
            {/* -- Card 4  -- */}
            <div
              tabIndex="0"
              className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
            >
              <div>
                <img
                  alt="girl texting"
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="focus:outline-none w-full h-44"
                />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold"
                    >
                      iphone XS
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-gray-600 pl-5"
                    >
                      4 days ago
                    </p>
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 mt-2"
                  >
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p
                        tabIndex="0"
                        className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                      >
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xs font-semibold"
                    >
                      Bay Area, San Francisco
                    </h2>
                    <h3
                      tabIndex="0"
                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                    ></h3>
                  </div>
                </div>
              </div>
            </div>
            {/* -- Card 4 Ends - */}
          </div>
        </div>
        {/* more free and premium Tailwind CSS components at https://tailwinduikit.com/  */}
      </div>
    </div>
  );
}

export default Productgrid;
