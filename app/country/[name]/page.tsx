import { country } from "@/app/page";
import Container from "@/app/ui/Container";
import Header from "@/app/ui/Header";
import Image from "next/image";
import Link from "next/link";

export default async function page({
   params,
}: {
   params: {
      name: string;
   };
}) {
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

   // @ts-ignore
   const country: country = countries.data.find(
      (country) => country.cca3.toLowerCase() === params.name
   );

   return (
      <div className="min-h-screen">
         <Header />
         <main className="dark:bg-slate-800 h-screen dark:text-white">
            <Container className="h-full">
               <Link href={"/"}>Back</Link>

               <div>
                  <img
                     src={country.flags.png}
                     alt={country.flags.alt}
                  />
                  <div>
                     <h1>{country && country.name.common}</h1>
                     <div>
                        <div>
                           <p>
                              <strong>Native Name: </strong>
                              <span>
                                 {country && country.name.nativeName}
                              </span>
                           </p>
                           <p>
                              <strong>Population: </strong>
                              <span>
                                 {country &&
                                    country.population.toLocaleString()}
                              </span>
                           </p>
                           <p>
                              <strong>Region: </strong>
                              <span>{country && country.region}</span>
                           </p>
                           <p>
                              <strong>Sub Region: </strong>
                              <span>
                                 {country && country.subregion}
                              </span>
                           </p>
                        </div>
                        <div>
                           <p>
                              <strong>Capital: </strong>
                              <span>
                                 {country && country.capital}
                              </span>
                           </p>
                           <p>
                              <strong>Currencies: </strong>
                              <span>
                                 {country &&
                                    country.currencies.join(", ")}
                              </span>
                           </p>
                           <p>
                              <strong>Languages: </strong>
                              <span>
                                 {country &&
                                    country.languages.join(", ")}
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </main>
      </div>
   );
}
