export type Bus = {
  id: string;
  operator: string;
  class: 'Economy' | 'AC' | 'Executive';
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seats: Seat[];
  origin: string;
  destination: string;
};

export type Seat = {
  id: string;
  status: 'Available' | 'Booked' | 'Selected';
};

export type Order = {
    id: string;
    route: string;
    date: string;
    status: 'Paid' | 'Pending' | 'Cancelled';
    ticketId: string;
    busOperator: string;
    total: number;
};

export const cities = [
  { value: 'jakarta', label: 'Jakarta' },
  { value: 'bandung', label: 'Bandung' },
  { value: 'surabaya', label: 'Surabaya' },
  { value: 'yogyakarta', label: 'Yogyakarta' },
  { value: 'semarang', label: 'Semarang' },
  { value: 'bali', label: 'Bali (Denpasar)' },
];

const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    const rows = 10;
    const cols = ['A', 'B', 'C', 'D'];
    for (let i = 1; i <= rows; i++) {
        for (const col of cols) {
            const isBooked = Math.random() > 0.7;
            seats.push({
                id: `${i}${col}`,
                status: isBooked ? 'Booked' : 'Available',
            });
        }
    }
    return seats;
}

export const buses: Bus[] = [
  {
    id: 'bus-001',
    operator: 'Sinar Jaya',
    class: 'Executive',
    departureTime: '07:00',
    arrivalTime: '10:00',
    duration: '3h',
    price: 150000,
    seats: generateSeats(),
    origin: 'Jakarta',
    destination: 'Bandung',
  },
  {
    id: 'bus-002',
    operator: 'Pahala Kencana',
    class: 'AC',
    departureTime: '08:30',
    arrivalTime: '12:00',
    duration: '3.5h',
    price: 120000,
    seats: generateSeats(),
    origin: 'Jakarta',
    destination: 'Bandung',
  },
  {
    id: 'bus-003',
    operator: 'DAMRI',
    class: 'Economy',
    departureTime: '09:00',
    arrivalTime: '13:00',
    duration: '4h',
    price: 90000,
    seats: generateSeats(),
    origin: 'Jakarta',
    destination: 'Bandung',
  },
  {
    id: 'bus-004',
    operator: 'Nusantara',
    class: 'Executive',
    departureTime: '15:00',
    arrivalTime: '21:00',
    duration: '6h',
    price: 250000,
    seats: generateSeats(),
    origin: 'Surabaya',
    destination: 'Yogyakarta',
  },
  {
    id: 'bus-005',
    operator: 'EKA Cepat',
    class: 'AC',
    departureTime: '16:30',
    arrivalTime: '23:00',
    duration: '6.5h',
    price: 210000,
    seats: generateSeats(),
    origin: 'Surabaya',
    destination: 'Yogyakarta',
  },
];


export const orders: Order[] = [
    {
        id: 'ORD-12345',
        route: 'Jakarta → Bandung',
        date: '2024-08-15',
        status: 'Paid',
        ticketId: 'TKT-54321',
        busOperator: 'Sinar Jaya',
        total: 150000,
    },
    {
        id: 'ORD-67890',
        route: 'Surabaya → Yogyakarta',
        date: '2024-08-10',
        status: 'Pending',
        ticketId: 'TKT-09876',
        busOperator: 'Nusantara',
        total: 250000,
    },
    {
        id: 'ORD-13579',
        route: 'Bandung → Jakarta',
        date: '2024-07-20',
        status: 'Cancelled',
        ticketId: 'TKT-97531',
        busOperator: 'Pahala Kencana',
        total: 120000,
    }
];
