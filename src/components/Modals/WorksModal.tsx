import { For, type Component, createSignal } from "solid-js";
import Modal from "./Modal";
import { deleteWork, getWorks } from "../../helpers/works";
import { Work } from "../../types";
import WorkItem from "../Works/WorkItem";

const WorksModal: Component<{
  onClose: () => void;
}> = ({ onClose }) => {
  const [works, setWorks] = createSignal<Work[]>(getWorks());

  const deleteAllWorks = () => {
    works().map((work) => {
      deleteWork(work);
    });
    setWorks(getWorks());
  };

  return (
    <Modal
      onClose={onClose}
      title="Önceki Çalışmalarım"
      footer={
        works().length > 0 ? (
          <button onClick={deleteAllWorks} class="btn btn-danger m-2">
            Tümünü Temizle
          </button>
        ) : null
      }
    >
      <For
        each={works().sort((a, b) => b.createdDate - a.createdDate)}
        fallback={
          <div class="text-lg text-center text-primary p-6">
            Daha hiç çalışmadın.
          </div>
        }
      >
        {(work: Work, i) => <WorkItem setWorks={setWorks} work={work} />}
      </For>
    </Modal>
  );
};

export default WorksModal;
