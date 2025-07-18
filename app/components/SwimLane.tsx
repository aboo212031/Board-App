import TaskCard from "./TaskCard";
import { Draggable } from "@hello-pangea/dnd";

export default function Swimlane({
  title,
  tasks,
  statusId,
}: {
  title: string;
  statusId: string;
  tasks: any[];
}) {
  return (
    <div className="bg-white border border-gray-200 px-4 py-4 h-2/3 overflow-auto">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {tasks.map((task, index) => (
        <Draggable draggableId={task.id} index={index} key={task.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="mb-3"
            >
              <TaskCard title={task.title} description={task.description} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}