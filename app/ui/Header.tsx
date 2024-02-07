import Container from "./Container";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
   return (
      <header className="bg-white dark:bg-slate-700 dark:text-white">
         <section className="shadow-md">
            <Container className="flex justify-between items-center text-3xl py-5">
               <div className="font-extrabold">
                  Where in the world?
               </div>
               <ThemeSwitcher />
            </Container>
         </section>
      </header>
   );
}
