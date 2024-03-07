import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex">
            <SideNav />
            <div className="flex flex-col flex-1 items-center justify-center mb-32">
              <img
                alt="LogoImage"
                className="max-w-full"
                src="https://s3-alpha-sig.figma.com/img/9e94/6a94/4ef20bfd62fdde437d3084005e68980d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMUjUjw8eSWGv89a2GuW0qq0LtejZAB4IulJs0tKg5TY3zV0h-aug7H3ob5ShlvbAwWtmctoMqynFIMRX9Ncacf7WhcAo5ZvwkCUTEkK6MVSJW-kU0s2gnYEWIxVNq-RySduhzVuW2EgswLmRoN~DnonyojE7dZL2XZRFFne~6kMYRYX2ueYQxerduuMEACyV~KwXnkCqDKzioes69rhACmLv8KOTpt5dMxu1MtKNhRATG~HYU2djfQSyTSBaMS6xsqZ8XvpVi5ABG7qbq~2Zqa2yvwxIOWG~5Nv~mQYGfeetnHCcQuGkAhTDeZQgeqBjDFUKKg3ILhvwMnlYLu3LA__"
              />
              <p className="text-base text-gray-700">Welcome to Digitalflake Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
