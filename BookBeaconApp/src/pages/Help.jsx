import React, { useState } from 'react'

const Help = () => {
  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isFurtherAssistanceOpen, setIsFurtherAssistanceOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="pl-14 pr-4 py-4">
        <h1 className="text-5xl font-bold text-violet-800 mb-6 animate-pulse text-center">Help & Support</h1>

        <section className="mb-8">
          <h2 
            onClick={() => setIsGeneralOpen(!isGeneralOpen)} 
            className="text-2xl font-semibold text-gray-700 mb-4 cursor-pointer"
          >
            General Information
          </h2>
          {isGeneralOpen && (
            <p className="text-gray-600 mb-2">
              Welcome to the Book Beacon Help page. Here, you can find assistance on how to use the system effectively, including how to search for books, manage your account, and issue books.
            </p>
          )}
        </section>
        
        <section className="mb-8">
          <h2 
            onClick={() => setIsFaqOpen(!isFaqOpen)} 
            className="text-2xl font-semibold text-gray-700 mb-4 cursor-pointer"
          >
            Frequently Asked Questions (FAQs)
          </h2>
          {isFaqOpen && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">How can I search for books?</h3>
                <p className="text-gray-600">
                  You can use the search bar at the top of the page to find books by title and author. Simply type your query and press Enter to see the results.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">How do I issue a book?</h3>
                <p className="text-gray-600">
                  After finding the book you want, click on the "Add to cart" button. Make sure you are logged in with your account to complete the process.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-800">..?</h3>
                <p className="text-gray-600">
                 ...
                </p>
              </div>
            </>
          )}
        </section>
        
        <section className="mb-8">
          <h2 
            onClick={() => setIsFurtherAssistanceOpen(!isFurtherAssistanceOpen)} 
            className="text-2xl font-semibold text-gray-700 mb-4 cursor-pointer"
          >
            Need Further Assistance?
          </h2>
          {isFurtherAssistanceOpen && (
            <>
              <p className="text-gray-600 mb-4">
                If you need more help, feel free to reach out to our support team at <span className="text-blue-600">support@bookbeacon.com</span> or call us at <span className="text-blue-600">+91 9876543210</span>.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Contact Support
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default Help;
