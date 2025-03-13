import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white dark:text-gray-100">About Us <span className='text-pink-500'>here! :)</span></h1>
          <p className='mt-6 text-left text-white dark:text-gray-100 leading-relaxed'>
            Welcome to [Bookstore Name], your number one source for all things books. We're dedicated to giving you the very best of literature, with a focus on variety, quality, and customer service.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">Our Story</h2>
          <p className='mt-4 text-left text-white dark:text-gray-100 leading-relaxed'>
            Founded in [Year], [Bookstore Name] has come a long way from its beginnings in [Starting Location]. When [Founder's Name] first started out, their passion for books and community drove them to start their own business. This passion continues to fuel our growth and commitment to providing a diverse selection of books for every reader.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">Our Mission</h2>
          <p className='mt-4 text-left text-white dark:text-gray-100 leading-relaxed'>
            At [Bookstore Name], we believe in the power of stories to transform lives. Our mission is to connect readers with the books that inspire, educate, and entertain. We strive to create a welcoming space for book lovers of all ages and backgrounds.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">What We Offer</h2>
          <ul className='list-disc list-inside text-left mt-4 text-white dark:text-gray-100 leading-relaxed'>
            <li className='mt-2'><strong>Diverse Collection:</strong> From timeless classics to contemporary bestsellers, our carefully curated collection includes books from various genres and authors.</li>
            <li className='mt-2'><strong>Events & Activities:</strong> We regularly host book signings, reading clubs, and other literary events to foster a vibrant reading community.</li>
            <li className='mt-2'><strong>Personalized Recommendations:</strong> Our knowledgeable staff is always ready to help you find your next great read based on your preferences and interests.</li>
            <li className='mt-2'><strong>Community Engagement:</strong> We are proud supporters of local authors and actively participate in community events and initiatives.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">Our Values</h2>
          <ul className='list-disc list-inside text-left mt-4 text-white dark:text-gray-100 leading-relaxed'>
            <li className='mt-2'><strong>Customer Focus:</strong> Your satisfaction is our top priority. We are committed to providing exceptional service and a seamless shopping experience.</li>
            <li className='mt-2'><strong>Diversity & Inclusion:</strong> We celebrate diversity in literature and strive to provide a platform for voices from all walks of life.</li>
            <li className='mt-2'><strong>Sustainability:</strong> We are dedicated to sustainable practices, from eco-friendly packaging to supporting publishers who prioritize environmental responsibility.</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">Visit Us</h2>
          <p className='mt-4 text-left text-white dark:text-gray-100 leading-relaxed'>
            Our store is located at [Store Address]. We invite you to visit us and explore our extensive collection. Whether you're looking for the latest bestseller, a hidden gem, or a gift for a loved one, [Bookstore Name] has something for everyone.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 text-left text-white dark:text-gray-100">Connect With Us</h2>
          <p className='mt-4 text-left text-white dark:text-gray-100 leading-relaxed'>
            Stay updated with our latest news, events, and promotions by following us on [Social Media Links]. Sign up for our newsletter to receive exclusive offers and updates directly in your inbox.
          </p>
          <Link to="/">
            <button className='mt-6 mb-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
