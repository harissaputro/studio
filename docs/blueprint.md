# **App Name**: BusTicketGo

## Core Features:

- User Authentication: Allow users to register and log in using email/password or Google Sign-in via Firebase Authentication.
- Route Selection: Enable users to select bus routes based on origin city, destination city, and departure date.
- Bus Listing: Display available buses with details like bus name/operator, departure & arrival times, ticket price, and bus class (Economy/AC/Executive).
- Seat Selection: Provide a visual layout of the bus with a seat grid (2-2 or 2-3 layout) where users can select their seats. Show seat status (Available/Selected/Booked).
- Payment Integration: Integrate payment methods (QRIS, Alfamart/Indomaret, Bank Transfer/Virtual Account) using Cloud Functions.
- E-Ticket Generation: Generate a unique QR code for each ticket after successful payment. Allow users to download the e-ticket.
- Order History: Maintain user order history with real-time status updates (Pending, Paid, Cancelled).
- Admin Dashboard: Web-based dashboard with role-based authentication to perform CRUD operations on buses and schedules, monitor orders, and generate sales reports.
- Payment Status Update: Automatically changes the status of the order on Firestore based on update received from Cloud Functions.

## Style Guidelines:

- Primary color: Deep blue (#1E3A8A) to convey trust and reliability in booking.
- Background color: Light gray (#F9FAFB) to ensure readability and a clean interface.
- Accent color: Orange (#EA580C) to highlight important actions such as booking and payment, creating a sense of urgency and importance.
- Body and headline font: 'PT Sans', a sans-serif, which mixes modernity and warmth well.
- Use consistent and recognizable icons for navigation and bus features (e.g., seat type, amenities).
- Responsive design with a clear hierarchy of information. Use grid and card-based layouts for bus listings and seat selection.
- Subtle transitions and animations for loading states and interactive elements (e.g., seat selection, payment confirmations).