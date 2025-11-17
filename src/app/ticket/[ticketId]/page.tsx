import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Download, Bus, Armchair, Calendar, MapPin, User, Ticket as TicketIcon } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TicketPage({ params }: { params: { ticketId: string } }) {
  const ticketDetails = {
    id: params.ticketId,
    passengerName: 'John Doe',
    operator: 'Sinar Jaya',
    route: 'Jakarta → Bandung',
    date: '2024-08-15',
    departureTime: '07:00',
    seat: '3A',
    bookingId: 'ORD-12345',
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    JSON.stringify(ticketDetails)
  )}`;

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-md">
          <Card className="overflow-hidden">
            <div className="bg-primary p-6 text-center text-primary-foreground">
              <h2 className="font-headline text-2xl font-bold">E-Ticket</h2>
              <p>This is your official ticket. Present this at boarding.</p>
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-center">
                 <div className="rounded-lg bg-white p-2">
                  <Image src={qrCodeUrl} alt="QR Code for ticket" width={200} height={200} data-ai-hint="qr code" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Passenger</p>
                    <p className="font-semibold">{ticketDetails.passengerName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TicketIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Booking ID</p>
                    <p className="font-semibold">{ticketDetails.bookingId}</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 gap-y-4 text-sm">
                 <div className="flex items-start gap-3">
                  <Bus className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Bus Operator</p>
                    <p className="font-semibold">{ticketDetails.operator}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Route</p>
                    <p className="font-semibold">{ticketDetails.route}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Date & Time</p>
                    <p className="font-semibold">{ticketDetails.date} at {ticketDetails.departureTime}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <Armchair className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Seat</p>
                    <p className="font-semibold">{ticketDetails.seat}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" /> Download Ticket
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
