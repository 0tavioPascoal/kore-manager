import Button from './Button';
import AddIcon from '../assets/icons/plusButton.svg?react';
import ClearIcon from '../assets/icons/deleteButton.svg?react';
import SunIcon from '../assets/icons/morning.svg?react';
import SunMoonIcon from '../assets/icons/afternoon.svg?react';
import MoonIcon from '../assets/icons/night.svg?react';
import TaskSeparators from './TaskSeparators';

const Tasks = () => {
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
          <TaskSeparators title="Manhã" icon={<SunIcon />} />
        </div>

        {/* Tarde */}
        <div className="my-6 space-y-3">
          <TaskSeparators title="Tarde" icon={<SunMoonIcon />} />
        </div>

        {/* Noite */}
        <div className="space-y-3">
          <TaskSeparators title="Noite" icon={<MoonIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
