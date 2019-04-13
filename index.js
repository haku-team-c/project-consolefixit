const services = [
  {
    id: 1,
    name: "Air Conditioner",
    estimatedTime: 6, //hours
    price: 300000, // idr
    guaranteed: 7, // days
    technicians: ["taslim", "joe"]
  },
  {
    id: 2,
    name: "Washing Machine",
    estimatedTime: 9,
    price: 500000,
    guaranteed: 14,
    technicians: ["mayer", "john"]
  },
  {
    id: 3,
    name: "Refrigerator",
    estimatedTime: 6,
    price: 600000,
    guaranteed: 14,
    technicians: ["Atkinson", "Rowan"]
  },
  {
    id: 4,
    name: "Television",
    estimatedTime: 3,
    price: 300000,
    guaranteed: 7,
    technicians: ["obelisk", "felix"]
  },
  {
    id: 5,
    name: "Handphone",
    estimatedTime: 1,
    price: 800000,
    guaranteed: 7,
    technicians: ["sastro", "dian"]
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

const filterByTechnician = technician => {
  const result = services
    .map(service => {
      return service;
    })
    .filter(service => {
      return service.technicians.includes(technician);
    });
  return result;
};

const showServices = services => {
  services.forEach(service => {
    console.log(service.name);
  });
};

const alertServices = services => {
  services.forEach(service => {
    alert(service.name);
  });
};

const technicianInput = prompt("Masukkan nama teknisi");

const filteredServices = filterByTechnician(technicianInput);

alertServices(filteredServices);
