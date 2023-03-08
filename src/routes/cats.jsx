import PropTypes from "prop-types";
import CatCard from "../components/CatCard"

export default function Cats({ catsData }) {
  return (
    {catsData.map((cat) => {
    return <CatCard cat={cat} key={cat.id} />;
  })}
  )
}

Cats.propTypes = {
    catsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };