const RestCard = (props) => {
  const { restData } = props;
  const getCostPerPerson = (costStr) => {
      const cost = parseInt(costStr.match(/\d+/)[0], 10);
      return cost / 2;
  };

  return (
      <div className="resta-card"> 
          <img
              className="res-logo"
              alt="res-logo"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData.info.cloudinaryImageId}`}
          />
          <h2 className="resta-name">
              {restData.info.name}
          </h2>
          <h5 className="resta-cuisine">
              {restData.info.cuisines.join(", ")}
          </h5>
          <h5 className="smallTextFamily">
              💰: ₹{getCostPerPerson(restData.info.costForTwo)} 🌟: {restData.info.avgRating}⭐ <br/>🚚: {restData.info.sla.deliveryTime} Mins
          </h5>
      </div>
  );
};

export default RestCard;