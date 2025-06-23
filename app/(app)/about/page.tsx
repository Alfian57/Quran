import Image from "next/image";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutPage = async () => {
  return (
    <div className="px-6 pt-6 pb-24">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <h1 className="text-primary mb-2 text-2xl font-semibold">
          About Quran App
        </h1>
        <p className="text-secondary text-sm">
          Learn more about our mission and features
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-6">
        <Image
          src={"/splash-screen.png"}
          alt="Quran App"
          width={800}
          height={300}
          className="h-48 w-full rounded-[10px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-[10px] bg-black/40">
          <div className="text-center text-white">
            <h2 className={`${amiri.className} text-3xl font-bold`}>
              القرآن الكريم
            </h2>
            <p className="mt-2 text-lg">Al-Quran Al-Kareem</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-8">
        <h3 className="text-primary mb-1 text-xl font-semibold">Our Mission</h3>
        <div className="bg-purple/5 rounded-[10px] pb-4">
          <p className="text-secondary text-justify leading-relaxed">
            To make the Holy Quran accessible to everyone, everywhere. Our app
            provides a beautiful and intuitive way to read, listen, and
            understand the Quran in your daily life.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <h3 className="text-primary mb-4 text-xl font-semibold">Features</h3>
        <div className="space-y-4">
          {[
            {
              title: "Complete Quran",
              description:
                "All 114 Surahs with Arabic text and English translation",
            },
            {
              title: "Audio Recitation",
              description: "High-quality audio recitation by renowned Qaris",
            },
            {
              title: "Easy Navigation",
              description: "Browse by Surah or Juz for convenient reading",
            },
            {
              title: "Share Verses",
              description: "Share specific verses with friends and family",
            },
            {
              title: "Bookmarks",
              description: "Save your favorite verses for quick access",
            },
            {
              title: "Beautiful Design",
              description:
                "Clean and elegant interface for better reading experience",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="border-secondary flex items-start gap-4 border-b pb-4 last:border-b-0"
            >
              <div>
                <h4 className="text-primary font-medium">{feature.title}</h4>
                <p className="text-secondary text-justify text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <div className="mb-8">
        <h3 className="text-primary mb-4 text-xl font-semibold">Built With</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Next.js", description: "React Framework" },
            { name: "TypeScript", description: "Type Safety" },
            { name: "Tailwind CSS", description: "Styling" },
            { name: "Quran API", description: "Data Source" },
          ].map((tech, index) => (
            <div
              key={index}
              className="rounded-[10px] bg-gray-50 p-4 text-center"
            >
              <h4 className="text-primary font-medium">{tech.name}</h4>
              <p className="text-secondary text-xs">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Acknowledgments */}
      <div className="mb-8">
        <h3 className="text-primary mb-1 text-xl font-semibold">
          Acknowledgments
        </h3>
        <div className="bg-purple/5 rounded-[10px] pb-4">
          <p className="text-secondary text-justify text-sm leading-relaxed">
            We are grateful to the Islamic scholars and organizations who have
            made the Quran translations and recitations freely available.
            Special thanks to the Quran API providers and the open-source
            community.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h3 className="text-primary mb-4 text-xl font-semibold">
          Get in Touch
        </h3>
        <div className="space-y-2">
          <p className="text-secondary text-sm">
            Have feedback or suggestions? We&apos;d love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <span className="text-primary text-sm font-medium">
              alfiangading@quranapp.com
            </span>
          </div>
        </div>
      </div>

      {/* Version Info */}
      <div className="mt-8 text-center">
        <p className="text-secondary text-xs">Version 1.0.0 • Built with ❤️</p>
      </div>
    </div>
  );
};

export default AboutPage;
