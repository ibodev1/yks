import { Work } from "../types";

const LOCALE_STORAGE_NAME = "works";

const getWorks = (): Work[] => {
  const works = localStorage.getItem(LOCALE_STORAGE_NAME);
  if (!!works) {
    return JSON.parse(works);
  }
  return [];
};

const addNewWork = (work: Work) => {
  const works = getWorks();
  const newWorks = [...works, work];
  localStorage.setItem(LOCALE_STORAGE_NAME, JSON.stringify(newWorks));
};

const deleteWork = (work: Work) => {
  const works = getWorks();
  const filteredWorks = works.filter((w) => w.id !== work.id || w.createdDate !== work.createdDate);
  console.log(filteredWorks);
  localStorage.setItem(LOCALE_STORAGE_NAME, JSON.stringify(filteredWorks));
}

export { getWorks, addNewWork, deleteWork };
