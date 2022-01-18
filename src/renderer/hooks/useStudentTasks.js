import { useQuery } from 'react-query';
import { TasksService } from '../services';

const useStudentTasks = ({ studentId, params }) =>
  useQuery(
    ['tasks', studentId],
    () => TasksService.listStudentTasks({ studentId, params }),
    {
      refetchOnWindowFocus: false,
      select: (query) => query.data.results,
    }
  );

export default useStudentTasks;
