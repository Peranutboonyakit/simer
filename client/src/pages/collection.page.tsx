import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../components/layouts/mainLayout";
import SimagicSection from "../components/collection/SimagicSection";
import { useEffect } from "react";

const CollectionPage = () => {
  const { brand } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (brand !== "simagic") {
      navigate("/404");
    }
  }, []);

  return (
    <MainLayout>
      <div className="w-full h-full">
        {brand === "simagic" && <SimagicSection />}
      </div>
    </MainLayout>
  );
};

export default CollectionPage;
