const TaskItem = ({ task }) => {
  const getStatusClass = () => {
    if (task.status === 'done') {
      return 'text-[#00ADB5] bg-[#00ADB5] bg-opacity-10';
    }

    if (task.status === 'progress') {
      return 'text-[#FFAA04] bg-[#FFAA04] bg-opacity-10';
    }

    if (task.status === 'pending') {
      return 'text-[#35383E bg-[#35383E] bg-opacity-10';
    }
  };
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClass()}`}
    >
      {task.title}
    </div>
  );
};

export default TaskItem;
