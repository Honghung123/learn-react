import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button";
import Expenses from "./components/Expenses";
import { useImmer } from "use-immer"; // Update array or object to not be tedious 

function handleClickEvent(event) {
  alert("You have clicked this button");
}

function WelcomeMessage(props) {
  return (
    <p>
      <b>{props.message}</b> {props.user}
    </p>
  );
}
// Cach 2:
// function WelcomeMessage({message, user}) {
//   return (<p><b>{ message }</b> { user }</p>);
// }

function OneProp(prop) {
  return <p>This is one props: {prop.name.join(" - ")}</p>;
}

function SpecialProp(prop) {
  return <b>* * * * * {prop.children} * * * * *</b>;
}

function ChangeName({ setName, who }) {
  return (
    <div>
      <button
        onClick={() => setName(who === "Hung Rose" ? "Hong Hung" : "Hung Rose")}
      >
        Change name
      </button>
    </div>
  );
}

function SimpleForm(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/form", {
      body: JSON.stringify({
        username: props.username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={props.username}
        className="text-green-500 placeholder::text-slate-500"
        onChange={(event) => props.setUsername(event.target.value)}
        placeholder="Enter username"
      ></input>
      <label class="block">
        <span class="block text-sm font-medium text-white-700">Email</span>
        <input
          type="text"
          value="hung@gmail.com"
          disabled
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
        />
      </label>
      <label class="block">
        <span class="block text-sm font-medium text-white-700">
          Phone number
        </span>
        <input
          type="text"
          value="0123456789"
          invalid
          class="text-slate-700 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
        />
      </label>
      <label class="block">
        <span class="block text-sm font-medium text-white-700">Address</span>
        <input
          type="text"
          value="Ho Chi Minh City"
          class="text-slate-700 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
        />
      </label>
    </form>
  );
}
let count  = 0;
function DisplayModal({ title }) {
  console.log("My value of title: " + title + " is " + count++);
  const [showModal, setShowModal] = useState(false);
  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="modal">
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Static modal
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyExpense() {
  const expenseToday = [
    { title: "Expense A", amount: 300000, date: new Date() },
    { title: "Expense B", amount: 400000, date: new Date() },
    { title: "Expense C", amount: 500000, date: new Date() },
  ]
  return (
    <div className="container">
      <Expenses items={expenseToday} />
    </div>
  )
}

function CurrentTime({ date }) {
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return <h3 className="bg-sky-200 font-bold">Current time: {timeString}</h3>;
}

function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score => score + 1);
    // setScore(score + 1); // Will only effect once of each times when there are many same callback setScore()
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Your Score: {score}</h1>
    </>
  )
} 

function BucketList() {
  const [list, setList] = useImmer([
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
  ]);

  function handleToggle(artworkId, checked) {
    // setList(list.map(artwork => {
    //   if (artwork.id === artworkId) {
    //     return { ...artwork, seen: checked };
    //   } else {
    //     return artwork;
    //   }
    // }));
    setList(list => {
      const draft = list.find(artwork => artwork.id === artworkId);
      draft.seen = checked; 
    })
  }

  return (
    <div className="ring-1 ring-lime-300">
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Hung Rose");
  const [username, setUsername] = useState("");
  const [lastCount, setLastCount] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const reactLogo =
    "https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024";
  useEffect(() => {
    console.log(`You have changed watched variable: ${name}`);
  }, [name]);
  const increment = (step) => {
    setCount( count => count + step);
  };
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  return (
    <div className="App selection:bg-fuchsia-300">
      <header className="App-header">
        <CurrentTime date={currentTime} />
        <Counter />
        <BucketList />
        <h1 className="text-yellow-300">Simple program - Counter</h1>
        <p className="text-white-300 flex items-center justify-center">
          Current value: {count}
        </p>
        <p className="empty:hidden">
          This element will not hidden because it has content in it
        </p>
        <p className="empty:hidden"></p>
        <p className="text-white-300">History: {lastCount.join(" -> ")}</p>
        <Button step={10} increment={increment} title="+ 10" />
        <Button step={50} increment={increment} title="+ 50" />
        <Button step={-30} increment={increment} title="- 30" />
        <button
          className="text-pink-400 hover:bg-sky-700 focus:ring focus:outline-none focus:ring-violet-300 px-3 rounded"
          onClick={() => setLastCount([...lastCount, count])}
        >
          Save
        </button>
        <button
          className="dark:md:hover:bg-yellow-600"
          onClick={() => {
            setCount(0);
            lastCount.length = 0;
          }}
        >
          Reset
        </button>
        <DisplayModal title />
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="aspect-[20/12]] md:aspect-video lg:aspect-square w-50"
        ></iframe>
        <div className="bg-slate-100 container sm:container-sm md:container-md lg-container-lg xl:container-xl .bg-stripes-purple">
          <div className="w-48 h-48 bg-rose-300"></div>
        </div>
        <MyExpense />
        <div className="gallery container">
          <h1 className="text-center">My gallery</h1>
          <div className="columns-[20rem] gap-8">
            <img
              className="aspect-auto md:aspect-square lg:aspect-video w-full overflow-hidden hover:break-after-column"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-[9/14] w-full overflow-hidden object-fill sm:object-none hover:object-contain object-center"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-video w-full overflow-hidden object-cover object-right-bottom hover:object-left-top sm:object-[center_bottom]"
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-[5/6] w-full overflow-hidden hover:break-before-column object-scale-down"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            />
            <img
              className="aspect-auto md:aspect-square lg:aspect-square w-full overflow-hidden object-contain"
              src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            />
          </div>
        </div>
        <div className="flex items-center content-center md:overflow-x-hidden sm:overflow-visible overflow-hidden">
          <span class="box-decoration-slice hover:box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </span>
        </div>
        <div className="container py-6">
          <img
            src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            className="w-48 aspect-video float-none rounded-[.75rem] lg:float-left"
          />
          <img
            src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            className="w-48 aspect-video float-right rounded-[.75rem]"
          />
          <p className="clear-start sm:clear-both h-24 overflow-auto md:overscroll-contain overscroll-none">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
        <img
          src={logo}
          alt={reactLogo}
          className="App-logo mx-auto h-16 z-10 md:z-40 rounded-full fixed md:hover:top-full lg:right-[4rem] md:top-0 md:right-0"
        />
        <p
          className="text-red-500 bg-yellow-500 hover:bg-white hover:font-bold"
          style={{ fontSize: "2rem", transform: "skewY(2deg)" }}
        >
          You clicked on below button {count} times!.
        </p>
        <button className="" onClick={handleClickEvent}>
          Click
        </button>
        <SimpleForm username={username} setUsername={setUsername} />
        <OneProp name={[name, "Nguyen Huy Hoang"]} />
        <div>
          <p>You will change random name when clicking button below: </p>
          <ChangeName setName={setName} who={name} />
        </div>
        <WelcomeMessage message="Welcome!" user="Dam Hong Hung" />
        <SpecialProp>
          <center>
            <i>This is special prob called Children</i>
          </center>
        </SpecialProp>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
