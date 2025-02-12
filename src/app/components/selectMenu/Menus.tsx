"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const menuItems = ["INTRODUCTION", "PROJECTS", "GALLERIES", "JOURNEY", "CONTACT ME"];

export default function SlantedMenu() {
  const [active, setActive] = useState("PROJECTS");

  return (
    <div className="relative flex flex-col items-start gap-2 px-6 py-8">
      {menuItems.map((item) => (
        <motion.div
          key={item}
          className="relative text-4xl font-bold uppercase tracking-wide cursor-pointer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: menuItems.indexOf(item) * 0.1 }}
          onClick={() => setActive(item)}
        >
          {/* Highlight bar */}
          {active === item && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 -z-10 bg-red-500"
              initial={false}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          )}

          {/* Text */}
          <span className={clsx("relative z-10", active === item ? "text-white" : "text-black")}>
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// const menuItems = ["INTRODUCTION", "PROJECTS", "GALLERIES", "JOURNEY", "CONTACT ME"];

// export default function SlantedMenu() {
//   const [active, setActive] = useState("PROJECTS");

//   return (
//     <div className="relative flex flex-col items-start gap-3 p-10">
//       {menuItems.map((item) => (
//         <motion.div
//           key={item}
//           className="relative text-6xl font-extrabold uppercase tracking-wide cursor-pointer"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.3, delay: menuItems.indexOf(item) * 0.1 }}
//           onClick={() => setActive(item)}
//         >
//           {/* Highlight Shape */}
//           {active === item && (
//             <motion.div
//               layoutId="highlight"
//               className="absolute inset-0 -z-10 bg-red-500"
//               initial={false}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               style={{
//                 clipPath: "polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%)", // Bentuk miring
//               }}
//             />
//           )}

//           {/* Text dengan blend mode */}
//           <span
//             className="relative z-10 text-white"
//             style={{
//               mixBlendMode: "difference", // Efek perbedaan warna
//             }}
//           >
//             {item}
//           </span>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
