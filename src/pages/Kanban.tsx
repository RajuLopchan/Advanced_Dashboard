import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from '@mui/material';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';

type ColumnType = 'todo' | 'inprogress' | 'done';

interface Task {
  id: string;
  taskName: string;
  teamName: string;
  attachments: string;
  messages: string;
  daysRemaining: string;
}

type TasksState = {
  [key in ColumnType]: Task[];
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<TasksState>({
    todo: [],
    inprogress: [],
    done: [],
  });

  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState<Omit<Task, 'id'>>({
    taskName: '',
    teamName: '',
    attachments: '',
    messages: '',
    daysRemaining: '',
  });

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('kanbanTasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      ...formData,
      id: Date.now().toString(),
    };

    const updatedTasks: TasksState = {
      ...tasks,
      todo: [newTask, ...tasks.todo],
    };

    setTasks(updatedTasks);
    localStorage.setItem('kanbanTasks', JSON.stringify(updatedTasks));

    setFormVisible(false);
    setFormData({
      taskName: '',
      teamName: '',
      attachments: '',
      messages: '',
      daysRemaining: '',
    });
  };

  const inputs = [
    { placeholder: 'Task Name', name: 'taskName', type: 'text' },
    { placeholder: 'Team Name', name: 'teamName', type: 'text' },
    { placeholder: 'No. of Attachments', name: 'attachments', type: 'number' },
    { placeholder: 'No. of Messages', name: 'messages', type: 'number' },
    { placeholder: 'Days Remaining', name: 'daysRemaining', type: 'number' },
  ];

  const columnTitles: { [key in ColumnType]: string } = {
    todo: 'To Do task',
    inprogress: 'In Progress',
    done: 'Done',
  };

  // ✅ Handle drag end event
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside any droppable, do nothing
    if (!destination) return;

    // If dropped in the same place, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    const sourceCol = source.droppableId as ColumnType;
    const destCol = destination.droppableId as ColumnType;

    const sourceTasks = Array.from(tasks[sourceCol]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceCol === destCol) {
      // ✅ Reorder within same column
      sourceTasks.splice(destination.index, 0, movedTask);

      const updated = {
        ...tasks,
        [sourceCol]: sourceTasks,
      };

      setTasks(updated);
      localStorage.setItem('kanbanTasks', JSON.stringify(updated));
    } else {
      // ✅ Move between columns
      const destTasks = Array.from(tasks[destCol]);
      destTasks.splice(destination.index, 0, movedTask);

      const updated = {
        ...tasks,
        [sourceCol]: sourceTasks,
        [destCol]: destTasks,
      };

      setTasks(updated);
      localStorage.setItem('kanbanTasks', JSON.stringify(updated));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ display: 'flex', gap: 4, p: 2 }}>
        {(['todo', 'inprogress', 'done'] as ColumnType[]).map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <Card
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  borderRadius: 2,
                  p: 2,
                  minWidth: 360,
                  backgroundColor: 'white',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {columnTitles[col]}
                </Typography>


                {col === 'todo' && !formVisible && (
                  <Box
                    sx={{
                      border: '2px dashed grey',
                      borderRadius: 2,
                      px: 2,
                      textAlign: 'center',
                      cursor: 'pointer',
                      mb: 2,
                    }}
                    onClick={() => setFormVisible(true)}
                  >
                    <Typography variant="h3" color="grey.500">
                      +
                    </Typography>
                  </Box>
                )}

                {col === 'todo' && formVisible && (
                  <Card sx={{ mb: 2, p: 2, width: 335 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'center' }}>
                      Add New Task
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container rowSpacing={2}>
                        {inputs.map((input) => (
                          <Grid key={input.name} size={12}>
                            <TextField
                              placeholder={input.placeholder}
                              name={input.name}
                              type={input.type}
                              variant="outlined"
                              size="small"
                              required
                              value={formData[input.name as keyof typeof formData]}
                              onChange={handleChange}
                            />
                          </Grid>
                        ))}
                        <Grid size={12}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button type="submit" variant="contained" size="small">
                              Save
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => setFormVisible(false)}
                            >
                              Cancel
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Card>
                )}

                {tasks[col].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          mb: 2,
                          p: 2,
                          backgroundColor: "white",
                          borderRadius: 2,
                          boxShadow: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 6,
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle1" color="black">
                              {task.taskName}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                              }}
                            >
                              <img src="/assets/images/user.svg" width={30} alt="" />
                              <Typography variant="body2" color="black">
                                {task.teamName}
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              width: "80px",
                              gap: "10px",
                              alignItems: "center",
                            }}
                          >
                            <img src="/assets/images/clock.svg" width={20} alt="" />
                            <Typography variant="body1" color="black">
                              {task.daysRemaining} Days
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 3 }}>
                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                              <img src="/assets/images/attachement.svg" alt="" />
                              <Typography variant="body2" color="black">
                                {task.attachments}
                              </Typography>
                            </Box>

                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                              <img src="/assets/images/comments.svg" alt="" />
                              <Typography variant="body2" color="black">
                                {task.messages}
                              </Typography>
                            </Box>
                          </Box>

                          <img src="/assets/images/Frame.svg" alt="" />
                        </Box>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Card>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
}
