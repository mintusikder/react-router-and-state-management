import Price from "./Price";


const PriceOption = () => {
  const gyms = [
    {
      id: 1,
      name: "Fitness Fusion",
      features: [
        "State-of-the-art equipment",
        "Personal training available",
        "Group fitness classes",
        "Sauna and steam room"
      ],
      price : 2344
    },
    {
      id: 2,
      name: "Powerhouse Gym",
      features: [
        "Cardio machines",
        "Strength training equipment",
        "Locker rooms with showers",
        "Nutrition counseling services"
      ]
    },
    {
      id: 3,
      name: "Flex Fitness Center",
      features: [
        "Indoor swimming pool",
        "Yoga and Pilates studio",
        "Cafeteria with healthy snacks",
        "Childcare services"
      ]
    }
  ];
  
  
   return (

        <div>
             <h3>Best Price</h3>
          {
            gyms.map(option => <Price
            key={option.id}
            option={option}
            ></Price>)
          }
        </div>
    );
};

export default PriceOption;