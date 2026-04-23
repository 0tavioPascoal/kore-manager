import { createPortal } from 'react-dom';
import Input from './input';
import Button from './Button';

const AddTaskDialog = ({ isOpenDialog, handleClose }) => {
  if (!isOpenDialog) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      <div className="rounded-xl bg-white p-5 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-black">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-gray-500">
          Insira as informações abaixo!
        </p>

        <div className="flex flex-col space-y-4">
          <Input
            id="title"
            label="Título"
            placeholder="Insira o título da tarefa"
          />
          <Input id="time" label="Horário" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Insira a descrição da tarefa"
          />
          <div className="flex items-center gap-3">
            <Button
              size="large"
              variant="secondary"
              className="w-full"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" variant="primary" className="w-full">
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;
