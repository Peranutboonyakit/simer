import MainLayout from "../mainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="w-full h-full">
        <div
          className="bg-primary-100 text-white font-semibold 
        h-[40px] w-full uppercase flex justify-center items-center"
        >
          performance sim racing setups
        </div>
        <div className="bg-no-repeat bg-cover bg-bgCover h-[700px] 2xl:h-[900px]">
          <div className="container relative flex items-center h-full mx-auto">
            <div
              className="bg-white h-[200px] w-[450px] px-5 flex flex-col justify-center
             tracking-wide rounded-3xl"
            >
              <p className="font-extrabold uppercase text-[3rem]">
                pit here now
              </p>
              <p className="font-light text-[1.4rem] text-gray-400">
                Welcome to SIM OF RACER
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
