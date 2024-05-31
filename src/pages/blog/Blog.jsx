import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import { BlogData } from '../../utils/BlogData';
import Blogcard from '../../components/BlogCard/Blogcard';
import Pagination from '../../components/Pagination/Pagination';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Calculate the indexes for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BlogData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Hero
        backgroundImage="cinnomon-stick.jpg"
        heading="Blog"
        subheading="Blog"
      />
      <div className="xl:container mx-auto my-8">
        <section className="p-4 bg-white shadow-md rounded-lg flex">
          <div className="w-1/4">
            <img src="blog-card.png" alt="Blog" className="w-full h-auto rounded-l-lg" />
          </div>
          <div className="w-3/4 p-6">
            <div className="text-secondary text-sm">
              <span className="bg-accent px-2 py-1 rounded">22 May</span>
            </div>
            <h2 className="text-2xl font-bold mt-2">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </p>
          </div>
        </section>
      </div>

      <section className="blog-cards">
        <div className="xl:container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((blog, index) => (
              <Blogcard
                key={index}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={BlogData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
}

export default Blog;
