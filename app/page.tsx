import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-12 pt-[5.5rem] sm:px-6 sm:pb-16 sm:pt-24">
        <section
          id="about"
          className="flex-row items-center gap-5 sm:gap-10"
          aria-labelledby="intro-heading"
        >
          <Image
            src="/portfolio_pic.jpg"
            alt="Portrait"
            className="rounded-pic object-cover object-top"
            width={160}
            height={160}
            priority
          />
          <div className="flex min-w-0 flex-1 flex-col gap-3 text-left">
            <h1
              id="intro-heading"
              className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
            >
              Hi, I'm Robert
            </h1>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Experienced Software Engineer with a focus on building thoughtful web experiences.
              In my current day to day I am building AI agentic workflows, automations, and working in healthcare technology.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
