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
  // Display message when no tasks are available
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
    // Drag and Drop context wrapper
    <DragDropContext onDragEnd={handleDragEnd}>
      
      {/* Droppable area where tasks can be reordered */}
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            
            {/* Render all tasks */}
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
                    {/* Individual Task Card */}
                    <TaskCard
                      task={task}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
                      editTask={editTask}

                      // Pass drag handle props to TaskCard
                      dragHandleProps={
                        provided.dragHandleProps
                      }
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {/* Placeholder maintains layout during dragging */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;