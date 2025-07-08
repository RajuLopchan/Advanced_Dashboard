import React, { useState } from 'react';
import {
  Card,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  AvatarGroup,
  Avatar,
} from '@mui/material';

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

    setTasks(prev => ({
      ...prev,
      todo: [newTask, ...prev.todo],
    }));

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

  return (
    <Box sx={{ display: 'flex', gap: 4, p: 2 }}>
      {(['todo', 'inprogress', 'done'] as ColumnType[]).map((col) => (
        <Card
          key={col}
          sx={{
            borderRadius: 2,
            p: 2,
            minWidth: 360,
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
            <Card sx={{ mb: 2, p: 2,width:335}}>
              <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'center' }}>
                Add New Task
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container  rowSpacing={2}>
                  {inputs.map((input) => (
                    <Grid size={12} key={input.name}>
                      <TextField
                        placeholder={input.placeholder}
                        name={input.name}
                        type={input.type}
                        variant="outlined"
                        size="small"
                        required
                        value={formData[input.name as keyof typeof formData]}
                        onChange={handleChange}
                        sx={{
                            }}
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

          {tasks[col].map((task) => (
            <Card key={task.id} sx={{ mb: 2, p: 2 }}>
              <Typography variant="subtitle1">{task.taskName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {task.teamName}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2">{task.attachments}</Typography>
                <Typography variant="body2">{task.messages}</Typography>
                <Typography variant="body2">{task.daysRemaining} Days</Typography>
              </Box>
              <Box sx={{ mt: 1 }}>
                <AvatarGroup max={4}>
                  <Avatar alt="A" src="" />
                  <Avatar alt="B" src="" />
                  <Avatar alt="C" src="" />
                </AvatarGroup>
              </Box>
            </Card>
          ))}
        </Card>
      ))}
    </Box>
  );
}
