import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Trending Section */}
      <section className="flex flex-col px-12 py-6 gap-6 bg-gray-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800">Trending</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <Image
                    src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
                    alt={`Trending Item ${index + 1}`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">Post Name {index + 1}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-600">Start Date: 2024-12-31</p>
                    <p className="text-sm text-red-600">Last Date: 2024-12-31</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Updates Section */}
      <section className="px-12 py-12 bg-gradient-to-r from-blue-300 to-blue-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">All Updates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, categoryIndex) => (
            <div key={categoryIndex} className="border-2 border-blue-500 rounded-lg">
              <h3 className="text-xl py-3 text-center bg-blue-500 text-white font-bold">Category Name {categoryIndex + 1}</h3>
              <div className="grid grid-cols-1 gap-4 p-4">
                {Array.from({ length: 10 }).map((_, postIndex) => (
                  <div
                    key={postIndex}
                    className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-50 transition duration-300"
                  >
                    <h4 className="text-md font-bold text-gray-700">Post {postIndex + 1}</h4>
                    <div className="flex justify-between">
                      <p className="text-sm text-green-500">From: 2024-12-31</p>
                      <p className="text-sm text-red-500">To: 2024-12-31</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-4">
                <button className="bg-blue-500 mx-2 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center px-12 py-12 bg-gray-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">About</h3>
        <p className="max-w-3xl text-center text-gray-700">
          Welcome to our website! We aim to provide the latest updates and trends across various topics. Our team is dedicated to bringing you the most accurate and up-to-date information. Thank you for visiting!
        </p>
      </section>

      {/* Categories Section */}
      <section className="px-12 py-12 bg-gradient-to-r from-blue-100 to-blue-300">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Technology', 'Health', 'Sports', 'Entertainment', 'Science', 'Business', 'Admit Card', 'Result', 'Jobs'].map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-700">{category}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-12 py-12 bg-gray-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Featured</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-700">Featured Post {index + 1}</h4>
              <p className="text-gray-600 mt-2">
                This is a brief description of the featured post. Learn more about the topic and why it's highlighted.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center px-12 py-12 bg-gradient-to-r from-blue-300 to-blue-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Contact</h3>
        <form className="w-full max-w-xl">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="px-12 py-12 bg-gray-100">
        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">FAQ</h3>
        <div className="max-w-3xl mx-auto">
          {['What is this website about?', 'How can I contact you?', 'What topics do you cover?'].map((question, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-700">{question}</h4>
              <p className="text-gray-600 mt-2">
                This is the answer to the frequently asked question. Provide detailed information to help your users.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
