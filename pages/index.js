import axios from "axios";
import React from "react";
import CardContent from "../components/CardContent";
import Navbar from "../components/Navbar";
import Router from "next/router";

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=startup`);
  const listNews = response.data.data;
  return {
    props: {
      listNews: listNews,
    },
  };
};

const handleDetailNews = (item) => {
  Router.push({
    pathname: `/detailnews/`,
    query: {
      image: item.imageUrl,
      title: item.title,
      content: item.content,
    },
  });
};

const Index = ({ listNews }) => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">Memperkenalkan</p>

          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Protal Berita Revolusioner</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Ini adalah portal berita yang isinya gak sambo sambo aja tentunya tapi tenang aja beritanya terkini dan teraktual anti hoax hoax club tapi banyak link referralnya hehe
          </p>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {listNews.map((item) => {
              return (
                <>
                  <div className="flex flex-col bg-slate-300 border rounded-lg overflow-hidden" key={item.id}>
                    <CardContent image={item.imageUrl} title={item.title} content={item.content} author={item.author} date={item.date} time={item.time} onClickDetail={() => handleDetailNews(item)} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
