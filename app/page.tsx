import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Car, Home, Trees, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ASTHARA</h1>
                <p className="text-sm text-gray-600">Sky Front City</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#facilities" className="text-gray-700 hover:text-amber-600 transition-colors">
                Facilities
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">
                Gallery
              </a>
              <a href="#location" className="text-gray-700 hover:text-amber-600 transition-colors">
                Location
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative text-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Asthara Sky Front City Aerial View"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-500 text-white mb-4">Premium Development</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ASTHARA
                <span className="block text-amber-200">Sky Front City</span>
              </h1>
              <p className="text-xl mb-8 text-amber-100">
                Hunian eksklusif dengan konsep modern dan fasilitas lengkap di lokasi strategis. Nikmati kehidupan yang
                nyaman dengan pemandangan kota yang menakjubkan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-amber-900 hover:bg-gray-100"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Asthara Sky Front City</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyek hunian premium yang menghadirkan konsep modern living dengan fasilitas terlengkap dan lokasi
              strategis di jantung kota.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/hero2.png?height=400&width=500"
                alt="Building Interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Proyek</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Keamanan 24 Jam</h4>
                    <p className="text-gray-600">Sistem keamanan terpadu dengan CCTV dan security 24 jam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokasi Strategis</h4>
                    <p className="text-gray-600">Akses mudah ke pusat bisnis, sekolah, dan fasilitas umum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Trees className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lingkungan Hijau</h4>
                    <p className="text-gray-600">Taman dan ruang terbuka hijau yang asri dan nyaman</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Parkir Luas</h4>
                    <p className="text-gray-600">Area parkir yang luas dan aman untuk kendaraan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fasilitas Lengkap</h2>
            <p className="text-xl text-gray-600">Nikmati berbagai fasilitas premium untuk kenyamanan hidup Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/clubhouse.png?height=200&width=300"
                alt="Swimming Pool"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Club House</h3>
                <p className="text-gray-600">Club House dengan desain modern dan area santai yang nyaman</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/fitness.png?height=200&width=300"
                alt="Fitness Center"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fitness Center</h3>
                <p className="text-gray-600">Pusat kebugaran dengan peralatan lengkap dan modern</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/playground.png?height=200&width=300"
                alt="Children Playground"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Playground</h3>
                <p className="text-gray-600">Area bermain anak yang aman dan menyenangkan</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/taman.png?height=200&width=300"
                alt="Garden"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Taman</h3>
                <p className="text-gray-600">Taman yang asri dengan berbagai tanaman hijau</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/hall.png?height=200&width=300"
                alt="Community Hall"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Hall</h3>
                <p className="text-gray-600">Ruang serbaguna untuk acara komunitas dan kegiatan bersama</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/interior.png?height=200&width=300"
                alt="24/7 Security"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interior</h3>
                <p className="text-gray-600">Interior Modern dan Futuristik</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Foto</h2>
            <p className="text-xl text-gray-600">Lihat keindahan dan kemewahan Asthara Sky Front City</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large featured image */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-96 md:h-full">
                <Image
                  src="/rumah1.png?height=600&width=800"
                  alt="Asthara Sky Front City Main Building"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Main Building</h3>
                    <p className="text-sm">Tampak depan gedung utama</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller images */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/rumah2.png?height=300&width=400"
                alt="Swimming Pool Area"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Main Building</h4>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/rumah3.png?height=300&width=400"
                alt="Lobby Interior"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Main Building</h4>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/rumah4.png?height=300&width=400"
                alt="Fitness Center"
                fill
                className="object-cover object-bottom transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Main Building</h4>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/jembatan2.png?height=300&width=400"
                alt="Garden Area"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Jembatan</h4>
                </div>
              </div>
            </div>

            {/* Medium sized images */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/skyfront.png?height=300&width=600"
                alt="Unit Interior"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">The Skyfront</h3>
                  <p className="text-sm"></p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/jembatan.png?height=300&width=400"
                alt="Children Playground"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Jembatan</h4>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="/kamar-anak.png?height=300&width=400"
                alt="Parking Area"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="text-sm font-semibold">Interior</h4>
                </div>
              </div>
            </div>

      
          
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokasi Strategis</h2>
            <p className="text-xl text-gray-600">
              Berada di lokasi premium dengan akses mudah ke berbagai fasilitas kota
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Akses Mudah Ke:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Bandara Internasional - 15 menit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Pusat Perbelanjaan - 10 menit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Sekolah Internasional - 5 menit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Rumah Sakit - 8 menit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Stasiun Kereta - 12 menit</span>
                </div>
              </div>
            </div>
<div className="rounded-lg overflow-hidden h-96">
  <img
    src="peta.jpg" // Path sesuai lokasi file kamu
    alt="Peta Lokasi"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-amber-800 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-amber-100">Dapatkan informasi lengkap dan jadwalkan kunjungan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                <p className="text-amber-100">+62 21 1234 5678</p>
                <p className="text-amber-100">+62 812 3456 7890</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-amber-100">info@asthara-skyfrontcity.id</p>
                <p className="text-amber-100">sales@asthara-skyfrontcity.id</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
                <p className="text-amber-100">Senin - Jumat: 09:00 - 18:00</p>
                <p className="text-amber-100">Sabtu - Minggu: 09:00 - 17:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Sales Representative
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2e3b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">ASTHARA</h3>
                  <p className="text-sm text-gray-400">Sky Front City</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Hunian premium dengan konsep modern living dan fasilitas terlengkap.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-amber-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-amber-300 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="text-gray-400 hover:text-amber-300 transition-colors">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-400 hover:text-amber-300 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-gray-400 hover:text-amber-300 transition-colors">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+62 21 1234 5678</li>
                <li>info@asthara-skyfrontcity.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-amber-300 hover:border-amber-300"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-amber-300 hover:border-amber-300"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Asthara Sky Front City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
