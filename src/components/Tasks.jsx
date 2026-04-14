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

const Tasks = () => {
  const [tasks] = useState(TASKS);
  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((tasks) => tasks.time === 'afternoon');
  const nightTasks = tasks.filter((tasks) => tasks.time === 'night');

  return (
    <div className="w-full px-8 py-16">
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
          <Button>
            Adicionar Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/*LISTA DE TAREFAS  */}
      <div className="rounded-xl bg-white p-6">
        {/* Manha */}
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />

          {morningTasks.map((tasks) => (
            <TaskItem key={tasks.id} task={tasks} />
          ))}
        </div>

        {/* Tarde */}
        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<SunMoonIcon />} />

          {afternoonTasks.map((tasks) => (
            <TaskItem key={tasks.id} task={tasks} />
          ))}
        </div>

        {/* Noite */}
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />

          {nightTasks.map((tasks) => (
            <TaskItem key={tasks.id} task={tasks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
