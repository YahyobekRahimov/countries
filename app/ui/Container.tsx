import { ReactNode } from "react";

export default function Container({
   children,
   className,
}: {
   children: ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`w-full max-w-[1440px] mx-auto px-20 ${className}`}
      >
         {children}
      </div>
   );
}
