import Container from "./Container";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
   return (
      <header className="bg-white dark:bg-slate-700">
         <Container className="flex justify-between items-center text-3xl">
            <div className="font-extrabold">Where in the world?</div>
            <ThemeSwitcher />
         </Container>
      </header>
   );
}
