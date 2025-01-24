import { FaLocationDot } from "react-icons/fa6";
import { MapPin } from "lucide-react";
const AboutFirstPart = ({ part1 }) => {
  const { page } = part1;

  return (
    <div className="">
      {/* About */}
      <section className="pt-[20px] pb-[20px] md:pt-[90px] md:pb-[90px] border-b-2 border-t-2 md:border-b-0 md:border-t-0 border-[#F0E19A]">
        <div className=" flex">
          <div className="w-[81px] md:w-[450px] mt-7 md:mt-12 border h-[0px]  border-[#F0E19A]"></div>
          <div className="relative w-[180px] md:w-[400px] md:h-[97px] mx-auto border-l-2 border-r-2 border-[#F0E19A] ">
            <img
              className="w-[25px] h-[25px] md:w-[45px] md:h-[45px] absolute top-[34px] md:top-[63%] 
              left-[37%] md:left-[40%] transform -translate-x-[50%] md:-translate-x-[52%] -translate-y-[50%]"
              src={page.gif}
              alt=""
            />

            <p className="font-semibold text-[8px] md:text-[14px] font-cinzel text-[#CD9B2F] text-center">
              {page.header.main_title}{" "}
            </p>

            <p className="font-bold text-[30px] md:text-[54px] font-cinzel text-center text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
              {page.title}
            </p>
          </div>

          <div className="w-[81px] md:w-[450px] mt-7 md:mt-12 h-[0px]  border border-[#F0E19A]"></div>
        </div>
      </section>

      <section className="relative p-3 md:p-0 w-full md:w-[1226px] mx-auto mt-10 md:mt-24 ">
        <img
          className="w-full  border-2 border-solid border-[#CD9B2F] md:w-[1226px] md:h-[767px] mx-auto"
          src={page.main_section.image.src}
          alt={page.main_section.image.alt}
        />
        <div></div>
        <p className="mt-5 md:mt-10 font-mulish font-semibold text-[14px] text-[#CD9B2F]">
          {page.main_section.short_title}
        </p>
        <p className="font-bold text-[20px] md:text-[54px] font-cinzel leading-[20px] md:leading-[60px] mt-2 text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text ">
          {page.main_section.headline}
        </p>
        <img
          className="w-[16px] h-[16px] md:w-[45px] md:h-[45px] absolute top-[93%] md:top-[97%] left-[56%] md:left-[44%] transform -translate-x-[50%] md:-translate-x-[50%] -translate-y-[42%] md:-translate-y-[55%]"
          src={page.gif}
          alt=""
        />
      </section>

      <hr
        className=" mt-4 md:mt-10 md:w-[1226px] mx-auto border 
      border-[#F4E59C]"
      />

      <section className="">
        <p
          className="font-mulish font-light md:font-normal text-[14px] md:text-[18px] leading-[15px] md:leading-[28px] text-[#525252]  w-[315px] md:w-[1226px] text-justify mx-auto mt-7 md:mt-10
        "
        >
          {page.main_section.description}
        </p>

        <div className="w-[315px] md:w-[1231px]  md:h-[613px] border-2 border-[#F4E59C] mt-7 md:mt-10 mx-auto md:flex">
          <div>
            <img
              className="w-full md:w-[476px] md:h-[610px]"
              src={page.about_section.image.src}
              alt=""
            />
          </div>

          <div>
            <div className="w-[315px] md:w-[755px] border-b-2 md:h-[250px] border-[#F4E59C] p-3 md:p-10">
              <p className="text-[#CD9B2F] font-mulish font-medium text-[14px] ">
                {page.about_section.small_title}
              </p>
              <h2 className="font-cinzel font-bold text-[20px] md:text-[35px] leading-[30px] md:leading-[64px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
                {page.about_section.title}
              </h2>
              <p className="font-mulish font-normal text-[12px] md:text-[18px] leading-[20px] md:leading-[28px] text-justify">
                {page.about_section.description}
              </p>
            </div>

            <div className="mt-3 md:mt-0 p-3 md:p-8">
              {/* mission */}
              <div>
                <p className="font-italiana font-medium text-[24px] md:text-[28px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
                  Our Mission
                </p>
                <h2 className="text-[14px] md:text-[18px] text-[#525252] font-mulish font-medium text-justify md:w-[676px]">
                  {page.about_section.mission}
                </h2>
              </div>
              {/* vision */}
              <div className="mt-1 mb-1">
                <p className="font-italiana font-medium text-[24px] md:text-[28px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
                  Our Vision
                </p>
                <h2 className="text-[14px] md:text-[18px] text-[#525252] font-mulish font-medium text-justify md:w-[676px]">
                  {page.about_section.vision}
                </h2>
              </div>
              {/* values */}
              <div>
                <p className="font-italiana font-medium text-[24px] md:text-[28px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
                  Our Values
                </p>
                <h2 className="text-[14px] md:text-[18px] text-[#525252] font-mulish font-medium text-justify md:w-[676px]">
                  {page.about_section.values}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section>
        <div className="w-[315px] md:w-[1100px] mt-12 md:mt-20 mx-auto">
          <p
            className="font-mulish font-semibold md:text-[14px] text-[#CD9B2F] 
            text-center "
          >
            RNTHI CAMPUSES
          </p>
          <p className="font-bold text-[16px] md:text-[54px] font-cinzel text-center leading-[64px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text">
            {page.pageTitle}
          </p>

          <div className="md:flex md:items-center md:justify-center gap-7 ">
            {/* location 1 */}
            <div className=" ">
              <div className="relative w-[280px] h-[390px] md:w-[300px] md:h-[410px]">
                <img
                  className="absolute top-20 md:top-24 left-0 md:left-8 w-full h-full object-cover"
                  src={page.locations1.mapImage.src}
                  alt={page.locations1.mapImage.alt || "Map of Dhaka"}
                />
              </div>

              <div className="md:w-[388px] w-[300px] h-[450px] md:h-[530px] bg-[#F2E39B] border-2 border-[#CD9B2F] mx-auto md:mx-0">
                <p className="font-bold md:w-[302px] w-[200px] text-[18px] md:text-[28px] font-cinzel leading-[30px] md:leading-[36px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text md:mx-auto pt-12  md:pt-14 mx-4">
                  {page.locations1.city}
                </p>
                <p className="md:w-[306px] w-[260px] h-[40px] md:h-[48px] font-mulish font-bold md:text-[15px] text-[12px] text-[#525252] leading-[18px] md:leading-[24px] mx-auto">
                  {page.locations1.address}
                </p>
                <p className="md:w-[306px] w-[260px] h-[48px] font-mulish font-bold md:text-[15px] text-[12px] text-[#525252] leading-[18px] md:leading-[24px] mx-auto md:mt-2 mt-1">
                  {page.locations1.email} &nbsp;|&nbsp; {page.locations1.phone}
                </p>

                <iframe
                  className=" mx-auto w-[270px] h-[250px] md:w-[322px] mb-6 md:mb-0 md:h-[300px]"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=322&amp;height=300&amp;hl=en&amp;q=rn tourism and hospitality&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>

                <div className="relative">
                  <a
                    className="absolute md:bottom-7 bottom-12  left-1/2 -translate-x-1/2 z-10  mx-auto md:w-[224px] w-[175px] h-[40px] md:h-[50px] bg-gradient-to-r from-primary-light to-primary-dark flex justify-center items-center gap-1 font-mulish font-bold text-[12px] md:text-[14px] text-[#F9F7F2]  hover:shadow-lg hover:shadow-[#993128] leading-[24px]"
                    href="https://www.google.com/maps/place/RN+Tourism+%26+Hospitality+Management+Institute/@23.768123,90.42634,14z/data=!4m6!3m5!1s0x3755b984ef8d231b:0xea3290f19bc3a0ed!8m2!3d23.7681228!4d90.42634!16s%2Fg%2F11rp9ysl73?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                  >
                    <span className=" text-[#CD9B2F] md:w-[18px] md:h-[22px] border-1 border-[#FFFFFF] md:mt-2">
                      <FaLocationDot />
                    </span>{" "}
                    Get The Location
                  </a>
                </div>
              </div>
            </div>

            {/* location 2 */}
            <div className=" ">
              <div className="relative w-[280px] h-[390px] md:w-[300px] md:h-[410px]">
                <img
                  className="absolute top-20 md:top-24 left-0 md:left-8 w-full h-full object-cover"
                  src={page.locations2.mapImage.src}
                  alt={page.locations2.mapImage.alt || "Map of Dhaka"}
                />
              </div>

              <div className="md:w-[388px] w-[300px] h-[450px] md:h-[530px] bg-[#F2E39B] border-2 border-[#CD9B2F] mx-auto md:mx-0">
                <p className="font-bold md:w-[302px] w-[200px] text-[18px] md:text-[28px] font-cinzel leading-[30px] md:leading-[36px] text-transparent bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text md:mx-auto pt-12  md:pt-14 mx-4">
                  {page.locations2.city}
                </p>
                <p className="md:w-[306px] w-[260px] h-[40px] md:h-[48px] font-mulish font-bold md:text-[13px] text-[11px] text-[#525252] leading-[18px] md:leading-[24px] mx-auto">
                  {page.locations2.address}
                </p>
                <p className="md:w-[306px] w-[260px] h-[48px] font-mulish font-bold md:text-[15px] text-[12px] text-[#525252] leading-[18px] md:leading-[24px] mx-auto md:mt-2 mt-1">
                  {page.locations2.email} &nbsp;|&nbsp; {page.locations2.phone}
                </p>

                <iframe
                  className=" mx-auto w-[270px] h-[250px] md:w-[322px] mb-6 md:mb-0 md:h-[300px]"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=322&amp;height=300&amp;hl=en&amp;q=rn tourism and  Chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>

                <div className="relative">
                  <a
                    className="absolute md:bottom-7 bottom-12  left-1/2 -translate-x-1/2 z-10  mx-auto md:w-[224px] w-[175px] h-[40px] md:h-[50px] bg-gradient-to-r from-primary-light to-primary-dark flex justify-center items-center gap-1 font-mulish font-bold text-[12px] md:text-[14px] text-[#F9F7F2]  hover:shadow-lg hover:shadow-[#993128] leading-[24px]"
                    href="https://www.google.com/maps/place/RN+TOURISM+%26+HOSPITALITY+MANAGEMENT+INSTITUTE/@22.36037,91.812653,14z/data=!4m6!3m5!1s0x30acd9000b6a2ae9:0xfa5678d60e0ca9a6!8m2!3d22.3604386!4d91.8126385!16s%2Fg%2F11wfsdvf9v?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    <span className=" text-[#CD9B2F] md:w-[18px] md:h-[22px] border-1 border-[#FFFFFF] md:mt-2">
                      <FaLocationDot />
                    </span>{" "}
                    Get The Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[310px] md:w-[1230px]  md:h-[533px] border-2 border-[#F2E39B] mx-auto mt-8 md:mt-20 md:flex">
          <div className="md:w-[622px] p-5 md:p-10">
            <p className="font-mulish font-bold text-[12px] md:text-[22px] text-[#525252] text-justify leading-[20px] md:leading-[28px]">
              Be part of a close-knit community, where everyone ks your
              language—food.
            </p>
            <p className="font-mulish font-normal text-[12px] md:text-[18px] text-[#525252] text-justify leading-[20px] md:leading-[28px] mt-2 md:mt-5">
              At RNTHI, you'll find all the ingredients you need to create a
              college experience that's uniquely yours—guided by your passions,
              your interests, and your imagination. Each of our campuses offers
              a distinct favor, a unique feel; yet at everyone, you'll be part
              of a tight-knit, diverse community of students and instructors
              from all over the world, united in your shared passion for food.
            </p>
            <div className="mt-3 md:mt-4 w-[280px] md:w-[562px] border border-[#F2E39B]"></div>
            <p className="font-mulish font-bold text-[12px] md:text-[15px] text-[#525252] text-justify leading-[16px] md:leading-[18px] mt-5 md:mt-8">
              {page.accreditation.title}
            </p>
            <div className="flex mt-4 md:mt-5 md:w-[433px] md:h-[77px] justify-between">
              <img
                src={page.accreditation.image1.src}
                alt={page.accreditation.image1.alt}
              />
              <img
                src={page.accreditation.image2.src}
                alt={page.accreditation.image2.alt}
              />
              <img
                src={page.accreditation.image3.src}
                alt={page.accreditation.image3.alt}
              />
              <img
                src={page.accreditation.image4.src}
                alt={page.accreditation.image4.alt}
              />
            </div>
          </div>
          <div>
            <img className="md:w-[608px] md:h-[533px] mt-5 md:mt-0" src={page.communitySection.image.src} alt={page.communitySection.image.alt} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFirstPart;
