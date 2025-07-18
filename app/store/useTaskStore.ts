import { create } from "zustand";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface Store {
  tasks: Task[];
  search: string;
  setSearch: (s: string) => void;
  setTasks: (t: Task[]) => void;
  updateTaskStatus: (id: string, status: string) => void;
}

export const useTaskStore = create<Store>((set) => ({
  tasks: [],
  search: "",
  setSearch: (search) => set({ search }),
  setTasks: (tasks) => set({ tasks }),
  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      ),
    })),
}));