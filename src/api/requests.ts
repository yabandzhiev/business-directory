import axios from "axios";
import { businessProps } from "../types/businessTypes";

export const getData = async () => {
  const result = await axios.get(
    "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
  );
  const data: businessProps[] = result.data;
  return data;
};
