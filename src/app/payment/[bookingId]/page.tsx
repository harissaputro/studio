import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, QrCode, Building, Store } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const paymentMethods = [
  { id: 'qris', name: 'QRIS', icon: QrCode },
  { id: 'va', name: 'Bank Transfer / Virtual Account', icon: Building },
  { id: 'retail', name: 'Alfamart / Indomaret', icon: Store },
];

export default function PaymentPage() {
  const bookingDetails = {
    operator: 'Sinar Jaya',
    route: 'Jakarta → Bandung',
    seats: ['3A', '3B'],
    totalPrice: 300000,
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Complete Your Payment</CardTitle>
              <CardDescription>
                Choose a payment method to finalize your booking.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4 font-semibold text-lg">Booking Summary</h3>
                <div className="rounded-lg border bg-background p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bus Operator</span>
                    <span className="font-medium">{bookingDetails.operator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Route</span>
                    <span className="font-medium">{bookingDetails.route}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seats</span>
                    <span className="font-medium">{bookingDetails.seats.join(', ')}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-lg">Total Amount</span>
                    <span className="font-headline text-xl font-bold text-primary">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(bookingDetails.totalPrice)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-lg">Select Payment Method</h3>
                <RadioGroup defaultValue="qris" className="gap-4">
                  {paymentMethods.map((method) => (
                    <Label
                      key={method.id}
                      htmlFor={method.id}
                      className="flex items-center space-x-4 rounded-lg border bg-background p-4 hover:bg-accent/50 has-[input:checked]:border-primary has-[input:checked]:bg-primary/5 cursor-pointer"
                    >
                      <RadioGroupItem value={method.id} id={method.id} />
                      <method.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{method.name}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <Link href="/ticket/TKT-54321">
                  Pay Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
