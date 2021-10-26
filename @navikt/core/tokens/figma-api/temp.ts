import Axios from "axios";
import getFileStyles from "./file-styles";
const { create } = Axios;
const dotenv = require("dotenv");
dotenv.config();

const FIGMA_FILE = "m0qpSPpsnNC9DwdmerGqJH";

const FigmaAxion = (token) =>
  create({
    headers: {
      "X-FIGMA-TOKEN": token,
    },
  });

const fetchFile = async () => {
  const { data } = await FigmaAxion(process.env.FIGMA_TOKEN)
    .get(`https://api.figma.com/v1/files/${FIGMA_FILE}`)
    .catch((e) => {
      throw e;
    });
  return data;
};

const fetchFileStyles = async () => {
  const {
    data: {
      meta: { styles },
    },
  } = await FigmaAxion(process.env.FIGMA_TOKEN)
    .get(`https://api.figma.com/v1/files/${FIGMA_FILE}/styles`)
    .catch((e) => {
      throw e;
    });
  return styles;
};

Promise.all([fetchFile(), fetchFileStyles()]).then(([file, styles]) =>
  console.log(JSON.stringify(getFileStyles(file, styles), null, 2))
);
