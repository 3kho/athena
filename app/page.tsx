import Card from "@/components/Card";
import Spotlight from "@/components/Spotlight";
import { AirtableSpotightManager } from "@/utils/airtable";
import { SpotlightPost } from "@/utils/spotlight";
import Image from "next/image";
 
export const revalidate = 3600

export default async function Home() {
  const data = await new AirtableSpotightManager().getLatestRecord();
  const post: SpotlightPost = data.fields as unknown as SpotlightPost;
  return (
    <>
      <a href="https://hackclub.com" className="relative top-0 left-[5vw]">
        <Image src="https://assets.hackclub.com/flag-orpheus-top.svg" height={158} width={250} alt="" className="h-[15vh] -translate-y-3 w-auto hover:rotate-[5deg] transition" />
      </a>
      <div className="text-left px-6 lg:px-32">
        <div className="text-6xl md:text-9xl font-bold">Athena</div>
        <div className="text-xl md:text-3xl font-bold mt-2">is a group of programs at Hack Club to empower girls and nonbinary teenagers to code.</div>
        <div className="text-base md:text-lg">From hosting in-person hackathons to virtual workshops, Hack Club is a place to become more technical and immerse yourself in coding.</div>
        <div className="relative rounded-lg w-full mt-8 p-9 bg-gradient-to-l from-[#150122] via-[#150122] to-[#2651A6] overflow-hidden transition">
          <div className="relative z-0">
            <div className="text-lg md:text-xl font-bold text-white mb-3">Our most recent event:</div>
            <Image alt="Ascend Event" src="https://cloud-rnls34zc7-hack-club-bot.vercel.app/0reduced-whitespace-ascend-logo.png" className="max-h-[15vh] w-auto" width={1121} height={390} />
            <div className="text-white md:w-3/5 line-clamp-2">Ascend was Hack Club&apos;s first-ever Days of Service Summit! Held in Los Angeles, this event brought together 50 girls and non-binary Hack Club members from across the U.S. and internationally for a hackathon hosted at SpaceX, along with a weekend filled with fun and growth. This summit became the largest teenage girl hackathon in the U.S. this year, in partnership with Girls Who Code and Kode with Klossy.</div>
            <a href="https://ascend.hackclub.com" className="text-white italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white">Learn more about Ascend</a>
          </div>
          <Image alt="" src="https://ascend.hackclub.com/moon.png" className="h-[150%] w-auto absolute -top-[10vh] -right-[10vh] opacity-50 md:opacity-100" height={800} width={800}></Image>
        </div>
        {/* TODO: set grid-rows on large back to 2 */}
        <div id="bento" className="w-full grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8">
          <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/1events-card-min.jpg" tintColor="#69346D" href="/events" title="Events" description="One-day coding events that help girls and gender minorities write their first lines of code" className="md:col-span-1 lg:col-span-2 self-stretch" />
          <div className="w-full md:col-span-2 lg:col-span-3 hover:scale-105 transition cursor-pointer">
            <Spotlight post={post} />
          </div>
          {/* <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/3newsletter-card-min.jpg" tintColor="#2E0E0C" href="/community" title="Community" description="Meet like-minded superleaders around the world" className="md:col-span-2 lg:col-span-3 self-stretch" /> */}
          {/* <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="#" title="Start Hacking" description="Teenager? Stay tuned!" className="md:col-span-1 lg:col-span-2 self-stretch" /> */}
          {/* <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="https://daysofservice.hackclub.com" title="Days of Service" description="Looking for the old site? Click here." className="md:col-span-1 lg:col-span-2 self-stretch" /> */}
        </div>
      </div>
    </>
  );
}
