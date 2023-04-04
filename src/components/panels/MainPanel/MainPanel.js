import { Typography, Stack, Box } from '@mui/material';

import AddTaskPanel from '../AddTaskPanel';

import './MainPanel.css';

/**
 * A component for displaying a list of tasks.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.isArchiveSelected - A boolean indicating whether the archive is selected.
 * @param {Array} props.currentTaskListFilter - An array of task list filters.
 * @returns {JSX.Element} - The rendered component.
 */
export default function MainPanel({ isArchiveSelected, currentTaskListFilter })
{
    const selectedTaskList = currentTaskListFilter[0];
    let title = selectedTaskList?.title || "Archived Tasks";
    let description = selectedTaskList?.description || "";

    /**
     * Adds a new task to the list.
     * 
     * @param {string} newTask - The new task to add to the list.
     */
    function addTaskToList(newTask)
    {
        // TODO: Task <-> TaskList Relations.
        // TODO: Task Persistence.
        console.log("addTaskToList:", newTask);
    }

    return (
        <Box className="main-panel">
            <Stack sx={{ mb: 3, pl: 3 }} direction={"row"} alignItems={"center"} gap={3}>
                <Typography className="title">{title}</Typography>
                <Typography className="description">{description}</Typography>
            </Stack>
            {isArchiveSelected 
                ? <>
                    {/* ARCHIVE PANEL */}
                  </>
                : <>
                    <AddTaskPanel addTaskToList={addTaskToList} />
                    {/* TASK LIST PANEL */}
                  </>
            }
        </Box>
    );
}