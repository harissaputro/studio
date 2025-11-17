'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Bus, Clock, Tag, Armchair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { buses } from '@/lib/placeholder-data';
import type { Bus as BusType } from '@/lib/placeholder-data';

function BusList() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');

  // In a real app, you would fetch this data from an API based on searchParams
  const availableBuses = buses.filter(bus => bus.origin === from && bus.destination === to);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold text-primary">Available Buses</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Showing results for <span className="font-semibold text-primary">{from}</span> to <span className="font-semibold text-primary">{to}</span> on <span className="font-semibold text-primary">{date}</span>
            </p>
          </div>

          {availableBuses.length > 0 ? (
            <div className="grid gap-6">
              {availableBuses.map((bus) => (
                <BusCard key={bus.id} bus={bus} />
              ))}
            </div>
          ) : (
            <Card className="text-center">
              <CardContent className="p-12">
                <h2 className="text-xl font-semibold">No Buses Found</h2>
                <p className="mt-2 text-muted-foreground">
                  Sorry, we couldn't find any buses for the selected route and date.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/">Try Another Search</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const BusCard = ({ bus }: { bus: BusType }) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <CardHeader className="md:col-span-3">
          <CardTitle className="flex items-center gap-3">
            <Bus className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl">{bus.operator}</span>
          </CardTitle>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{bus.departureTime} &rarr; {bus.arrivalTime} ({bus.duration})</span>
            </div>
            <div className="flex items-center gap-2">
              <Armchair className="h-4 w-4" />
              <span>{bus.class}</span>
            </div>
          </div>
        </CardHeader>
        <div className="flex flex-col items-center justify-center border-t bg-muted/50 p-6 md:border-l md:border-t-0">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="font-headline text-2xl font-bold text-primary">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(bus.price)}
            </p>
          </div>
          <Button asChild className="mt-4 w-full bg-accent hover:bg-accent/90">
            <Link href={`/booking/${bus.id}`}>
              Select Seats <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function BusesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BusList />
        </Suspense>
    )
}
