const mypromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("success");
  } else {
    ("fail");
  }
});
mypromise.then((res) => {
  console.log(res);
});

const p = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply("Done");
    }, 2000);
  });
};
const p2 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply("Done");
    }, 2000);
  });
};
const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply("Done");
    }, 2000);
  });
};

p()
  .then((data) => {
    p2()
      .then((p2Data) => {
        p3()
          .then((p3Data) => {
            p()
              .then((p4Data) => {
                p()
                  .then((p5Data) => {
                    p()
                      .then((p6Data) => {})
                      .catch((err) => {});
                  })
                  .catch((err) => {});
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  })
  .catch((err) => {});

const runPromises = async () => {
  const pResponse = await p().catch(() => null);
  if (!pResponse) {
    // Error condition
    return;
  }

  const p2Response = await p2().catch(() => null);
  if (!p2Response) {
    // Error condition
    return;
  }

  const p3Response = await p3().catch(() => null);
  if (!p3Response) {
    // Error condition
    return;
  }

  const p4Response = await p().catch(() => null);
  if (!p4Response) {
    // Error condition
    return;
  }
};

import { useState } from "react";

const CounterEx = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    /*     setCounter(counter + 1); // 0 +1
    setCounter(counter + 1); // 0 +1
    setCounter(counter + 1); // 0 +1
    setCounter(counter + 1); // 0+1 */

    setCounter((currentVal) => currentVal + 1);
    setCounter((currentVal) => currentVal + 1);
    setCounter((currentVal) => currentVal + 1);
    setCounter((currentVal) => currentVal + 1);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>Increment</button>
    </>
  );
};

export default CounterEx;
