import { For, type Component } from "solid-js";
import Modal from "./Modal";
import { getWorks } from "../../helpers/works";
import { Work } from "../../types";
import WorkItem from "../Works/WorkItem";

const WorksModal: Component<{
  onClose: () => void;
}> = ({ onClose }) => {
  return (
    <Modal onClose={onClose} title="Önceki Çalışmalarım">
      <For
        each={getWorks().sort((a, b) => b.createdDate - a.createdDate)}
        fallback={
          <div class="text-lg text-center text-primary p-6">
            Daha hiç çalışmadın.
          </div>
        }
      >
        {(work: Work, i) => <WorkItem work={work} />}
      </For>
    </Modal>
  );
};

export default WorksModal;
