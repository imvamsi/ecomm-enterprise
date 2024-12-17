import { error } from "console";

function asyncHandler(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

export default asyncHandler;

// const asyncHandler = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// export default asyncHandler;
