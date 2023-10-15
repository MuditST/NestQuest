import Image from "next/image";
import "../components/Rental.css"
const Rentals = () => {
  const rentals = [
    { title: "Atlanta, USA", image: "assets/house1.jpg" , price: "1,112", URL: "www.google.com", desc: "Michael Chang", about: "Offering my studio apartment for rent in Atlanta, close to Georgia tech", avatar: "assets/avatar_1.png" , date: "Lease Transfer on 22/10/2023" },
    { title: "Austin, USA", image: "assets/house2.jpg", price: "1,541", URL: "www.google.com", desc: "Emily Rodriguez", about: "Urgently seeking a lease transfer for my 4b4b house near Columbia University in New York City", avatar: "assets/avatar_2.png", date: "Lease Transfer on 25/10/2023" },
    { title: "Los Angeles, USA", image: "assets/house3.jpg", price: "782", URL: "www.google.com", desc: "Alex Patel", about: "Posting a new lease for a spacious 2-bedroom house near the University of Chicago", avatar: "assets/avatar_3.png", date: "Lease Transfer on 24/10/2023" },
    { title: "NYC, USA", image: "assets/house4.jpg", price: "1459", URL: "www.google.com", desc: "Jennifer Smith", about: "Looking for a tenant to take over my lease for a 5-bedroom house near the Texas Medical College , Houston", avatar: "assets/avatar_4.png", date: "Lease Transfer on 23/10/2023" },
    { title: "Boston, USA", image: "assets/house5.jpg", price: "2100", URL: "www.google.com", desc: "Kevin Turner", about: "Offering my beachfront 4-bedroom house for rent in Miami, ideal for students", avatar: "assets/avatar_5.png", date: "Lease Transfer on 26/10/2023" },
    { title: "Raleigh, USA", image: "assets/house6.jpg", price: "1890", URL: "www.google.com", desc: "Jonathan Clark", about: "Seeking a lease transfer for his 3-bedroom house in Washington, D.C", avatar: "assets/avatar_6.png", date: "Lease Transfer on 27/10/2023" },
    { title: "Denver, USA", image: "assets/house7.jpg", price: "1,541", URL: "www.google.com", desc: "David Brown", about: "Posting a new lease for a modern 2-bedroom house conveniently located near Boston University", avatar: "assets/avatar_7.png", date: "Lease Transfer on 28/10/2023" },
    { title: "Miami, USA", image: "assets/house8.jpg", price: "1,390", URL: "www.google.com", desc: "Samantha Taylor", about: "Urgently looking for someone to take over my lease for a 4-bedroom ideal for students near the University of Denver", avatar: "assets/avatar_8.png", date: "Lease Transfer on 29/10/2023" },
    { title: "Las Vegas, USA", image: "assets/house9.jpg", price: "1,780", URL: "www.google.com", desc: "Ryan Mitchell", about: "Offering my 2-bedroom house with a great downtown view for rent in Jacksonville-Florida", avatar: "assets/avatar_9.png", date: "Lease Transfer on 30/10/2023" },
    { title: "London, UK", image: "assets/house10.jpg", price: "1,675", URL: "www.google.com", desc: "Olivia Turner", about: "Seeking a lease transfer for my 3-bedroom house in San Francisco", avatar: "assets/avatar_10.png", date: "Lease Transfer on 31/10/2023" },
    { title: "Dallas, USA", image: "assets/house11.jpg", price: "1,890", URL: "www.google.com", desc: "Rachel White", about: "Looking for a tenant to take over my lease for a 4-bedroom house near the University of California, Berkeley", avatar: "assets/avatar_11.png", date: "Lease Transfer on 01/11/2023" },
    { title: "Toronto, Canada", image: "assets/house12.jpg", price: "1,541", URL: "www.google.com", desc: "Brian Foster", about: "Offering my 2-bedroom house for rent in Seattle, close to the University of Washington", avatar: "assets/avatar_12.png", date: "Lease Transfer on 02/11/2023" },
    { title: "Seattle, USA", image: "assets/house13.jpg", price: "2224", URL: "www.google.com", desc: "Mia Ramirez", about: "Urgently seeking a lease transfer for my 3-bedroom house near the University of California, Los Angeles", avatar: "assets/avatar_13.png", date: "Lease Transfer on 03/11/2023" },
    { title: "Atlanta, USA", image: "assets/house14.jpg", price: "890", URL: "www.google.com", desc: "Ethan Baker", about: "Posting a new lease for a 4-bedroom house near the University of California, San Diego", avatar: "assets/avatar_14.png", date: "Lease Transfer on 04/11/2023" },
    { title: "Memphis, USA", image: "assets/house15.jpg", price: "680", URL: "www.google.com", desc: "Jessica Lee", about: "Looking for a tenant to take over my lease for a 3-bedroom house near the University of California, Irvine", avatar: "assets/avatar_15.png", date: "Lease Transfer on 05/11/2023" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 ">
        {rentals.map((rental) => (
          <div className="rental-card">
          <a href={`http://${rental.URL}`} target="_blank" className="card-link">
            <div className="relative">
              <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
              <div className="flex rental-card-inner bg-black">
                {/* Background */}
                <img
                  src={rental.image}
                  alt=""
                  className="object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full opacity-60"
                />
                {/* Title */}
                <div className="absolute text-emerald-200 font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
                  {rental.title}
                  <span>&#x2022;</span>
                  <p className="text-[18px] text-slate-2400">${rental.price}</p>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="pt-3 flex justify-between items-start rental-description">
              {/* Left */}
              <div className="relative left-20">
                <p className="max-w-[20px] font-semibold text-[17px]">
                  {rental.desc}
                </p>
                <p className="max-w-[14rem] text-[16px] -mt-1 text-gray-500">
                  {rental.about}
                </p>
                <p className="absolute text-emerald-800 max-w-[17rem] font-bold text-[17px]">{rental.date}</p>
              </div>
              {/* Right */}
              <img src={rental.avatar} className="absolute w-16 h-16" alt="Avatar" />
    
            </div>
          </a>
        </div>
        ))}
      </div>
    </div>
    
  )
}

export default Rentals
