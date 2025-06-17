import Hero from "@/components/home/Hero";
import FetureProducrs from "@/components/home/FetureProducrs";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FetureProducrs />
      </Suspense>
    </>
  );
};

export default HomePage;
