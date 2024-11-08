export default function Card({ title, body }) {
  return (
    <article className="hover:border-2 hover:shadow-lg hover:border-primary rounded-lg bg-white px-4 pt-4 pb-6 cursor-pointer border-2">
      <h1 className="font-semibold text-base ">{title}</h1>
      <p className="font-light text-ms ">{body}</p>
    </article>
  );
}
