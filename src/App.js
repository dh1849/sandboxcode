import "./styles.css";
// "https"

export default function App() {
  // const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  // const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

  // Note: Returned object of exec() contains an array of elements =
  // # of parenthesized substrings +1 = number of ()+1
  // escape special characters: \:, \/, \/,\/

  // index[0]=full string of characters matched="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  // index[1]=(\w+)="https", 1 or more word character
  // index[2]=([^\/]+)= "developer.mozilla.org" start with 1 or more /
  // index[3]=(.*)$ = "en-US/docs/Web/JavaScript" ending with 0 or more .

  // returned parsedURL: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  // const parsedURL = /[+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?/.exec(url);
  // const url = "-1000.3454";
  // const parsedURL = /[+-]?(\d+)(\.\d+)/g.exec(url);
  // the object returned two element:
  // index[0]=-1000.3454  full string of matched characters
  // index[1]=1000.3454 = (\d+(\.\d+)?|\.\d+)
  // index[1] only include strings inside() without "-" sign

  // if (!parsedURL) {
  //   return false;
  // }

  // Metacharacter: ^ starting and $ ending position; () block of string inside() can be recalled
  // + 1 or more; * 0 or more preceding element; ? 0 or 1 preceding element (eg: colou?r matches both color and colour)
  // {n} match exactly n times; {min,}, {,max}, {min,max} match at least min times but NOT more than max times
  // syntax /pattern/modifiers; eg: const patt = /w3schools/i; i: match case-insensitive;
  //  g: global match (match all not stopping after first match); m: multiple matching;
  // [^abc] any single character NOT between brackets; [abc] any single character between brackets;
  //  [0-9] any digit between brackets; [^0-9] any none-digit; (x|y) any alternatives specified
  // . match any single character except newline or line terminator; \w a word [A-Za-z0-9_] or alphanumeric character;
  // \W (capital): a non-word character; \d single gigit; \D a non-digit;
  // \s a whitespace character; \S a non-whitespace character; \b match at beginning/end of a word;
  // beginning like: \bHI and end like: HI\b; \B match in-between beginning/end of a word;
  // \0 a null character; \n newline; \f a form feed character(FF page-break ASCII control character of 12);
  // \r return character; \t tab character; \v vertical tab(VT for vertical line movement);
  // \xxx octal number xxx; \xdd hexadecimal number dd; \udddd unicode character by hexadecimal dddd;
  // n is a digit from 1 to 9;
  // n+ string with at least 1 n; n* string with 0 or more n; n? 0 or 1 n;
  // n{X} string with a sequence of X of n's; n{X,Y} string with a sequence of X to Y of n's;
  // n{X,} string with a sequence of at least X n's; n$ string with n at the end of string;
  // ^n string with n at the beginning of it; ?=n string followed by a specific string n;
  // ?!n string that is not followed by a specific string n;

  // toString() return the string value; test() return true or false for matching;
  // exec() return only the first match

  // ignore: index[0]=["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // index[1]=protocol="https", index[2]=fullhost="developer.mozilla.org",
  // index[3]=fullpath="en-US/docs/Web/JavaScript"]

  // const [, protocol, fullhost, fullpath] = parsedURL;

  // //object o has a property p=40
  // const o = {p:40, q: true};
  // // destructuring or unpacking p is assigned to different variable foo
  // const {p: foo, q: bar} = o;

  // let id, is_verified; // if variables declare separately
  // parentheses () is required for object literals to assign values to variables separately
  // ({id,is_verified} = {id:40, is_verified:true});
  // without (), {a,b} is considered a block NOT an object literal
  // const { a: aa = 10, b = 20 } = { a: 3 };
  // {unpacked object} = {object to be unpacked}
  // assign default value 3 to variable a in case the unpacked value is undefined
  //
  // How to unpack fields from objectws passed as a function parameter
  const user = {
    id: 30,
    displayName: "jdoe",
    fullName: {
      firstName: "John",
      lastName: "Doe"
    }
  };

  function userId({ id }) {
    return id;
  }

  function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
  }
  return (
    <div>
      <h1>
        User's id is {userId(user)}; user {whois(user)}
      </h1>
      <h1> my second headline</h1>
    </div>
  );
}
