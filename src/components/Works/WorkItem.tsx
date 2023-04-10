import type { Component, Setter } from "solid-js";
import { Work } from "../../types";
import { FiTrash } from "solid-icons/fi";
import { deleteWork, getWorks } from "../../helpers/works";

const WorkItem: Component<{
  work: Work;
  setWorks: Setter<Work[]>;
}> = ({ work, setWorks }) => {
  const deleteOldWork = () => {
    deleteWork(work);
    setWorks(getWorks());
  };

  return (
    <div class="flex flex-col justify-center p-2 border-b border-primary">
      <div class="flex items-center justify-between">
        <div class="text-lg text-secondary font-bold">
          {new Date(work.createdDate).toLocaleDateString("tr-TR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </div>
        <button onClick={deleteOldWork} class="text-red-500">
          <FiTrash size={20} />
        </button>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-sm text-primary-400">
          {work.startTime} - {work.finishedTime} ({work.stopOverCount} Mola)
        </div>
        <div class="ml-4 text-primary">
          {work.totalTime.hours.toString().padStart(2, "0") +
            " Saat " +
            work.totalTime.minutes.toString().padStart(2, "0") +
            " Dakika " +
            work.totalTime.seconds.toString().padStart(2, "0") +
            " Saniye"}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
