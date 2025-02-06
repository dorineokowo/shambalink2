"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; // Import the Modal component
import Signup from "./Signup/page"; // Import the SignupForm component
import Image from "next/image";
import {
  FaShoppingCart,
  FaChalkboardTeacher,
  FaRegHandshake,
  FaUsers,
  FaAward,
  FaMobileAlt,
} from "react-icons/fa";

const testimonials = [
  {
    name: "John, Kisumu",
    text: "Shambalink helped me find buyers quickly and fairly!",
    imageSrc:
      "https://img.freepik.com/premium-photo/portrait-smiling-black-man-image-generated-by-ai_803126-1314.jpg", // Replace with actual image path
    imageAlt: "John",
  },
  {
    name: "Jane, Eldoret",
    text: "The e-learning courses improved my farming skills tremendously.",
    imageSrc:
      "https://cdn270-genai.picsart.com/f170f707-a20e-42aa-9760-b5941abc1297/475621005023201.jpg", // Replace with actual image path
    imageAlt: "Jane",
  },
  {
    name: "Peter, Nairobi",
    text: "I've accessed funding I never knew existed before!",
    imageSrc:
      "https://img.freepik.com/premium-photo/photo-closeup-portrait-young-man-profile-view_1077802-269144.jpg", // Replace with actual image path
    imageAlt: "Peter",
  },
];

const HomePage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://v.ftcdn.net/02/07/55/53/700_F_207555361_UH9d10tGKSNfmBYu3nK3pFnIyYV7mxB6_ST.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Empowering Farmers, Connecting Communities
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Shambalink is your gateway to modern agriculture. Connect with
            buyers, learn best practices, and grow your business.
          </p>
          <div className="space-x-4">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              onClick={openModal}
            >
              Sign Up
            </button>
            <button className="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <Signup />
      </Modal>
      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Why Choose Shambalink?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Market Access Card */}
            <div
              className="relative bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:translate-y-2 group"
              style={{
                backgroundImage: "url(/path-to-market-access-image.jpg)",
              }} // Replace with actual image path
            >
              <div className="mb-4 flex justify-center">
                <FaShoppingCart className="text-4xl text-green-700 group-hover:hidden" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-4 group-hover:text-white">
                Market Access
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Connect directly with buyers and sell your products at fair
                prices.
              </p>
            </div>

            {/* E-Learning Card */}
            <div
              className="relative bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:translate-y-2 group"
              style={{ backgroundImage: "url(/path-to-e-learning-image.jpg)" }} // Replace with actual image path
            >
              <div className="mb-4 flex justify-center">
                <FaChalkboardTeacher className="text-4xl text-green-700 group-hover:hidden" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-4 group-hover:text-white">
                E-Learning
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Learn modern farming techniques and pest control methods.
              </p>
            </div>

            {/* Opportunities Card */}
            <div
              className="relative bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 transform hover:scale-105 hover:translate-y-2 group"
              style={{
                backgroundImage: "url(/path-to-opportunities-image.jpg)",
              }} // Replace with actual image path
            >
              <div className="mb-4 flex justify-center">
                <FaRegHandshake className="text-4xl text-green-700 group-hover:hidden" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-4 group-hover:text-white">
                Opportunities
              </h3>
              <p className="text-gray-600 group-hover:text-white">
                Discover grants, scholarships, and training programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <section className="py-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Our Impact</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <FaUsers className="text-5xl text-green-700 mb-2" />
            <p className="text-2xl font-bold">10,000+</p>
            <p>Farmers Connected</p>
          </div>
          <div className="text-center">
            <FaAward className="text-5xl text-green-700 mb-2" />
            <p className="text-2xl font-bold">500+ Tons</p>
            <p>Produce Sold</p>
          </div>
          <div className="text-center">
            <FaRegHandshake className="text-5xl text-green-700 mb-2" />
            <p className="text-2xl font-bold">95%</p>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold">1. Sign Up</h3>
            <p>Create an account in minutes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">2. Connect</h3>
            <p>Find buyers or sellers in your area.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. Transact</h3>
            <p>Sell or buy products securely.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">4. Learn</h3>
            <p>Access e-learning resources.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.imageAlt}
                  width={100} // Adjust size as needed
                  height={100} // Adjust size as needed
                  className="rounded-full"
                  unoptimized
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="py-20 text-center">
        {/* Heading with Icon */}
        <div className="flex items-center justify-center mb-8">
          <FaMobileAlt className="text-5xl text-green-700 mr-4" />
          <h2 className="text-3xl font-bold text-green-800">
            Get the Shambalink App
          </h2>
        </div>

        {/* App Image */}
        <div className="mb-4">
          <Image
            src="https://mercycorpsagrifin.org/wp-content/uploads/2023/07/Shamba-pride-R.jpg" // Replace with your app image path
            alt="Shambalink App"
            width={192} // Replace with your image's width
            height={192} // Replace with your image's height
            className="mx-auto"
            unoptimized
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          Download the app for real-time notifications and seamless
          transactions.
        </p>

        {/* App Store Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://apps.apple.com/app/your-app-id" // Replace with your App Store link
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-12 bg-cover bg-no-repeat rounded-md"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLwBFEP8AZ8tUiJtH1JgUT8l0Sw7z5O19Yg&s)", // Replace with your App Store logo path
            }}
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.yourapp" // Replace with your Google Play Store link
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-12 bg-cover bg-no-repeat rounded-md"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png)", // Replace with your Play Store logo path
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
