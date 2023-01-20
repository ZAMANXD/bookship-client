import React from "react";
// import whyBookShip from './img/why-bookship.jpg';

const WhyBookShip = () => {
  const services = [
    {
      title: "Easy to Buy",
      description:
        "Payment with your Credit or Debit Card!.",
        icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
    },
    {
      title: "Read on Live No need to Download!",
      description:
        "Not necessary to Download your Book, You read your favorite book online",
        icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
    },
    {
      title: "Feel Free to Contact our Author",
      description:
        "If you want to meet our Honorable Author. Then you Connect with our Author on Social links",
        icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
    },
  ];


  return (
    <div className="max-w-7xl mx-auto w-50 px-5 py-10 mt-20">
      <h2 className="mb-12 text-4xl font-bold text-[#34315D]">Why BookShip</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-full rounded-md"
            src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          {services.map((service) => (
            <div className="bg-white rounded-md shadow-md p-5 lg:p-5 my-5">
              <div className="flex gap-x-5 justify-start items-center">
                <div className="rounded-md border p-2 border-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-left text-[#342D65]">
                    {service?.title}
                  </h3>
                  <p className="text-left">{service?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBookShip;
