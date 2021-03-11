import "./styles.css";
// "https"

export default function App() {
  const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const parsedURL = /^(\w+):\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  // syntax /pattern/modifiers; eg: const patt = /w3schools/i
  // i: match case-insensitive; g: global match (match all not stopping after first match)
  // m: multiple matching; [abc] any character between brackets;
  // [^abc] any character NOT between brackets; [0-9] any digit between brackets;
  // [^0-9] any none-digit; (x|y) any alternatives specified
  // . a single character except newline or line terminator; \w a word character;
  // \W (capital): a non-word character; \d a gigit; \D a non-digit;
  // \s a whitespace character; \S a non-whitespace character; \b match at beginning/end of a word;
  // beginning like: \bHI and end like: HI\b; \B match in-between beginning/end of a word;
  // \0 a null character; \n newline; \f a form feed character(FF page-break ASCII control character of 12);
  // \r return character; \t tab character; \v vertical tab(VT for vertical line movement);
  // \xxx octal number xxx; \xdd hexadecimal number dd; \udddd unicode character by hexadecimal dddd;

  // n+ string with at least 1 n; n* string with 0 or more n; n? 0 or 1 n;
  // n{X} string with a sequence of X of n's; n{X,Y} string with a sequence of X to Y of n's;
  // n{X,} string with a sequence of at least X n's; n$ string with n at the end of string;
  // ^n string with n at the beginning of it; ?=n string followed by a specific string n;
  // ?!n string that is not followed by a specific string n;

  // toString() return the string value; test() return true or false for matching;
  // exec() return only the first match

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
