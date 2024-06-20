import React from "react";
import img1 from "../assets/img1.png";

function Info() {
  return (
    <>
      <div className="text-6xl font-semibold text-center px-96 pb-4 pt-24">
        200+ The fastest growing company use Finsy
      </div>

      <div className="pb-8 text-xl text-gray-500 text-center">
        Many companies have tried using Finsy and they trust the safety of their
        money
      </div>

      <div>
        <div className="flex gap-8 px-24 pb-8 justify-between">
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
        </div>
        <div className="flex gap-8 px-24 pb-8 justify-between">
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="rounded-xl"
              style={{ width: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
