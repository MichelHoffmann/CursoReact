import "./style.css";

export const PostCard = ({ cover, id, title, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{id} {title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
