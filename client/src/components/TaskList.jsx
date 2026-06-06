import TaskCard from "./TaskCard";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
  handleDragEnd,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white p-10 rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-2">
          Create your first task.
        </p>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={String(task.id)}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <TaskCard
                      task={task}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
                      editTask={editTask}
                      dragHandleProps={
                        provided.dragHandleProps
                      }
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;