import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let Basepath = "./";

let files = await fs.readdir(Basepath);

for (const item of files) {
  if (item.split(".").length == 1 && item != "node_modules") {
    let inside = await fs.readdir(path.join(Basepath, item));
    for (const extFiles of inside) {
      await fs.rename(
        path.join(Basepath, item, extFiles),
        path.join(Basepath, extFiles),
      );
    }
    fs.rmdir(path.join(Basepath, item));
  }
}
