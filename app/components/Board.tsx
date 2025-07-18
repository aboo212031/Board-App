"use client";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import SwimLane from "./SwimLane";
import { useEffect } from "react";
import { useTaskStore } from "@/app/store/useTaskStore";

const statuses = ["To Do", "In Progress", "Approved", "Reject"];

export default function Board() {
  const { tasks, setTasks, updateTaskStatus, search } = useTaskStore();

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
    else {
        fetch("/data/tasks.json")
        .then((res) => res.json())
        .then((json) => setTasks(json));
    };
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;
    updateTaskStatus(draggableId, destination.droppableId);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-1 h-4/5">
        {statuses.map((status) => (
          <Droppable droppableId={status.toLowerCase()} key={status}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1 justify-center min-h-0">
                <SwimLane
                  title={status.replace(/(^\\w|\\s\\w)/g, s => s.toUpperCase())}
                  statusId={status.toLowerCase()}
                  tasks={tasks.filter(
                    (t) =>
                      t.status === status.toLowerCase() &&
                      t.title.toLowerCase().includes(search.toLowerCase())
                  )}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}