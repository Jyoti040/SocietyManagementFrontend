// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";
// import { Data } from "@/pages/Evaluation";
// import { format } from "date-fns";

// const EvaluationCard = ({ head, arr }: { head: string; arr: Data[] | string }) => {
  
//   return (
//     <div className="flex justify-center flex-col items-center">
//       <h1 className="p-4 bg-blue-800 text-white  mt-4 rounded-lg text-lg">
//         {head}
//       </h1>

//       <Card className="p-2 border-none">
//         <CardContent className="p-2">
//           {typeof arr === "string" ? (
            
//             <CardDescription className="bg-blue-100 m-3 rounded-lg">
//               <CardTitle className="py-6 px-4 ">
//                 <h1 className="text-black">1. {arr}</h1>
//               </CardTitle>
//             </CardDescription>
//           ) : (
            
//             arr.map(({ EnrollmentNo, Title, Description, DateAchieved }, index: number) => {
//               return (
//                 <CardDescription
//                   key={index}
//                   className="bg-blue-100 m-3 rounded-lg"
//                 >
//                   <CardTitle className="py-6 px-4 border border-b-2 border-b-black">
//                     <h1 className="text-black">{Title}</h1>
//                     <h6 className="text-sm">Duration: {format(DateAchieved,"MMMM dd, yyyy")}</h6>
//                   </CardTitle>

//                   <ul className="list-disc list-outside py-2 px-6 font-medium text-black">
//                     <li className="p-1">Enrollment No: {EnrollmentNo}</li>
//                     {/* <li className="p-1">Society ID: {SocietyID}</li>
//                     <li className="p-1">Achievement ID: {AchievementID}</li> */}
//                     <li className="p-1">Description: {Description}</li>
//                   </ul>
//                 </CardDescription>
//               );
//             })
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EvaluationCard;


import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Data } from "@/pages/Evaluation";
import { format } from "date-fns";

const EvaluationCard = ({ head, arr }: { head: string; arr: Data[] | string }) => {
  
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-0">
      {/* Header */}
      <h1 className="p-4 bg-blue-800 text-white mt-4 rounded-lg text-lg md:text-xl w-full text-center">
        {head}
      </h1>

      {/* Card */}
      <Card className="p-2 w-full md:max-w-3xl border-none mt-4">
        <CardContent className="p-2">
          {typeof arr === "string" ? (
            <CardDescription className="bg-blue-100 m-3 rounded-lg">
              <CardTitle className="py-6 px-4">
                <h1 className="text-black text-base md:text-lg">1. {arr}</h1>
              </CardTitle>
            </CardDescription>
          ) : (
            arr.map(({ EnrollmentNo, Title, Description, DateAchieved }, index: number) => {
              return (
                <CardDescription
                  key={index}
                  className="bg-blue-100 m-3 rounded-lg shadow-md"
                >
                  <CardTitle className="py-6 px-4 border-b-2 border-black">
                    <h1 className="text-black text-lg md:text-xl">{Title}</h1>
                    <h6 className="text-sm text-gray-600">
                      Duration: {format(DateAchieved, "MMMM dd, yyyy")}
                    </h6>
                  </CardTitle>

                  <ul className="list-disc list-outside py-2 px-6 font-medium text-black">
                    <li className="p-1">Enrollment No: {EnrollmentNo}</li>
                    <li className="p-1">Description: {Description}</li>
                  </ul>
                </CardDescription>
              );
            })
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EvaluationCard;
