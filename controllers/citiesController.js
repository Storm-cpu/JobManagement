import City from "../models/City.js";

const showCities = async (req, res) => {
  let cities = await City.find();
  let result = cities.map((item) => {
    return { name: item.code, description: item.name };
  });
  return res.status(200).json({ cities: result });
};

export { showCities };
