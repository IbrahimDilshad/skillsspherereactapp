"use client";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

//our populars
export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
  ];
 
  return (
    
    <div className="h-[30rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-40">
     <div>
     <h2 className="max-w-7xl pl-2 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-5">
        Get to know your iSad.
      </h2>
        
     </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
 
const DummyContenttabs = () => {
  return (
    <Image
      src="/images/Screenshot 2025-01-28 131328.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-contain object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
//our populars end 