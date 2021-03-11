import "./styles.css";
// "https"

export default function App() {
  const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const parsedURL = /^(\w+):\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }

  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //    "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return (
    <div>
      <h1>{parsedURL}</h1>
      <h1> {protocol} </h1>
    </div>
  );
}
