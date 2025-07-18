import { Ellipsis, Plus } from "lucide-react";
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
    <div className="bg-gray-50 border border-gray-200 h-2/3 overflow-auto border-b-0">
      <div className="flex gap-2 justify-between border-b w-full items-center p-2 bg-white">
          <p className={`text-black border rounded-3xl p-2 ${title == "To Do" ? "bg-[#E6E8EC]" : title == "In Progress" ? "bg-[#FFA800]" : title == "Approved" ? "bg-[#AEE753]" : "bg-[#F90430] text-white" }`}>{title}</p>
          <div className="flex">
            <Plus />
            <Ellipsis />
          </div>
      </div>
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