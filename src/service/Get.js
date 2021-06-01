import axios from "axios";
import rootPath from "./Config";
const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? rootPath : ""}${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;
