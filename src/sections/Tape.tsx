// import { Fragment } from "react";
// import StarIcon from "../../public/icons/star.svg";

// const words = [
//   "Performant",
//   "Reliable",
//   "Responsive",
//   "Robust",
//   "Scalable",
//   "Secure",
//   "Accessible",
//   "User Friendly",
//   "Maintainable",
//   "Interactive",
//   "Search Optimized",
//   "Usable",
// ];

// export const TapeSection = () => {
//   return (
//     <div className="py-16 lg:py-24 overflow-x-clip">
//       <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
//         <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
//             {[...new Array(2)].fill(0).map((_, idx) => (
//               <Fragment key={idx}>
//                 {words.map((word) => (
//                   <div key={word} className="inline-flex gap-4">
//                     <span className="text-gray-900 uppercase font-extrabold text-sm">
//                       {word}
//                     </span>
//                     <StarIcon className="size-6 text-gray-900 -rotate-12" />
//                   </div>
//                 ))}
//               </Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import ScrollVelocity from '@/components/ScrollVelocity';
import React from "react";

const Tape = () => {
  return (
    <div id="tape">
        <ScrollVelocity
        texts={[
          "Refactored • Optimized • Scalable • Maintainable",
          "Modular • Responsive • Secure • Accessible",
          "Reliable • Interactive • Performant • Structured",
          "Reusable • User Focused • Search Optimized • Production Ready",
        ]}
        velocity={40}
        className="custom-scroll-text text-5xl font-black tracking-tight text-white/60"
        numCopies={2}
        damping={50}
        stiffness={400}
      />
    </div>
  );
};

export default Tape;
