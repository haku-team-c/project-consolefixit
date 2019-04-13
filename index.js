const service = [
  {
    id: 1,
    name: "Air Conditioner",
    estimatedTime: 6, //hours
    price: 300000, // idr
    guaranteed: 7, // days
    technician: ["taslim", "joe"]
  },
  {
    id: 2,
    name: "Washing Machine",
    estimatedTime: 9,
    price: 500000,
    guaranteed: 14,
    technician: ["mayer", "john"]
  },
  {
    id: 3,
    name: "Refrigerator",
    estimatedTime: 6,
    price: 600000,
    guaranteed: 14,
    technician: ["Atkinson", "Rowan"]
  },
  {
    id: 4,
    name: "Television",
    estimatedTime: 3,
    price: 300000,
    guaranteed: 7,
    technician: ["obelisk", "felix"]
  },
  {
    id: 5,
    name: "Handphone",
    estimatedTime: 1,
    price: 800000,
    guaranteed: 7,
    technician: ["sastro", "dian"]
  },
  {
    id: 6,
    name: "Laptop",
    estimatedTime: 4,
    price: 1000000,
    guaranteed: 7,
    technicians: ["laura", "cinta"]
  }
];

const filterByTechnicianName = technician => {
  const result = service
    .map(technician => {
      return technician;
    })
    .filter(technician => {
      return service.technicians.includes(technician);
    });
  return result;
};
