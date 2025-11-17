import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { RouteSearchForm } from '@/components/RouteSearchForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bus');

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[60vh] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
            <h1 className="font-headline text-4xl font-bold md:text-6xl">
              Your Journey Starts Here
            </h1>
            <p className="mt-4 max-w-2xl text-lg">
              Easily book bus tickets to your favorite destinations across the country.
            </p>
          </div>
        </section>

        <div className="relative z-20 -mt-24 mx-auto w-full max-w-4xl px-4">
          <RouteSearchForm />
        </div>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                Why Choose BusTicketGo?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide a seamless booking experience with the best prices.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Wide Network</h3>
                <p className="mt-2 text-muted-foreground">
                  Access thousands of routes and bus operators nationwide.
                </p>
              </div>
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Best Prices</h3>
                <p className="mt-2 text-muted-foreground">
                  Find the most competitive prices for your bus tickets.
                </p>
              </div>
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Secure Payments</h3>
                <p className="mt-2 text-muted-foreground">
                  Your transactions are safe with our various payment options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="border-t bg-card py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} BusTicketGo. All rights reserved.</p>
      </div>
    </footer>
  );
};
