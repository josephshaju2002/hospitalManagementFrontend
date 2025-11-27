import React, { useState } from "react";
import Header from "../../Common/Components/Header";
import Footer from "../../Common/Components/Footer";

const videos = [
  {
    id: 1,
    title: "How to Boost Your Immunity Naturally",
    link: "https://youtu.be/7H0qAqXR-fw",
    thumbnail: "https://img.youtube.com/vi/7H0qAqXR-fw/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Casually Explained: Being Healthy",
    link: "https://youtu.be/uan3Aj0bHKc",
    thumbnail: "https://img.youtube.com/vi/uan3Aj0bHKc/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "The BEST way to start your day! | 10-Minute Morning Yoga",
    link: "https://youtu.be/klmBssEYkdU",
    thumbnail: "https://img.youtube.com/vi/klmBssEYkdU/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "How stress affects your brain",
    link: "https://youtu.be/WuyPuH9ojCE",
    thumbnail: "https://img.youtube.com/vi/WuyPuH9ojCE/maxresdefault.jpg",
  },
];

const Awareness = () => {
  const [search, setSearch] = useState("");

  const filteredVideos = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="px-5 md:px-20 py-16 bg-[#FAF7FF] min-h-screen text-[#1E142F]">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#5E35B1] text-center">
          Health Awareness Videos
        </h1>
        <p className="text-center text-gray-600 mt-3 mb-10">
          Stay informed and learn healthy habits through trusted video resources.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-[#D1C4E9] bg-white rounded-full shadow-md 
            focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
          />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-[#EDE7F6] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay Play Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <a href={video.link} target="_blank" rel="noreferrer">
                      <span className="text-white text-6xl">▶</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#1E142F]">
                    {video.title}
                  </h3>

                  <a
                    href={video.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 bg-[#7E57C2] text-white py-2 px-5 rounded-lg 
                    hover:bg-[#5E35B1] transition shadow-md"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl col-span-2">
              No videos found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Awareness;
