import type { Metadata } from "next";
import Title from "@/components/sheared/Title";
import PageTitle from "@/components/sheared/PageTitle";
import { Celebration, Star, Handshake } from "@mui/icons-material";
import Card from "@/components/sheared/Card";

export const metadata: Metadata = {
  title: "About",
  description: "Generated by create next app",
};

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:w-[65%] w-[90%] items-center">
        <PageTitle title="Weaving threads of love" />
        <div className="pb-10 text-stone-500 text-xl">
          Unveiling India`&apos;s premier wedding orchestration platform
        </div>
        <div>
          One Stop Solution to Organize a Hustle free Dream Wedding to make it
          unforgettable
          <br />
          Expertly Choreographed, Exquisitely Executed: Your Flawless Wedding
          Journey Starts Here
        </div>
        <Title>We believe !</Title>
        <div className="pb-2">
          You should remember your wedding as the most epic part of your life.
        </div>
        <div className="pb-2">
          As a wedding planner, we have seen it all as we organized for over 50
          couples and counting.
          <br /> Since each couple is unique, what we bring to each wedding need
          to reflect that
        </div>
        <div className="pb-2 flex flex-wrap">
          <Card>
            <Celebration sx={{ fontSize: 60 }} />
            <div className="text-2xl font-bold">51</div>
            <div>Wedding planned</div>
          </Card>
          <Card>
            <Star sx={{ fontSize: 60 }} />
            <div className="text-2xl font-bold">48</div>
            <div>5 Star Reviews</div>
          </Card>
          <Card>
            <Handshake sx={{ fontSize: 60 }} />
            <div className="text-2xl font-bold">1</div>
            <div>Years in service</div>
          </Card>
        </div>
        <Title>What We Do ?</Title>
        <div className="pb-2">
          Love stories don`&apos;t unfold in spreadsheets; they ignite in
          moments, in laughter, in tears of joy shared under a sky lit by a
          thousand dreams. We, at [Your Website Name], understand this. We
          believe your wedding shouldn`&apos;t be a project to manage, but a
          symphony to orchestrate.
        </div>
        <div className="pb-2">
          We`&apos;re more than just an aggregator; we`&apos;re your
          confidantes, your dream weavers, your trusted guides into the
          exquisite realm of creating an unforgettable wedding. Let go of the
          endless lists and frantic searching. Here, amidst curated excellence,
          you`&apos;ll find every piece of your exquisite fairytale falling
          effortlessly into place.
        </div>
        <Title>From Spark to Sparkle</Title>
        <div className="pb-2">
          It all began with a shared vision – to transform the wedding
          experience for those who truly appreciate the finer things. We, a team
          of passionate individuals who`&apos;ve seen the magic of love
          firsthand, envisioned a platform where discerning couples could
          discover the best, hand-picked service providers, all under one roof.
        </div>
        <div className="pb-2">
          We meticulously combed through every detail, seeking those who not
          only possess exceptional skill, but who share our unyielding
          commitment to artistry, impeccable service, and an unwavering
          dedication to exceeding expectations. Whether it`&apos;s a whimsical
          garden soiree or a grand ballroom gala, our vendors are seasoned
          artists, ready to paint your love story onto the canvas of your
          wedding day.
        </div>
        <Title>From Where We Came</Title>
        <div className="pb-2">
          The seed of Dremable was sown, not amidst champagne wishes and
          confetti bursts, but in the quiet murmur of discontent witnessed at
          countless weddings. We, the founders, watched our parents – and
          countless aunts, uncles, and friends – embark on the seemingly
          Sisyphean task of wedding planning.
        </div>
        <div className="pb-2">
          Picture this: a room overflowing with overflowing spreadsheets, phone
          calls bouncing between caterers and decorators, faces etched with a
          tension that only the impending `&apos;Big Day`&apos; could conjure.
          Days turned into weeks, the joy of the coming nuptials swallowed by
          the logistical quagmire. Memories etched in anxiety replaced those
          envisioned in laughter.
        </div>
        <div className="pb-2">
          One such memory stands out. It was Aunt Sarah`&apos;s wedding, the
          vibrant crimson lehenga, overshadowed by a frantic search for the
          missing groom`&apos;s cufflinks. The air, thick with expectation,
          fractured by raised voices and misplaced deliveries. And amidst the
          frantic dance of last-minute adjustments, we saw a glint of regret in
          her eyes, a yearning for the pure joy the day was supposed to hold.
        </div>
        <div className="pb-2">
          It was in that moment, a collective spark ignited within us. We dreamt
          of a different reality, one where wedding planning wasn`&apos;t a
          battle against an ever-growing hydra of details, but a waltz into a
          world of curated magic. We envisioned a platform where the only hustle
          belonged to the dance floor, and the pressure was reserved for the
          champagne corks.
        </div>
        <div className="pb-2">
          Thus, Dremable was born. Not just an aggregator, but a haven for
          discerning couples, a tapestry woven with hand-picked artists and
          meticulous attention to detail. We handhold you through every step,
          transforming the chaos into a symphony, ensuring your love story
          unfolds in a flawlessly orchestrated masterpiece.
        </div>
        <div className="pb-2">
          So, let go of the spreadsheets and the frantic calls. With us, your
          wedding isn`&apos;t just a celebration; it`&apos;s an escape into a
          world where every detail whispers your unique love story. Come, step
          into our haven, and let us orchestrate the unforgettable, hustle-free
          dream wedding you deserve. Let your fairytale begin, stress-free and
          sparkling.
        </div>
        <Title>Our Mission</Title>
        <div className="pb-2">
          To orchestrate weddings that transcend mere celebrations, becoming
          memories etched in gold. We want your special day to be a seamless
          masterpiece, where every element sings in harmony, reflecting your
          unique love story.
        </div>
        <Title>Our Vision</Title>
        <div className="pb-2">
          To be the definitive destination for the discerning couple, the
          trusted confidante who whispers wisdom, the bridge connecting dreams
          to reality. We envision a world where wedding planning is a joyous
          journey, not a stressful ordeal, where every detail aligns flawlessly
          to create a tapestry of unforgettable moments.
        </div>
        <div className="pb-2">
          So, step into our world, hand in hand, and let us translate your
          whispered dreams into a love story that resonates for a lifetime. Let
          your fairytale begin.
        </div>
      </div>
    </div>
  );
};

export default About;
