import type { Component } from "solid-js";
import { Work } from "../../types";

const WorkItem: Component<{
  work: Work;
}> = ({ work }) => {
  return (
    <div class="flex flex-col justify-center p-2 border-b border-primary">
      <div class="text-lg text-secondary font-bold">
        {new Date(work.createdDate).toLocaleDateString("tr-TR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
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
