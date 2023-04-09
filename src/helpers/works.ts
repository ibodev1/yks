import { Work } from "../types";

const getWorks = (): Work[] => {
  const works = localStorage.getItem("works");
  if (!!works) {
    return JSON.parse(works);
  }
  return [];
};

const addNewWork = (work: Work) => {
  const works = getWorks();
  const newWorks = [...works, work];
  console.log(newWorks);
  localStorage.setItem("works", JSON.stringify(newWorks));
};

export { getWorks, addNewWork };
