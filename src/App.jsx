import "./App.css";
import { useEffect, useRef } from "react";

import chefVideo from "./assets/recipe.mp4";
import clockVideo from "./assets/clock.mp4";
import Project from "./components/Project";
import Hero from "./components/Hero";
import music from "./assets/Hymn for the Weekend.mp3";
import ProjectHighlight from "./components/ProjectHighlight";

function App() {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.25;
    const updateBackground = (e) => {
      document.body.style.setProperty("--x", `${e.pageX}px`);
      document.body.style.setProperty("--y", `${e.pageY}px`);
    };

    window.addEventListener("mousemove", updateBackground);

    return () => {
      window.removeEventListener("mousemove", updateBackground);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 flex flex-col pt-6 items-center opacity-10 hover:opacity-90 transition:all duration-700 w-full z-20">
        <audio ref={audioRef} src={music} controls></audio>
        <p className="mt-3 font-semibold">Coldplay ➖ Hymn for the Weekend</p>
      </div>
      <Hero
        title="Weirong's Portfolio"
        subtitle="Weaving Wonders with Web Dev"
        description="I build delightful digital product experiences that inspire users and empower businesses. Learning full-stack development at Rocket Academy."
      />
      <div>
        <h2 className="text-5xl font-semibold text-center">Highlights</h2>
        <div className="w-[16rem] border-solid border border-gray-600 mt-8 rounded-md mb-[8rem] mx-auto"></div>

        <ProjectHighlight
          componentColors={{
            headerColor: "text-cyan-300",
            bgColor: "bg-[#0d253f]",
            textColor: "text-[#a9b6e2]",
            bgColorPill: "bg-[#153c65]",
            textColorPill: "text-cyan-200",
          }}
          componentContent={{
            title: "Recipe Site",
            description:
              "This website showcases 4 unique dishes across Chinese and Japanese cuisines. Each dish is beautifully presented with detailed recipes and step-by-step instructions. Explore the flavors of Asia and learn how to recreate these delicious dishes in your own kitchen.",
            technologies: ["HTML", "CSS", "JavaScript"],
            video: chefVideo,
            link: "https://lamefreak.github.io/recipe-site-bootcamp/",
          }}
        />

        <ProjectHighlight
          componentColors={{
            headerColor: "text-[#52edf5]",
            bgColor: "bg-[#0b3e44]",
            textColor: "text-[#75ebf8]",
            bgColorPill: "bg-[#166a6e]",
            textColorPill: "text-cyan-200",
          }}
          componentContent={{
            title: "World Clock",
            description:
              "The World Clock is a dynamic application that displays the current time in major cities across the world. It allows you to add and customize timezones, providing you with a convenient way to keep track of time differences and plan your activities accordingly.",
            technologies: ["React", "React Bootstrap"],
            video: clockVideo,
            link: "https://lamefreak.github.io/world-clock-3.2/",
          }}
        />
      </div>
      <h2 className="text-4xl font-semibold text-center mt-[20rem] text-cyan-300 mb-16">
        Other Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 grid-flow-row">
        <Project
          title="Streamlining F&B Order Workflow"
          text="User research and high-fidelity mockups for a B2B message-to-order platform that connects small-to-medium F&B establishments with suppliers."
          link="https://weironglee.webflow.io/foodtech-mobile-app"
          type="Product Design"
        />
        <Project
          title="Launching Hotel Micro Stays"
          text="Part of EntryLevel's Product Management program. Strategized the launch of hotel micro stays for Booking.com, which allows users to book hotels by the hour."
          link="https://weironglee.webflow.io/booking-com-case-study"
          type="Product Strategy"
        />
        <Project
          title="Webpage redesign for IVA"
          text="Refreshed Insignia Ventures Academy's website to launch a new on-demand course. Communicated value proposition to founders and professionals interested in VC."
          link="https://weironglee.webflow.io/iva-website"
          type="Web Design"
        />
      </div>
      <div className="flex flex-col gap-1 items-center mt-[8rem] text-center pb-12">
        <p className="text-sm">
          Built by Weirong using <span className="font-bold">React</span>,{" "}
          <span className="font-bold">TailwindCSS</span>,{" "}
          <span className="font-bold">Vite</span>
        </p>
        <p className="text-sm">{`Inspired by Brittany Chiang's portfolio site`}</p>
      </div>
    </>
  );
}

export default App;
