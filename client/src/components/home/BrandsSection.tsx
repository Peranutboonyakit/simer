import _ from "lodash";

import { BrandsImages } from "../../data/data";
import { Link } from "react-router-dom";

const BrandsSection = () => {
  return (
    <div className="container flex flex-wrap justify-between gap-12 py-12 mx-auto">
      {_.map(BrandsImages, (item) => (
        <Link to={`/collection/${item.title}`}>
          <img
            src={item.url}
            alt={item.title}
            key={item.title}
            className="transition-all cursor-pointer hover:scale-[1.05]"
          />
        </Link>
      ))}
    </div>
  );
};

export default BrandsSection;
