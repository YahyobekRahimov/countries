import Image from "next/image";
import Header from "./ui/Header";
import Container from "./ui/Container";
import Filters from "./ui/Filters";
import Link from "next/link";

export interface country {
   name: {
      common: string;
      nativeName: string;
   };
   flags: {
      png: string;
      svg: string;
      alt: string;
   };
   currencies: string[];
   capital: string[];
   cca3: string;
   region: string;
   subregion: string;
   languages: string[];
   area: string | number;
   population: number | string;
   continents: string[];
}

export default async function Home() {
   const getData = async () => {
      try {
         const res = await fetch(
            "https://frontend-mentor-apis-6efy.onrender.com/countries"
         );
         if (!res.ok) {
            throw new Error("Failed to retrieve data");
         }

         const result = await res.json();
         return result;
      } catch (error) {
         console.log(error);
      }
   };

   const countries: {
      data: country[];
      total: number;
      limit: number;
      skip: number;
   } = await getData();

   return (
      <>
         <Header></Header>
         <section className="bg-zinc-50 dark:bg-slate-800 text-black dark:text-white">
            <Container>
               <Filters />
            </Container>
         </section>
         <section className="dark:bg-slate-800 bg-zinc-50 text-black dark:text-white">
            <Container className="grid grid-cols-1 gap-10 pt-10 items-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
               {countries &&
                  countries.data.map((country, index) => {
                     return (
                        <Link
                           href={`/country/${country.cca3.toLowerCase()}`}
                           key={index}
                        >
                           <div className="dark:bg-slate-900 flex flex-col justify-between shadow-md">
                              <div className="">
                                 <img
                                    src={country.flags.png}
                                    alt={country.flags.alt}
                                    className="w-full"
                                 />
                              </div>
                              <div className="px-5 pb-5 pt-5">
                                 <h3 className="font-bold text-lg mb-3">
                                    {country.name.common}
                                 </h3>
                                 <p>
                                    <strong>Population: </strong>{" "}
                                    {country.population.toLocaleString()}
                                 </p>
                                 <p>
                                    <strong>Region: </strong>{" "}
                                    {country.region}
                                 </p>
                                 <p>
                                    <strong>Capital: </strong>{" "}
                                    {country.capital}
                                 </p>
                              </div>
                           </div>
                        </Link>
                     );
                  })}
            </Container>
         </section>
      </>
   );
}
