import fs from "fs";
import fsn from "fs/promises";
import path from "path";

let Basepath = "./";

let files = await fsn.readdir(Basepath);
for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  if (
    ext == "js" ||
    ext == "css" ||
    ext == "html" ||
    ext == "json" ||
    item.split(".").length < 2
  ) {
    continue;
  } else if (fs.existsSync(path.join(Basepath, ext))) {
    fsn.rename(path.join(Basepath, item), path.join(Basepath, ext, item));
  } else {
    await fsn.mkdir(path.join(Basepath, ext));
    fsn.rename(path.join(Basepath, item), path.join(Basepath, ext, item));
  }
}
