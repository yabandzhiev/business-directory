import axios from "axios";

export const getData = async () => {
  const result = await axios.get(
    "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f"
  );
  return result;
};
