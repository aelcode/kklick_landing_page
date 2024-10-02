import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Statistics } from "./Statistics";
import kklick from "../assets/kclick_logo.png";

export const About = () => {
  return (
    <section id="ourstory" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={kklick}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us!
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                K Click is a Korean-inspired self-photo studio that helps
                camera-shy individuals capture stunning photos with ease. <br />
                <br />
                At K Click, we provide a relaxed atmosphere where you can snap
                amazing shots at your own pace. Our studio is equipped with
                everything you need, including a camera, remote control, and
                instant display monitor for immediate results. <br />
                <br />
                You will get as well a high quality printed copy of your
                selected photos that could last up to a 100 years. <br />
                <br />
                We also offer FREE use of
                <HoverCard>
                  <HoverCardTrigger>
                    {" "}
                    <strong>available props</strong>{" "}
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Available Free Props: <br />
                    sash, hats, sunglasses, crowns, headband
                  </HoverCardContent>
                </HoverCard>
                to help you create the perfect shot. Whether you're capturing a
                special moment or just having fun, K Klick Studio is the perfect
                place for you and your love ones. <br />
                <br />
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
