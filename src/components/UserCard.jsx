// give figure
// fig caption can be email, full name
import PropTypes from "prop-types";

export default function UserCard({ user }) {
  return (
    <figure>
      <img src={user.picture?.thumbnail} alt="" />
      <figcaption>
        <h2>
          {user.name.title} {user.name.first} {user.email}
        </h2>
        <p>{user.email}</p>
      </figcaption>
    </figure>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
