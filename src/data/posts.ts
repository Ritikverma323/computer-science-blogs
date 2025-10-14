export type comments = {
  profilePic: string;
  username: string | number;
  content: string;
  date: Date;
  likes: number;
  replies?: comments[];
};

export type Post = {
  id: string | number;
  title: string;
  content: string;
  category: string;
  author: string;
  excerpt: string;
  date: string;
  image: string;
  comments?: comments[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Mastering the Event Loop in JavaScript",
    category: "JavaScript",
    author: "Jane Doe",
    date: "2025-10-01",
    image: "/post1.jpg",
    excerpt: "",
    content: `
      <p>The <strong>Event Loop</strong> is a fundamental concept for modern JavaScript development. It allows asynchronous operations to be handled efficiently.</p>
      <h3>1. The Call Stack</h3>
      <p>The call stack is where your functions get executed in order. If a function calls another function, it's pushed onto the stack.</p>
      <h3>2. The Task Queue (Macrotasks)</h3>
      <p>Macrotasks include <code>setTimeout</code>, <code>setInterval</code>, and I/O operations. They wait for the stack to be empty before execution.</p>
      <h3>3. The Job Queue (Microtasks)</h3>
      <p>Microtasks include Promises and MutationObservers. These run before the next macrotask.</p>
      <h3>4. Practical Example</h3>
      <pre><code>console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');</code></pre>
      <p>Output: Start → End → Promise → Timeout</p>
      <h4>Conclusion</h4>
      <p>Understanding the event loop helps prevent unexpected behavior and improves performance.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user1.jpg",
        username: "dev_raj",
        content: "This finally made me understand why setTimeout runs after promises. Great explanation!",
        date: new Date("2025-10-02T10:30:00"),
        likes: 23,
        replies: [
          {
            profilePic: "/avatars/user2.jpg",
            username: "Jane Doe",
            content: "Glad it helped! The microtask queue is often overlooked but super important.",
            date: new Date("2025-10-02T11:00:00"),
            likes: 12,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Power of CSS Grid Layout",
    category: "CSS",
    author: "John Smith",
    date: "2025-09-28",
    image: "/post2.jpg",
    excerpt: "",
    content: `
      <p>CSS Grid provides a flexible two-dimensional layout system for modern web design.</p>
      <h3>1. Defining a Grid</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}</code></pre>
      <h3>2. Grid Items</h3>
      <p>Items can span multiple columns or rows using <code>grid-column</code> and <code>grid-row</code>.</p>
      <h3>3. Auto Placement</h3>
      <p>The browser can automatically place items efficiently in the grid.</p>
      <h4>Conclusion</h4>
      <p>CSS Grid simplifies complex layouts compared to floats or flexbox alone.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user2.jpg",
        username: "designqueen",
        content: "Grid changed my life as a frontend dev! Cleaner than flexbox for complex layouts.",
        date: new Date("2025-09-29T14:20:00"),
        likes: 15,
      },
    ],
  },
  {
    id: 3,
    title: "Understanding Async/Await in JavaScript",
    category: "JavaScript",
    author: "Alice Brown",
    date: "2025-10-05",
    image: "/images/post3.jpg",
    excerpt: "",
    content: `
      <p>Async/Await makes asynchronous code readable and manageable.</p>
      <h3>1. Async Functions</h3>
      <p>An <code>async</code> function always returns a Promise.</p>
      <pre><code>async function fetchData() {
  return "Hello";
}</code></pre>
      <h3>2. Await Keyword</h3>
      <p>Use <code>await</code> to pause execution until the Promise resolves.</p>
      <pre><code>const result = await fetchData();</code></pre>
      <h3>3. Error Handling</h3>
      <p>Wrap <code>await</code> calls in <code>try/catch</code> for safe handling.</p>
      <h4>Best Practices</h4>
      <ul>
        <li>Avoid mixing callbacks with async/await.</li>
        <li>Handle errors properly.</li>
        <li>Use <code>Promise.all</code> for concurrent tasks.</li>
      </ul>
    `,
    comments: [
      {
        profilePic: "/avatars/user5.jpg",
        username: "nodefan",
        content: "Finally, async/await clicks for me! Very clear examples.",
        date: new Date("2025-10-05T16:10:00"),
        likes: 18,
      },
    ],
  },
  {
    id: 4,
    title: "Modern Responsive Web Design Techniques",
    category: "Web Design",
    author: "David Green",
    date: "2025-09-22",
    image: "/images/post4.jpg",
    excerpt: "",
    content: `
      <p>Responsive design ensures websites look great on all devices.</p>
      <h3>1. Fluid Grids</h3>
      <p>Use relative units like percentages instead of pixels.</p>
      <h3>2. Flexible Images</h3>
      <p>Images scale according to container width.</p>
      <h3>3. Media Queries</h3>
      <pre><code>@media (max-width: 768px) {
  body { font-size: 14px; }
}</code></pre>
      <h4>Conclusion</h4>
      <p>Responsive design improves accessibility and UX across devices.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user7.jpg",
        username: "design_master",
        content: "Media queries saved me so much time. Excellent tips!",
        date: new Date("2025-09-23T11:15:00"),
        likes: 14,
      },
    ],
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    category: "TypeScript",
    author: "Emma White",
    date: "2025-10-03",
    image: "/images/post5.jpg",
    excerpt: "",
    content: `
      <p>TypeScript adds type safety to JavaScript, helping catch errors early.</p>
      <h3>1. Basic Types</h3>
      <p>Common types include <code>string</code>, <code>number</code>, <code>boolean</code>.</p>
      <h3>2. Interfaces</h3>
      <p>Define object shapes with <code>interface</code>:</p>
      <pre><code>interface User {
  name: string;
  age: number;
}</code></pre>
      <h3>3. Classes & Inheritance</h3>
      <p>TypeScript supports OOP concepts like classes, inheritance, and access modifiers.</p>
      <h4>Conclusion</h4>
      <p>TypeScript helps build large-scale, maintainable applications.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user8.jpg",
        username: "ts_lover",
        content: "TypeScript felt scary at first, but this tutorial made it easy!",
        date: new Date("2025-10-03T13:00:00"),
        likes: 20,
      },
    ],
  },
  {
    id: 6,
    title: "Deep Dive into React Hooks",
    category: "React",
    author: "Sophie Black",
    date: "2025-10-07",
    image: "/images/post6.jpg",
    excerpt: "",
    content: `
      <p>React Hooks allow you to use state and other features without writing class components.</p>
      <h3>1. useState</h3>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      <h3>2. useEffect</h3>
      <pre><code>useEffect(() => {
  document.title = 'Count: ' + count;
}, [count]);</code></pre>
      <h3>3. useContext</h3>
      <p>Access global state using <code>useContext</code> instead of prop drilling.</p>
      <h4>Conclusion</h4>
      <p>Hooks simplify React development and make code cleaner.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user9.jpg",
        username: "react_ninja",
        content: "useEffect was tricky until I understood the dependency array. Thanks!",
        date: new Date("2025-10-07T10:30:00"),
        likes: 17,
      },
    ],
  },
  {
    id: 7,
    title: "Building REST APIs with Node.js and Express",
    category: "Node.js",
    author: "Michael Lee",
    date: "2025-09-30",
    image: "/images/post7.jpg",
    excerpt: "",
    content: `
      <p>Node.js with Express makes building APIs simple and scalable.</p>
      <h3>1. Setting Up Express</h3>
      <pre><code>const express = require('express');
const app = express();
app.use(express.json());</code></pre>
      <h3>2. Defining Routes</h3>
      <pre><code>app.get('/api/users', (req, res) => {
  res.send(users);
});</code></pre>
      <h3>3. Error Handling</h3>
      <p>Use middleware to catch errors and send structured responses.</p>
      <h4>Conclusion</h4>
      <p>Express simplifies backend development and supports REST best practices.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user10.jpg",
        username: "backend_guru",
        content: "Express is my go-to framework. Excellent beginner-friendly guide.",
        date: new Date("2025-10-01T08:00:00"),
        likes: 22,
      },
    ],
  },
  {
    id: 8,
    title: "Understanding Closures in JavaScript",
    category: "JavaScript",
    author: "Olivia Martinez",
    date: "2025-10-02",
    image: "/images/post8.jpg",
    excerpt: "",
    content: `
      <p>Closures are functions that retain access to variables from their outer scope.</p>
      <h3>1. Basic Example</h3>
      <pre><code>function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  }
}
const count = outer();
console.log(count()); // 1</code></pre>
      <h3>2. Use Cases</h3>
      <ul>
        <li>Data privacy</li>
        <li>Function factories</li>
        <li>Maintaining state</li>
      </ul>
      <h4>Conclusion</h4>
      <p>Closures are powerful for encapsulation and functional programming in JS.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user11.jpg",
        username: "js_enthusiast",
        content: "Closures always confused me. This example clears it up!",
        date: new Date("2025-10-02T12:00:00"),
        likes: 19,
      },
    ],
  },
  {
    id: 9,
    title: "Advanced CSS Animations",
    category: "CSS",
    author: "Liam Turner",
    date: "2025-09-27",
    image: "/images/post9.jpg",
    excerpt: "",
    content: `
      <p>CSS animations can bring your UI to life.</p>
      <h3>1. Keyframes</h3>
      <pre><code>@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}</code></pre>
      <h3>2. Applying Animations</h3>
      <pre><code>.box {
  animation: slideIn 0.5s ease-in-out forwards;
}</code></pre>
      <h3>3. Transitions vs Animations</h3>
      <p>Use transitions for simple hover effects, animations for complex sequences.</p>
      <h4>Conclusion</h4>
      <p>Mastering CSS animations improves UX and engagement.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user12.jpg",
        username: "css_artist",
        content: "Animations make websites feel alive. Great tutorial!",
        date: new Date("2025-09-28T09:30:00"),
        likes: 13,
      },
    ],
  },
  {
    id: 10,
    title: "React Context API Explained",
    category: "React",
    author: "Sophia King",
    date: "2025-10-06",
    image: "/images/post10.jpg",
    excerpt: "",
    content: `
      <p>The Context API allows sharing state across components without prop drilling.</p>
      <h3>1. Creating Context</h3>
      <pre><code>const ThemeContext = createContext('light');</code></pre>
      <h3>2. Providing Context</h3>
      <pre><code><ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider></code></pre>
      <h3>3. Consuming Context</h3>
      <pre><code>const theme = useContext(ThemeContext);</code></pre>
      <h4>Conclusion</h4>
      <p>Context API simplifies state management for medium-scale applications.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user13.jpg",
        username: "react_fan",
        content: "Context API is amazing for avoiding prop drilling. Very clear explanation.",
        date: new Date("2025-10-06T11:45:00"),
        likes: 16,
      },
    ],
  },
  {
    id: 11,
    title: "Mastering Flexbox in CSS",
    category: "CSS",
    author: "Noah Wilson",
    date: "2025-09-25",
    image: "/images/post11.jpg",
    excerpt: "",
    content: `
      <p>Flexbox is a one-dimensional layout system in CSS.</p>
      <h3>1. Container Properties</h3>
      <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>
      <h3>2. Item Properties</h3>
      <pre><code>.item {
  flex: 1;
  order: 2;
}</code></pre>
      <h3>3. Common Patterns</h3>
      <ul>
        <li>Horizontal center alignment</li>
        <li>Vertical stacking</li>
        <li>Equal-width items</li>
      </ul>
      <h4>Conclusion</h4>
      <p>Flexbox is essential for responsive design and layout control.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user14.jpg",
        username: "layout_master",
        content: "Flexbox finally makes layout easier than old float hacks!",
        date: new Date("2025-09-26T10:15:00"),
        likes: 21,
      },
    ],
  },
  {
    id: 12,
    title: "Node.js Streams: Everything You Need to Know",
    category: "Node.js",
    author: "Ethan Harris",
    date: "2025-10-01",
    image: "/images/post12.jpg",
    excerpt: "",
    content: `
      <p>Streams allow reading/writing data efficiently in Node.js.</p>
      <h3>1. Types of Streams</h3>
      <ul>
        <li>Readable</li>
        <li>Writable</li>
        <li>Duplex</li>
        <li>Transform</li>
      </ul>
      <h3>2. Using Streams</h3>
      <pre><code>const fs = require('fs');
const readable = fs.createReadStream('file.txt');
readable.on('data', chunk => console.log(chunk.toString()));</code></pre>
      <h3>3. Pipe Method</h3>
      <p>Streams can be piped for efficient data transfer.</p>
      <pre><code>readable.pipe(writable);</code></pre>
      <h4>Conclusion</h4>
      <p>Streams are critical for handling large data efficiently in Node.js.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user15.jpg",
        username: "node_streamer",
        content: "Streams were confusing at first, but this explanation helps a lot!",
        date: new Date("2025-10-01T14:30:00"),
        likes: 18,
      },
    ],
  },
  {
    id: 13,
    title: "Using LocalStorage and SessionStorage in JavaScript",
    category: "JavaScript",
    author: "Grace Adams",
    date: "2025-09-29",
    image: "/images/post13.jpg",
    excerpt: "",
    content: `
      <p>LocalStorage and SessionStorage allow storing data in the browser.</p>
      <h3>1. LocalStorage</h3>
      <p>Data persists even after browser closes.</p>
      <pre><code>localStorage.setItem('name', 'John');</code></pre>
      <h3>2. SessionStorage</h3>
      <p>Data is cleared when the session ends.</p>
      <pre><code>sessionStorage.setItem('token', 'abc123');</code></pre>
      <h3>3. Use Cases</h3>
      <ul>
        <li>Remembering user preferences</li>
        <li>Storing temporary auth tokens</li>
      </ul>
      <h4>Conclusion</h4>
      <p>These APIs provide easy client-side storage without backend calls.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user16.jpg",
        username: "webdev_pro",
        content: "LocalStorage is super useful for small apps. Nice guide!",
        date: new Date("2025-09-30T08:50:00"),
        likes: 14,
      },
    ],
  },
  {
    id: 14,
    title: "React Router: Navigation Made Simple",
    category: "React",
    author: "Isabella Scott",
    date: "2025-10-04",
    image: "/images/post14.jpg",
    excerpt: "",
    content: `
      <p>React Router helps manage navigation in single-page applications.</p>
      <h3>1. Setting Up</h3>
      <pre><code>import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';</code></pre>
      <h3>2. Defining Routes</h3>
      <pre><code><Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes></code></pre>
      <h3>3. Dynamic Routes</h3>
      <pre><code><Route path="/user/:id" element={<User />} /></code></pre>
      <h4>Conclusion</h4>
      <p>React Router is essential for creating multi-page SPA experiences.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user17.jpg",
        username: "react_router_fan",
        content: "Dynamic routes were tricky, but this post simplifies it a lot.",
        date: new Date("2025-10-04T12:10:00"),
        likes: 15,
      },
    ],
  },
  {
    id: 15,
    title: "CSS Variables: Dynamic Styling Made Easy",
    category: "CSS",
    author: "Mason Cooper",
    date: "2025-09-26",
    image: "/images/post15.jpg",
    excerpt: "",
    content: `
      <p>CSS Variables allow reusable, dynamic styling in CSS.</p>
      <h3>1. Defining Variables</h3>
      <pre><code>:root {
  --primary-color: #3498db;
}</code></pre>
      <h3>2. Using Variables</h3>
      <pre><code>button {
  background-color: var(--primary-color);
}</code></pre>
      <h3>3. Advantages</h3>
      <ul>
        <li>Easy theme management</li>
        <li>Dynamic updates with JS</li>
      </ul>
      <h4>Conclusion</h4>
      <p>CSS Variables improve maintainability and flexibility of stylesheets.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user18.jpg",
        username: "css_guru",
        content: "Variables save a ton of repetitive CSS. Love it!",
        date: new Date("2025-09-27T11:00:00"),
        likes: 19,
      },
    ],
  },
  {
    id: 16,
    title: "Handling Forms in React",
    category: "React",
    author: "Charlotte Reed",
    date: "2025-10-05",
    image: "/images/post16.jpg",
    excerpt: "",
    content: `
      <p>Forms are central to user interaction in web apps.</p>
      <h3>1. Controlled Components</h3>
      <pre><code>const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} /></code></pre>
      <h3>2. Form Submission</h3>
      <pre><code>const handleSubmit = e => {
  e.preventDefault();
  console.log(name);
}</code></pre>
      <h3>3. Validation</h3>
      <p>Validate inputs before sending data to backend.</p>
      <h4>Conclusion</h4>
      <p>Controlled forms in React provide better control and predictability.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user19.jpg",
        username: "react_forms",
        content: "Validation tips are really helpful. Thanks!",
        date: new Date("2025-10-05T14:20:00"),
        likes: 16,
      },
    ],
  },
  {
    id: 17,
    title: "Node.js Error Handling Best Practices",
    category: "Node.js",
    author: "Daniel Young",
    date: "2025-09-30",
    image: "/images/post17.jpg",
    excerpt: "",
    content: `
      <p>Proper error handling ensures stable and maintainable Node.js apps.</p>
      <h3>1. Try/Catch Blocks</h3>
      <pre><code>try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}</code></pre>
      <h3>2. Error Middleware</h3>
      <pre><code>app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});</code></pre>
      <h3>3. Logging</h3>
      <p>Use tools like Winston or Pino for structured logging.</p>
      <h4>Conclusion</h4>
      <p>Good error handling reduces crashes and simplifies debugging.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user20.jpg",
        username: "node_error_pro",
        content: "Logging and middleware tips are gold. Thanks for sharing!",
        date: new Date("2025-09-30T15:40:00"),
        likes: 21,
      },
    ],
  },
  {
    id: 18,
    title: "JavaScript Module System Explained",
    category: "JavaScript",
    author: "Hannah Baker",
    date: "2025-10-03",
    image: "/images/post18.jpg",
    excerpt: "",
    content: `
      <p>Modules allow splitting code into reusable and maintainable files.</p>
      <h3>1. CommonJS</h3>
      <pre><code>const fs = require('fs');</code></pre>
      <h3>2. ES Modules</h3>
      <pre><code>import fs from 'fs';</code></pre>
      <h3>3. Benefits</h3>
      <ul>
        <li>Code reusability</li>
        <li>Encapsulation</li>
        <li>Better dependency management</li>
      </ul>
      <h4>Conclusion</h4>
      <p>Modules are essential for scalable JavaScript applications.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user21.jpg",
        username: "js_module_fan",
        content: "Modules make big projects manageable. Nice explanation!",
        date: new Date("2025-10-03T12:00:00"),
        likes: 17,
      },
    ],
  },
  {
    id: 19,
    title: "Progressive Web Apps (PWA) Essentials",
    category: "Web Design",
    author: "Lily Brooks",
    date: "2025-09-24",
    image: "/images/post19.jpg",
    excerpt: "",
    content: `
      <p>PWA allows web apps to behave like native apps with offline capabilities.</p>
      <h3>1. Service Workers</h3>
      <p>Background scripts handle caching and offline access.</p>
      <h3>2. Web App Manifest</h3>
      <p>Defines app name, icons, theme color, and start URL.</p>
      <h3>3. Benefits</h3>
      <ul>
        <li>Offline usage</li>
        <li>Push notifications</li>
        <li>Home screen installation</li>
      </ul>
      <h4>Conclusion</h4>
      <p>PWA improves user engagement and performance on mobile devices.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user22.jpg",
        username: "pwa_expert",
        content: "Service workers were tricky at first, but this helps a lot.",
        date: new Date("2025-09-25T09:30:00"),
        likes: 18,
      },
    ],
  },
  {
    id: 20,
    title: "Optimizing React Performance",
    category: "React",
    author: "Ryan Mitchell",
    date: "2025-10-08",
    image: "/images/post20.jpg",
    excerpt: "",
    content: `
      <p>React performance can be optimized with several techniques.</p>
      <h3>1. Memoization</h3>
      <p>Use <code>React.memo</code> and <code>useMemo</code> to avoid unnecessary re-renders.</p>
      <h3>2. Lazy Loading</h3>
      <p>Load components only when needed using <code>React.lazy</code> and <code>Suspense</code>.</p>
      <h3>3. Profiling</h3>
      <p>Use React DevTools Profiler to identify performance bottlenecks.</p>
      <h4>Conclusion</h4>
      <p>Optimizing React apps improves UX and reduces resource usage.</p>
    `,
    comments: [
      {
        profilePic: "/avatars/user23.jpg",
        username: "react_perf",
        content: "Memoization and lazy loading tips are very practical. Thanks!",
        date: new Date("2025-10-08T14:10:00"),
        likes: 22,
      },
    ],
  }
];
