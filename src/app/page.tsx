import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { RouteSearchForm } from '@/components/RouteSearchForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Footer } from '@/components/layout/Footer';

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
              Perjalanan Anda Dimulai Di Sini
            </h1>
            <p className="mt-4 max-w-2xl text-lg">
              Pesan tiket bus dengan mudah ke tujuan favorit Anda di seluruh negeri.
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
                Mengapa Memilih BusTicketGo?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami menyediakan pengalaman pemesanan yang lancar dengan harga terbaik.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Jaringan Luas</h3>
                <p className="mt-2 text-muted-foreground">
                  Akses ribuan rute dan operator bus di seluruh negeri.
                </p>
              </div>
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Harga Terbaik</h3>
                <p className="mt-2 text-muted-foreground">
                  Temukan harga paling kompetitif untuk tiket bus Anda.
                </p>
              </div>
              <div className="rounded-lg bg-card p-8 shadow-sm">
                <h3 className="font-headline text-xl font-semibold text-primary">Pembayaran Aman</h3>
                <p className="mt-2 text-muted-foreground">
                  Transaksi Anda aman dengan berbagai pilihan pembayaran kami.
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
