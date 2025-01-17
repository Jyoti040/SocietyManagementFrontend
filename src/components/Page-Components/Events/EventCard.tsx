// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import { Calendar, Clock, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export type EventCardType = {
//   Title: string;
//   EventDateTime: string;
//   EventID: number;
//   EventType: string;
//   LinkToEvent: string;
//   Location: string;
//   ModeOfEvent: string;
//   SocietyID: number;
//   Description: string;
// };

// const EventCard = ({ props }: { props: EventCardType }) => {
//   const eventDate = new Date(props.EventDateTime);
//   return (
//     <Card className="bg-white text-gray-900">
//       <CardHeader>
//         <img
//           src={'https://th.bing.com/th/id/OIP.5xERkyi_1jSC0cvfS691MwHaEn?rs=1&pid=ImgDetMain'} // Replace with dynamic image if available
//           className="rounded-xl h-20 w-80"
//           alt="event image"
//         />
//       </CardHeader>
//       <CardContent>
//         <h2 className="text-center mt-4 text-lg font-bold">{props.Title}</h2>
//         <div className="flex flex-col items-center mt-4 space-y-2">
//           <div className="flex">
//             <Calendar className="mr-2" />
//             {eventDate.toDateString()}
//           </div>
//           <div className="flex">
//             <Clock className="mr-2" />
//             {eventDate.toLocaleTimeString()}
//           </div>
//           <div className="flex">
//             <MapPin className="mr-2" />
//             {props.Location}
//           </div>
//         </div>
//         <p className="text-gray-600 mt-2">{props.Description}</p>
//       </CardContent>
//       <CardFooter>
//         <Link
//           to="/create-event/:societyid/:eventid"
//           className=" bg-blue-500 text-white px-6 py-2 w-full text-center text-md rounded-full transition transform duration-500 ease-in-out hover:scale-105"
//         >
//           Click here to register
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// };

// const PastEventCard = ({ props }: { props: EventCardType }) => {
//   const eventDate = new Date(props.EventDateTime);
//   return (
//     <div className="w-full rounded border border-md border-gray-700 py-4 px-2 my-4">
//       <h2 className="text-2xl font-bold">{props.Title}</h2>
//       <p className="mt-2">{props.Description}</p>
//       <div className="flex flex-col lg:flex-row lg:justify-between mt-2 space-y-2">
//         <div className="flex">
//           <Calendar className="mr-2" />
//           {eventDate.toDateString()}
//         </div>
//         <div className="flex">
//           <Clock className="mr-2" />
//           {eventDate.toLocaleTimeString()}
//         </div>
//         <div className="flex">
//           <MapPin className="mr-2" />
//           {props.Location}
//         </div>
//       </div>
//     </div>
//   );
// };

// export {
//   EventCard,
//   PastEventCard
// };


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export type EventCardType = {
  SocietyName: string;
  Title: string;
  EventDateTime: string;
  EventID: number;
  EventType: string;
  LinkToEvent: string;
  Location: string;
  ModeOfEvent: string;
  SocietyID: number;
  Description: string;
};

const EventCard = ({ props }: { props: EventCardType }) => {
  const eventDate = new Date(props.EventDateTime);

  return (
    <Card className="bg-white text-gray-900 h-full flex flex-col justify-between">
      <CardHeader>
        <img
          src={'https://th.bing.com/th/id/OIP.5xERkyi_1jSC0cvfS691MwHaEn?rs=1&pid=ImgDetMain'} // Replace with dynamic image if available
          className="rounded-xl h-40 w-full object-cover"
          alt="event image"
        />
      </CardHeader>
      <CardContent className="flex-1">
        <h2 className="text-center mt-4 text-lg font-bold">{props.Title}</h2>
        <p className="text-center text-sm text-gray-500 mt-2">{props.SocietyName}</p> {/* Society Name */}
        <div className="flex flex-col items-center mt-4 space-y-2">
          <div className="flex items-center">
            <Calendar className="mr-2" />
            {eventDate.toDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2" />
            {eventDate.toLocaleTimeString()}
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            {props.Location}
          </div>
        </div>
        <p className="text-gray-600 mt-4 text-center">{props.Description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          to={`/create-event/${props.SocietyID}/${props.EventID}`}
          className="bg-blue-500 text-white px-6 py-2 w-full text-center text-md rounded-full transition transform duration-500 ease-in-out hover:scale-105"
        >
          Click here to register
        </Link>
      </CardFooter>
    </Card>
  );
};

const PastEventCard = ({ props }: { props: EventCardType }) => {
  const eventDate = new Date(props.EventDateTime);
  
  return (
    <div className="w-full rounded border border-md border-gray-700 py-4 px-4 my-4 h-full flex flex-col justify-between">
      <h2 className="text-2xl font-bold">{props.Title}</h2>
      <p className="text-center text-sm text-gray-500 mt-2">{props.SocietyName}</p> {/* Society Name */}
      <p className="mt-2">{props.Description}</p>
      <div className="flex flex-col lg:flex-row lg:justify-between mt-2 space-y-2 lg:space-y-0">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          {eventDate.toDateString()}
        </div>
        <div className="flex items-center">
          <Clock className="mr-2" />
          {eventDate.toLocaleTimeString()}
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2" />
          {props.Location}
        </div>
      </div>
    </div>
  );
};

export { EventCard, PastEventCard };


