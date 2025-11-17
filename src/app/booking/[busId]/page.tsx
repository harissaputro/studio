'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Armchair, ArrowRight, X, ScreenFull } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { buses, Seat } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

const SeatLayout = ({ seats: initialSeats, onSelectionChange }: { seats: Seat[], onSelectionChange: (selectedSeats: Seat[]) => void }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const toggleSeat = (seat: Seat) => {
    if (seat.status === 'Booked') return;

    const isSelected = selectedSeats.find(s => s.id === seat.id);
    let newSelectedSeats;

    if (isSelected) {
      newSelectedSeats = selectedSeats.filter(s => s.id !== seat.id);
    } else {
      newSelectedSeats = [...selectedSeats, seat];
    }
    
    setSelectedSeats(newSelectedSeats);
    onSelectionChange(newSelectedSeats);
  };

  const getSeatClass = (seat: Seat) => {
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) return 'text-accent-foreground bg-accent';
    if (seat.status === 'Booked') return 'text-muted-foreground bg-muted cursor-not-allowed';
    return 'text-primary/70 bg-primary/10 hover:bg-primary/20';
  };

  // 2-2 layout
  const seatGrid = [];
  for (let i = 0; i < initialSeats.length; i += 4) {
    seatGrid.push(initialSeats.slice(i, i + 4));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
            <ScreenFull className="mr-2 h-5 w-5"/>
            <span className="font-headline">Select Your Seats</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-full max-w-sm rounded-t-xl border-x-8 border-t-8 border-muted p-4">
          <div className="grid grid-cols-5 gap-2">
            {seatGrid.map((row, rowIndex) => (
              <>
                {row.map((seat, seatIndex) => (
                  <div
                    key={seat.id}
                    className={cn(
                      'flex cursor-pointer items-center justify-center rounded-md p-1 transition-colors',
                      getSeatClass(seat),
                      seatIndex === 2 && 'col-start-4'
                    )}
                    onClick={() => toggleSeat(seat)}
                    role="checkbox"
                    aria-checked={!!selectedSeats.find(s => s.id === seat.id)}
                  >
                    <Armchair className="h-6 w-6" />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-sm"><Armchair className="h-5 w-5 text-primary/70 bg-primary/10 rounded p-0.5" /> Available</div>
            <div className="flex items-center gap-2 text-sm"><Armchair className="h-5 w-5 text-accent-foreground bg-accent rounded p-0.5" /> Selected</div>
            <div className="flex items-center gap-2 text-sm"><Armchair className="h-5 w-5 text-muted-foreground bg-muted rounded p-0.5" /> Booked</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BookingPage() {
  const params = useParams();
  const busId = params.busId as string;
  const bus = buses.find(b => b.id === busId);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  if (!bus) {
    return <div>Bus not found</div>;
  }
  
  const totalPrice = selectedSeats.length * bus.price;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-8">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <SeatLayout seats={bus.seats} onSelectionChange={setSelectedSeats} />
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary">{bus.operator}</p>
                    <p className="text-sm text-muted-foreground">{bus.origin} &rarr; {bus.destination}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold">Selected Seats:</p>
                    {selectedSeats.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedSeats.map(seat => (
                           <div key={seat.id} className="flex items-center rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground">
                            {seat.id}
                           </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No seats selected yet.</p>
                    )}
                  </div>
                   <div className="border-t pt-4">
                     <div className="flex justify-between font-semibold">
                        <p>Total Price</p>
                        <p className="font-headline text-lg text-primary">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(totalPrice)}
                        </p>
                     </div>
                   </div>
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full" disabled={selectedSeats.length === 0}>
                    <Link href={`/payment/booking-123`}>
                        Proceed to Payment <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
