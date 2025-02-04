'use client';
import React, { useState, useEffect } from 'react';
import { Task, Subtask } from './types';

const ToDoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Función para convertir segundos a días, horas, minutos y segundos
  const formatTime = (totalSeconds: number): string => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Función para agregar una nueva tarea
  const addTask = () => {
    const taskTitle = prompt('Nombre de la tarea:');
    if (taskTitle) {
      const newTask: Task = {
        id: Date.now(),
        title: taskTitle,
        subtasks: [],
        completed: false,
        timeSpent: 0,
        isRunning: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Función recursiva para agregar una subtarea
  const addSubtask = (items: (Task | Subtask)[], parentId: number, subtaskTitle: string): (Task | Subtask)[] => {
    return items.map((item) => {
      if (item.id === parentId) {
        return {
          ...item,
          subtasks: [
            ...item.subtasks,
            {
              id: Date.now(),
              title: subtaskTitle,
              completed: false,
              timeSpent: 0,
              isRunning: false,
              subtasks: [],
            },
          ],
        };
      } else if (item.subtasks) {
        return {
          ...item,
          subtasks: addSubtask(item.subtasks, parentId, subtaskTitle),
        };
      }
      return item;
    });
  };

  // Función recursiva para eliminar una subtarea
  const deleteSubtask = (items: (Task | Subtask)[], subtaskId: number): (Task | Subtask)[] => {
    return items
      .filter((item) => item.id !== subtaskId)
      .map((item) => {
        if (item.subtasks) {
          return {
            ...item,
            subtasks: deleteSubtask(item.subtasks, subtaskId),
          };
        }
        return item;
      });
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Función recursiva para verificar si todas las subtareas están completas
  const areAllSubtasksCompleted = (subtasks: Subtask[]): boolean => {
    return subtasks.every((subtask) => subtask.completed && areAllSubtasksCompleted(subtask.subtasks));
  };

  // Función recursiva para marcar una subtarea como completada
  const toggleSubtask = (items: (Task | Subtask)[], subtaskId: number): (Task | Subtask)[] => {
    return items.map((item) => {
      if (item.id === subtaskId) {
        // Verificar si todas las subtareas están completas antes de permitir completar esta subtarea
        if (areAllSubtasksCompleted(item.subtasks)) {
          return {
            ...item,
            completed: !item.completed,
            isRunning: false, // Detener el temporizador cuando se completa
          };
        } else {
          alert('No se puede completar la subtarea porque no todas sus subtareas están completas.');
          return item;
        }
      } else if (item.subtasks) {
        return {
          ...item,
          subtasks: toggleSubtask(item.subtasks, subtaskId),
        };
      }
      return item;
    });
  };

  // Función para marcar una tarea como completada
  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: task.subtasks.every((subtask) => subtask.completed),
              isRunning: false, // Detener el temporizador cuando se completa
            }
          : task
      )
    );
  };


  // Función recursiva para pausar/reanudar el temporizador
  const toggleTimer = (items: (Task | Subtask)[], itemId: number): (Task | Subtask)[] => {
    return items.map((item) => {
      if (item.id === itemId) {
        // Pausar todas las tareas o subtareas padres antes de iniciar o reanudar esta subtarea
        return {
          ...item,
          isRunning: !item.isRunning,
        };
      } else if (item.subtasks) {
        return {
          ...item,
          subtasks: toggleTimer(item.subtasks, itemId),
        };
      }
      return item;
    });
  };

  // Función recursiva para calcular el tiempo total de las subtareas
  const calculateTotalTime = (subtasks: Subtask[]): number => {
    return subtasks.reduce((total, subtask) => {
      return total + subtask.timeSpent + calculateTotalTime(subtask.subtasks);
    }, 0);
  };

  // Función recursiva para actualizar el tiempo de las subtareas
  const updateSubtasksTime = (subtasks: Subtask[]): Subtask[] => {
    return subtasks.map((subtask) => ({
      ...subtask,
      timeSpent: subtask.isRunning ? subtask.timeSpent + 1 : subtask.timeSpent,
      subtasks: updateSubtasksTime(subtask.subtasks),
    }));
  };

  // Efecto para manejar el temporizador
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          const isAnySubtaskRunning = task.subtasks.some((subtask) => subtask.isRunning);
          return {
            ...task,
            timeSpent: task.isRunning && !isAnySubtaskRunning ? task.timeSpent + 1 : task.timeSpent,
            isRunning: task.isRunning && !isAnySubtaskRunning, // Pausar la tarea principal si alguna subtarea está en ejecución
            subtasks: updateSubtasksTime(task.subtasks),
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Función para renderizar subtareas recursivamente
  const renderSubtasks = (subtasks: Subtask[]) => {
    return subtasks.map((subtask) => (
      <div key={subtask.id} className="ml-4 mt-2 p-2 border-l-2 border-gray-300">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={subtask.completed}
            onChange={() => setTasks((prevTasks) => toggleSubtask(prevTasks, subtask.id))}
            className="mr-2"
          />
          <span>{subtask.title}</span>
          <button
            onClick={() => {
              const subtaskTitle = prompt('Nombre de la subtarea:');
              if (subtaskTitle) {
                setTasks((prevTasks) => addSubtask(prevTasks, subtask.id, subtaskTitle));
              }
            }}
            disabled={subtask.completed}
            className={`ml-4 bg-blue-500 text-white px-2 py-1 rounded text-sm ${
              subtask.completed ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Agregar Subtarea
          </button>
          <button
            onClick={() => setTasks((prevTasks) => toggleTimer(prevTasks, subtask.id))}
            disabled={subtask.completed}
            className={`ml-4 ${
              subtask.timeSpent === 0
                ? 'bg-green-500'
                : subtask.isRunning
                ? 'bg-gray-500'
                : 'bg-yellow-500'
            } text-white px-2 py-1 rounded text-sm ${
              subtask.completed ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {subtask.timeSpent === 0 ? 'Iniciar' : subtask.isRunning ? 'Pausar' : 'Reanudar'}
          </button>
          <button
            onClick={() => setTasks((prevTasks) => deleteSubtask(prevTasks, subtask.id))}
            className="ml-4 bg-red-500 text-white px-2 py-1 rounded text-sm"
          >
            Eliminar
          </button>
          <span className="ml-4">
            Tiempo: {formatTime(subtask.timeSpent + calculateTotalTime(subtask.subtasks))}
          </span>
        </div>
        {renderSubtasks(subtask.subtasks)}
      </div>
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Agregar Tarea
      </button>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="mb-4 p-4 border rounded">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <div>
                <button
                  onClick={() => toggleTask(task.id)}
                  disabled={!task.subtasks.every((subtask) => subtask.completed)}
                  className={`px-4 py-2 rounded ${
                    task.completed
                      ? 'bg-green-500'
                      : 'bg-gray-300 cursor-not-allowed'
                  } text-white mr-2`}
                >
                  {task.completed ? 'Completada' : 'Completar'}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <div className="mt-2">
              <button
                onClick={() => {
                  const subtaskTitle = prompt('Nombre de la subtarea:');
                  if (subtaskTitle) {
                    setTasks((prevTasks) => addSubtask(prevTasks, task.id, subtaskTitle));
                  }
                }}
                disabled={task.completed}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${
                  task.completed ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Agregar Subtarea
              </button>
              <button
                onClick={() => setTasks((prevTasks) => toggleTimer(prevTasks, task.id))}
                disabled={task.completed}
                className={`ml-4 ${
                  task.timeSpent === 0
                    ? 'bg-green-500'
                    : task.isRunning
                    ? 'bg-gray-500'
                    : 'bg-yellow-500'
                } text-white px-4 py-2 rounded ${
                  task.completed ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {task.timeSpent === 0 ? 'Iniciar' : task.isRunning ? 'Pausar' : 'Reanudar'}
              </button>
              <span className="ml-4">
                Tiempo: {formatTime(task.timeSpent + calculateTotalTime(task.subtasks))}
              </span>
            </div>
            {renderSubtasks(task.subtasks)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;