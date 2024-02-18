import HeroSection from '@/containers/HeroSection';
import Title from "@/components/sheared/Title"
import { benefits } from '@/components/constants'
import { LocationSearching } from '@mui/icons-material';

const sectionWidthMd = "md:w-[75%]";
const sectionWidthFull = "w-[90%]";

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <HeroSection />

      {/* Problem and Solution Section */}
      <div className={`flex flex-col ${sectionWidthMd} ${sectionWidthFull} md:items-center space-y-6`}>
        <Title> Let’s Plan Your Dream Wedding Now </Title>
        <div className='pb-4'>
          Planning your wedding shouldn't be a chaotic whirlwind. Dreamable brings calm to the storm,
          connecting you with a handpicked network of top-notch wedding professionals. From
          visionaries who orchestrate unforgettable celebrations to artists who transform spaces
          into breathtaking masterpieces, find the perfect match for every part of your special day.
        </div>

        {/* Benefits Section */}
        <Title> How Dreamable makes your planning smooth sailing</Title>
        {benefits.map(({ title, describe }) => (
          <div key={title} className="flex flex-col p-4 md:w-[80%] bg-white rounded-lg my-4 shadow-md">
            <div className="flex items-center mb-2">
              <LocationSearching className="text-2xl md:text-3xl" />
              <h3 className="ml-2 text-lg md:text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-700">{describe}</p>
          </div>
        ))}

        <div className='pb-4 pt-8'>
          No more endless scrolling, frantic emails, or phone tag nightmares. Dreamable empowers you
          to plan your dream wedding with ease, trust, and joy.
        </div>
      </div>

      {/* Testimonial Section */}
      {/* Features Section */}
      {/* FAQ Section */}
    </main>
  );
}
