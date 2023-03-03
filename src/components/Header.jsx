export default function Header({ text }) {
  // Props are passed as an object, we can desructure it
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
  //   braces here are used for jsx interprelation
}
