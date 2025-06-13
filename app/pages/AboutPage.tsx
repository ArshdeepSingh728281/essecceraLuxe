import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Kyoto Ceramics</title>
      </Head>

      <div className="relative flex min-h-screen flex-col bg-[#fcfaf8]  bg-white overflow-x-hidden ">
        <TopLine />
        <Navbar />

        <div className="flex-grow flex flex-col items-center px-4 sm:px-10 lg:px-20 xl:px-40 py-8 mt-[20px]">
          <div className="w-full max-w-5xl flex flex-col gap-6">

            {/* Hero Section */}
            <div
              className="bg-cover bg-center flex flex-col justify-end rounded-lg min-h-[218px] sm:min-h-[300px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuMsNhi-HNXBDkLEnXQ8KdlsMvfgC-G6Q94G_lsS5WRU-tAkcBuux2B85GMXlDeA7mOiZp7lHeM2beptwdoalZrOkdZkXwYJJ6IPAotl5Wl7zXhFeQ3xNngSIE9PRBzBy2ruRrP8EtPR03HV2ZrXawoVsDMsf52Uc1tT_xYX9f9tKtLb5aafcYpUo-yTZyrCxqXqmKpfmn0Y5TDZKuLQEISYnlO4ulJkHAimkNgILHGGMk_2jhj3E-MWlADzkY7A1yUb6hV7mSBus")`,
              }}
            >
              <div className="p-4">
                <p className="text-white text-2xl sm:text-3xl font-bold">Our Story</p>
              </div>
            </div>

            {/* About Text */}
            <p className="text-[#1b130e] text-base leading-relaxed px-1">
              Kyoto Ceramics was founded in 2005 by Hana Tanaka, a passionate collector of Japanese ceramics. Her vision was to create a space where the beauty and craftsmanship of
              these unique pieces could be shared with a wider audience. Over the years, Kyoto Ceramics has grown into a leading online destination for Japanese ceramics,
              representing both established and emerging artists.
            </p>

            {/* Our Team */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Kenji Sato",
                    desc: "Kenji Sato is known for his minimalist designs and use of natural materials.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAdquZWtOgX8qPTl2By8FcK-VdwFjwOM2xRwAVcA6XXn8N5_myADdfktV6frllJ0u1XhEXVLmr4HSc0EUSdVBHkpd3T5umF5LFodPhcSZPhr7omKS9Kds-SFF5HQt9V_GPhA-qxmQFyIdp8iugfziwyEiutOkr6AFUPK-oxCQwI0p9UMRo4Tl9HmNO23mSVJs7Y-2UTOOjAcGAn9J4ovvFOP2lwr-IRuilVNipDg_gZhnCKv6xZt6-aRk_6YFTbSeWl9yABGlEJ-k",
                  },
                  {
                    name: "Akari Ito",
                    desc: "Akari Ito's work is characterized by its delicate forms and intricate patterns.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1bqs0XYQDygsE1qhyj8AGKXyEM1A4R56pOCIzZwmRJMvwfgmSETFMJDDd7HDz1EBN7_ypFjUR508Rv-YIW-Nycv_gury7SuUsiaxaNxSDSxTcPm_PaOeYZ4yCyXmLAkTBkiInLYdW-J4afKDNjtMbFhiaPL-Gj3a7vmbCH4LrFTEQSBFANsUT1y06JczHDPm_Y7oNi2Jqu73CZ7fv3A_Z-V0YyDB6Z3kDSWFFCktX6QoExxfV8Xr_-bx8ItJVUSsP2ogupR8fjeA",
                  },
                  {
                    name: "Hiroshi Nakamura",
                    desc: "Hiroshi Nakamura combines traditional techniques with contemporary aesthetics.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgCGG7hW9s-b6-ATYtnd_VV3ZgHKBTqrhXu6cW_g-lAuKVEmB3_19WdhCpx44-qs59n9QGE_5uTP1PqHqGg9T50YS386ruvzYHMOUvLyc-gvimVLAdRHwvd4KLXz_3c80lrepp0UTIuTqQ8yd4S0_1lSLbAZtD9FaZZo6uFitjB8Kb8OSxbB4o7itDxatgRJ2nqSZi5Hc44oI5OPEh4LaVPWDIDKvT5nmpUt8PGrlIAStqnnYGcquDmlXd5sTgTf53ZDHxWoWFn9I",
                  },
                ].map((artist, i) => (
                  <div className="flex flex-col gap-2" key={i}>
                    <div
                      className="aspect-square bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${artist.img})` }}
                    />
                    <p className="text-[#1b130e] font-medium">{artist.name}</p>
                    <p className="text-[#976b4e] text-sm">{artist.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Section */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3 pt-4">Our Mission</h2>
              <p className="text-[#1b130e] text-base leading-relaxed px-1">
                At Kyoto Ceramics, our mission is to connect people with the rich artistic heritage of Japanese ceramics. We are committed to providing exceptional customer service
                and ensuring that each piece finds a loving home. We believe that these ceramics are not just objects, but expressions of culture and artistry that deserve to be
                cherished.
              </p>
            </div>
          </div>
        </div>

        <Footer />
        <Copyright />
      </div>
    </>
  );
}
