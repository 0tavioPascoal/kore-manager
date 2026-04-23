import Button from './Button';
import AddIcon from '../assets/icons/plusButton.svg?react';
import ClearIcon from '../assets/icons/deleteButton.svg?react';
import SunIcon from '../assets/icons/morning.svg?react';
import SunMoonIcon from '../assets/icons/afternoon.svg?react';
import MoonIcon from '../assets/icons/night.svg?react';
import TaskSeparator from './TaskSeparator';
import { useState } from 'react';
import TASKS from '../constants/tasks';
import TaskItem from './TaskItem';
import { toast } from 'sonner';
import AddTaskDialog from './AddTaskDialog';

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);
  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((tasks) => tasks.time === 'afternoon');
  const nightTasks = tasks.filter((tasks) => tasks.time === 'night');

  const handleTaskClickedCheckbox = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      if (task.status === 'pending') {
        toast.info('Tarefa iniciada!');
        return { ...task, status: 'progress' };
      }
      if (task.status === 'progress') {
        toast.success('Tarefa concluida!');
        return { ...task, status: 'done' };
      }
      if (task.status === 'done') {
        toast.info('Tarefa pendente!');
        return { ...task, status: 'pending' };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskClickedDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success('Tarefa removida com sucesso!');
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant={'ghost'}>
            Limpar Tarefa
            <ClearIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogOpen(true)}>
            Adicionar Tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog
            isOpenDialog={addTaskDialogOpen}
            handleClose={() => setAddTaskDialogOpen(false)}
          />
        </div>
      </div>

      {/*LISTA DE TAREFAS  */}
      <div className="rounded-xl bg-white p-6">
        {/* Manha */}
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />

          {morningTasks.map((tasks) => (
            <TaskItem
              key={tasks.id}
              task={tasks}
              handleClickedCheckbox={handleTaskClickedCheckbox}
              handleClickedDelete={handleTaskClickedDelete}
            />
          ))}
        </div>

        {/* Tarde */}
        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<SunMoonIcon />} />

          {afternoonTasks.map((tasks) => (
            <TaskItem
              key={tasks.id}
              task={tasks}
              handleClickedCheckbox={handleTaskClickedCheckbox}
              handleClickedDelete={handleTaskClickedDelete}
            />
          ))}
        </div>

        {/* Noite */}
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />

          {nightTasks.map((tasks) => (
            <TaskItem
              key={tasks.id}
              task={tasks}
              handleClickedCheckbox={handleTaskClickedCheckbox}
              handleClickedDelete={handleTaskClickedDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
