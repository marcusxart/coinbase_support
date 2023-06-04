import Image from "next/image";

import PageContainer from "./components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <div className="h-[296px] w-full bg-primary">
          <div className="h-[56px] bg-hero-pattern bg bg-repeat-x"></div>
        </div>
      </main>
    </PageContainer>
  );
}
