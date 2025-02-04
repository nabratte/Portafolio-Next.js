export interface Subtask {
    id: number;
    title: string;
    subtasks: Subtask[];
    completed: boolean;
    timeSpent: number; // Tiempo en segundos
    isRunning: boolean;
  }
  
  export interface Task {
    id: number;
    title: string;
    subtasks: Subtask[];
    completed: boolean;
    timeSpent: number; // Tiempo en segundos
    isRunning: boolean;
  }
