// give figure
// fig caption can be email, full name

export default function UserCard({ user }) {
  return (
    <figure>
      <img src={user.picture?.medium} alt="" />
      <figcaption>
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>{user.email}</p>
      </figcaption>
    </figure>
  );
}
