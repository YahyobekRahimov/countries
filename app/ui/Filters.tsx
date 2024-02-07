import SearchIcon from "./SearchIcon";

const options = [
   {
      name: "Africa",
      value: "africa",
   },
   {
      name: "America",
      value: "america",
   },
   {
      name: "Asia",
      value: "asia",
   },
   {
      name: "Europe",
      value: "europe",
   },
];

export default function Filters() {
   return (
      <div className="flex items-center justify-between pt-10">
         <div className="bg-white dark:bg-slate-950 w-[35%] p-3 gap-3 shadow-sm focus-within:ring-blue-500 flex items-center justify-center">
            <SearchIcon />
            <input
               className="focus:outline-none w-full dark:bg-slate-950"
               type="text"
               placeholder="Search for a country..."
            />
         </div>
         <div>
            <select
               className="bg-white dark:bg-slate-950 p-2 rounded shadow-sm"
               id=""
            >
               {options.map((option) => (
                  <option value={option.value} key={option.value}>
                     {option.name}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
}
