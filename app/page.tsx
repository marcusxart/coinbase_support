import PageContainer from "./components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <div className="h-[296px] w-full bg-primary  flex-col justify-between hidden md:flex">
          <div className="h-[56px] bg-hero-pattern bg bg-repeat-x bg-[0%_100%]"></div>
          <div className="flex gap-[48px]">
            <div className="h-[144px] w-full bg-hero-pattern bg-repeat-x bg-[100%_0%] bg-[length:auto_100%]"></div>
            <div className="w-[480px] h-full bg-primary flex-shrink-0 flex items-center justify-center ">
              <h1 className="text-4xl text-center font-medium text-white">
                How can we help you?
              </h1>
            </div>
            <div className="h-[144px] w-full bg-hero-pattern bg-repeat-x  bg-[length:auto_100%]"></div>
          </div>
          <div className="h-[56px] bg-hero-pattern bg bg-repeat-x bg-[100%_0%]"></div>
        </div>
        <div className="flex w-full justify-center">
          <div className="px-6  md:px-0 max-w-[1220px] w-full">
            <div className="md:hidden py-6 mb-8">
              <h1 className="text-3xl font-medium text-header">
                How can we help you?
              </h1>
            </div>

            <div className="">
              <div className="">
                <h2 className="text-2xl mb-4 font-medium">Help by topic</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  );
}
