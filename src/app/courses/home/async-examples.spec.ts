import { fakeAsync, flush, tick } from "@angular/core/testing";

fdescribe("Async Testing Example", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log("running assertions");
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {
      console.log("running assertions setTimeout()");
      test = true;
      //   expect(test).toBeTruthy();
    }, 1000);

    // tick(1000);

    // tick(500);
    // tick(499);
    // tick(1);

    flush();

    expect(test).toBeTruthy();
  }));

  fit("Asynchronous test example - plain promise", () => {
    let test = false;

    console.log("Creating promise");

    setTimeout(() => {
      console.log("setTimeout() first callback triggered");
    });
    setTimeout(() => {
      console.log("setTimeout() second callback triggered");
    });

    Promise.resolve()
      .then(() => {
        // console.log("Promise evaluated successfully");
        console.log("Promise first then() evaluated successfully");
        return Promise.resolve();
      })
      .then(() => {
        console.log("Promise second then() evaluated successfully");
        test = true;
      });

    console.log("Running test assertions");

    expect(test).toBeTruthy();
  });
});