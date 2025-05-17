import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-neutral-900">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Teach online or in-person. Your tutor journey starts here!{" "}
          <a href="/tutorform" className="transition duration-200 hover:underline">
            <button className="rounded-md bg-white px-2 py-1 text-blue-600">
              Start teaching
            </button>
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
