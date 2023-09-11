//callback hell =====>

//1.) by callback functions

function func1(name1, cb) {
  setTimeout(cb(name1), 100);
}
function func2(name2, cb) {
  setTimeout(cb(name2), 0);
}
//calling functions
func1("manas", function (a) {
  console.log(a);
  func2("ankit", function (a) {
    console.log(a);
    func1("shr", function (a) {
      console.log(a);
      func2("god", function (a) {
        console.log(a);
      });
    });
  });
});

// 2. )by Promises

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done1");
    }, 200);
  });
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done2");
    }, 200);
  });
};
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done3");
    }, 200);
  });
};

//calling the promise

p1()
  .then((p1data) => {
    p2()
      .then((p2data) => {
        p3()
          .then((p3data) => {
            p1()
              .then((p4data) => {
                p1()
                  .then((p5data) => {
                    p1()
                      .then((p6data) => {
                        p1()
                          .then((p7data) => {
                            p1()
                              .then((p8data) => {})
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
      })
      .catch((err) => {});
  })
  .catch((err) => {});

//solution => async await====>

const runPromises = async () => {
  const p1res = await p1().catch(() => null);
  if (!p1res) {
    //error condition
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

  const p4Response = await p1().catch(() => null);
  if (!p4Response) {
    // Error condition
    return;
  }
};
